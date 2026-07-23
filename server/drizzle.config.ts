import {defineConfig} from "drizzle-kit";
import "dotenv/config"

export default defineConfig({
  schema: "./schema.ts", // Source of table schema
  out: "./drizzle", // Generated SQL migrations go here (output)
  dialect: "postgresql",
  dbCredentials: {url: process.env.DATABASE_URL!} // ! tells TS that it is definately not undefined
});