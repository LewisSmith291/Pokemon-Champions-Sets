import "dotenv/config";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index.js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  // The client sends cookies cross-origin (Netlify -> API host), so the API
  // must explicitly trust the frontend's origin.
  trustedOrigins: [process.env.CLIENT_URL ?? "http://localhost:5173"],
});
