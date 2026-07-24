import "dotenv/config"
import express from "express"
import cors from "cors"
import { toNodeHandler } from "better-auth/node"
import { auth } from "./auth"

const app = express();
const PORT = Number(process.env.PORT ?? 3001); // Falls back to port 3001 if .env.PORT is null. Convert string into port number
const CLIENT_URL = process.env.CLIENT_URL ?? "http://localhost:5173"
const LIVE_URL = process.env.LIVE_URL ?? "https://championsets.netlify.app/"

const allowedOrigins = [CLIENT_URL, LIVE_URL].filter(Boolean);

// Set up CORS
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Session cookiues can be sent across origins
    
  }),
);

// Better Auth endpoints use different HTTP verbs
// /api/auth/*splat hands all routes after /auth/... to Better Auth
app.all("/api/auth/*splat", toNodeHandler(auth));

// Only touches routes, rather than messing up Better Auth
app.use(express.json());

// Health check endpoint. Proves if server is alive
// '_req' prevents noUnusedParameters from coming up with an error from tsconfig.json as req is unused here
app.get("/health", (_req, res)=> { 
  res.json({status: "ok"});
}); 

// app.listen starts accepting connections on the 'PORT' port number
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
  console.log(`Trusting client origin: ${CLIENT_URL}`);
})