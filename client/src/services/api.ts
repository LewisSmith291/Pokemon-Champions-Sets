// Where the Express API lives.
//
// In production this is "" - the same origin as the site - because netlify.toml
// proxies /api/* through to Render. Same-origin requests keep the login cookie
// first-party, which browsers that block third-party cookies (Safari by default)
// require. In development the API is a separate server on port 3001.
//
// VITE_API_URL overrides either default. Leave it unset on Netlify: pointing it
// at Render directly would skip the proxy and bring the cookie problem back.
export const API_URL: string =
  import.meta.env.VITE_API_URL ?? (import.meta.env.PROD ? "" : "http://localhost:3001");
