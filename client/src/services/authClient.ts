import { createAuthClient } from "better-auth/react";
import { API_URL } from "./api";

// Talks to the Express API. VITE_API_URL lets the deployed build point at the real backend host 
// locally it falls back to the dev server. Only VITE_-prefixed vars are exposed to browser code by Vite
export const authClient = createAuthClient({
  // Better Auth needs an absolute URL, so the same-origin "" used in production
  // becomes the site's own origin - where the /api proxy lives
  baseURL: API_URL || window.location.origin,
});

// Re-export the pieces we use so components import from one place.
export const { signIn, signUp, signOut, useSession } = authClient;
