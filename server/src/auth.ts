import "dotenv/config";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index.js";
// The auth table definitions (user/session/account/verification), so the adapter
// can map its model names to real tables.
import * as schema from "./db/auth-schema.js";

// Configures Better Auth
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  // The client sends cookies cross-origin (Netlify -> API host), so the API
  // must explicitly trust the frontend's origin.
  trustedOrigins: [process.env.CLIENT_URL ?? "http://localhost:5173", process.env.LIVE_URL ?? "https://championsets.netlify.app/"],
});
