// Barrel file: re-exports every table so drizzle-kit (and app queries) see them through one import 
// Auth tables live in auth-schema.ts; app tables will be added here as the domain model grows
export * from "./auth-schema.js";
