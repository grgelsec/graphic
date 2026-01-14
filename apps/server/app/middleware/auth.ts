import type { Request, Response, NextFunction } from "express";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Extract token
  //Verify token with supabase
  //Try with 'user claims from verified jwt'
  //Token is valid so set request data
}
