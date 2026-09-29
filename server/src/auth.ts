import "dotenv/config";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index.js";
// The auth table definitions (user/session/account/verification), so the adapter
// can map its model names to real tables.
import * as schema from "./db/auth-schema.js";

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
