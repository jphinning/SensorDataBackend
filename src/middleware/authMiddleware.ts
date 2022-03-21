import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined | void {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    const { id, email } = data as TokenPayload;

    req.userToken = { id, email };

    next();
  } catch {
    return res.status(401).json({ message: "Unauthorized on catch" });
  }
}
