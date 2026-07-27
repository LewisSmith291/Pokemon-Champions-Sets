import type { Request, Response, NextFunction } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../auth.js";

// Express has no slot for authenticated user data, so this adds one
// declare global is used because Express already has a local namespace, 
// so this is adding to global scope rather than the one from express
declare global {
  namespace Express {
    interface Request {
      user?: {id: string, email: string};
    }
  }
}

// Reject any request without a valid session
// Attack authenticated user so handlers don't have to trust an id supplied by client
export async function requireAuth(req: Request, res: Response, next: NextFunction){
  // Checks session cookie from headers and verifies against database
  const result = await auth.api.getSession({
    // fromNodeHeaders because Express gives Node's 'IncomingHttpHeaders', whereas Better Auth expects a 'Headers' instance 
    headers: fromNodeHeaders(req.headers),
  });

  // If session is not authenticated
  if (!result){
    res.status(401).json({error: "Not authenticated"});
    return;
  }

  // If authenticated, only give handlers required information, rather than whole response
  req.user = {id: result.user.id, email: result.user.email};
  // Carry on normally
  next();
}