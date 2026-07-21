# Server

Backend for Pokemon Champion Sets. Not started yet — this folder is a placeholder
so the repo layout is in place.

Nothing here is built or deployed. The Netlify build only touches `client/`
(see `netlify.toml` at the repo root), so an empty `server/` cannot break a deploy.

When there is something to run, it gets its own `package.json` and is deployed
separately from the client — Netlify hosts static files only.
