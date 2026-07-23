import { createAuthClient } from "better-auth/react";

// Talks to the Express API. VITE_API_URL lets the deployed build point at the real backend host 
// locally it falls back to the dev server. Only VITE_-prefixed vars are exposed to browser code by Vite
export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3001",
});

// Re-export the pieces we use so components import from one place.
export const { signIn, signUp, signOut, useSession } = authClient;
