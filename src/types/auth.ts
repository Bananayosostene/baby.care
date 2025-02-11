export enum UserRole {
  ADMIN = "admin",
  FAMILY = "family",
}

export interface AuthenticatedUser {
  id: string;
  email: string;
  username: string;
  role: string;
  iat?: number;
  exp?: number;
}

