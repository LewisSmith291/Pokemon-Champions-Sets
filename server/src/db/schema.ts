// Barrel file: re-exports every table so drizzle-kit (and app queries) see them through one import 
// Auth tables live in auth-schema.ts
// Set tables live in set-schema.ts
export * from "./auth-schema.js";
export * from "./set-schema.js"
