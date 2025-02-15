// jwt
import jwt from "jsonwebtoken";
import { AuthenticatedUser } from "@/types/auth";

const JWT_SECRET = process.env.JWT_SECRET || "qwertyuiop";
const SIGNUP_SECRET = process.env.SIGNUP_SECRET || "poiuytrewq";

export const generateToken = (data: object) => {
  const token = jwt.sign(data, JWT_SECRET, {
    expiresIn: '24h',
  });
  return token;
};

export const signupToken = (data: object) => {
  const token = jwt.sign(data, SIGNUP_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

export const decodeToken = (token: string): AuthenticatedUser | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthenticatedUser;
    
    // Check if token is expired
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTimestamp) {
      return null;
    }
    
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return null;
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return null;
    }
    throw error;
  }
};
