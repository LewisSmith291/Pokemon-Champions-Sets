import type {Request, Response, NextFunction} from "express";
import {fromNodeHeaders} from "better-auth/node";
import {auth} from "../auth.js";

// Same session lookup as requireAuth, but never rejects
// Sets req.user when there is a valid session
// For routes that might be read by anyone, where knowing the viewer changes what they see (private sets)
export async function optionalAuth(req: Request, _res: Response, next: NextFunction){
  const result = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (result){
    // req.user is now the viewer, rather than guaranted to exist
    req.user = {id: result.user.id, email: result.user.email}
  }

  next();
}