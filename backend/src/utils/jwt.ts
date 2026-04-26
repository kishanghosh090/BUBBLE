import type { JwtPayload } from "jsonwebtoken";
import { env } from "../config/env";
import jwt from "jsonwebtoken";

const verifyJWT = (token: string): { id: string } | false => {
  try {
    const decoded = jwt.verify(token, env.ACCESS_TOKEN_SECRET as string) as {
      id: string;
    };
    return decoded;
  } catch (err) {
    return false;
  }
};

export { verifyJWT };
