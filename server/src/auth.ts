import "dotenv/config";
import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index.js";
// The auth table definitions (user/session/account/verification), so the adapter
// can map its model names to real tables.
import * as schema from "./db/auth-schema.js";
import { isNameTaken, nameProblem, normaliseName } from "./validation/displayName.js";

const isProduction = process.env.NODE_ENV === "production";

// Configures Better Auth
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    // Delete account, from the settings page. The client sends the password and
    // Better Auth checks it before deleting. Every set, vote and save goes with
    // the account - all of those foreign keys cascade from the user row.
    deleteUser: {
      enabled: true,
    },
  },
  // Display-name rules, run inside Better Auth's own writes so they cover sign-up
  // and rename alike - there's no other path that sets a name.
  databaseHooks: {
    user: {
      create: {
        before: async (newUser) => {
          const name = normaliseName(newUser.name);
          const problem = nameProblem(name);
          if (problem) throw new APIError("BAD_REQUEST", { message: problem });
          if (await isNameTaken(name)) {
            throw new APIError("BAD_REQUEST", { message: "That display name is already taken." });
          }
          return { data: { ...newUser, name } };
        },
      },
      update: {
        before: async (changes, context) => {
          // Other updates - email verification flags, the image - pass straight through
          if (typeof changes.name !== "string") return;

          const name = normaliseName(changes.name);
          const problem = nameProblem(name);
          if (problem) throw new APIError("BAD_REQUEST", { message: problem });

          // The hook is only handed the changed fields, so who's renaming comes
          // from the session. Their own row is skipped, letting "dave" -> "Dave".
          const userId = context?.context.session?.user.id;
          if (await isNameTaken(name, userId)) {
            throw new APIError("BAD_REQUEST", { message: "That display name is already taken." });
          }
          return { data: { ...changes, name } };
        },
      },
    },
  },
  // Requests arrive carrying the page's Origin header. In production that's the
  // Netlify site (proxied through to here), locally it's the Vite dev server.
  trustedOrigins: [
    process.env.CLIENT_URL ?? "http://localhost:5173", 
    process.env.LIVE_URL ?? "https://championsets.netlify.app",
    process.env.BETTER_AUTH_URL ?? "http://localhost:3001"
  ],
  advanced: {
    // Lax in both, now that production traffic reaches this server through the
    // Netlify proxy: the browser only ever talks to the site's own domain, so the
    // cookie is first-party. The old sameSite "none" made it a cross-site cookie,
    // which Safari refuses outright.
    defaultCookieAttributes: isProduction ?
    {
      sameSite: "lax", secure: true,  // https in production
    } :
    {
      sameSite: "lax", secure: false  // localhost uses http
    },
  }
});
