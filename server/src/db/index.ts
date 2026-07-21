import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set — copy .env.example to .env and fill it in");
}

// Neon over a normal TCP pool. Use the *pooled* connection string from the Neon
// dashboard (its host contains "-pooler") so short-lived queries don't exhaust
// the connection limit.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export const db = drizzle(pool);
