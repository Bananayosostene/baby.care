export enum UserRole {
  ADMIN = "admin",
  FAMILY = "family",
}


export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
  exp?: number;
}
export type AuthError = {
  type:
    | "NO_TOKEN"
    | "INVALID_TOKEN"
    | "EXPIRED_TOKEN"
    | "INVALID_FORMAT"
    | "ROLE_FORBIDDEN"
    | "SERVER_ERROR";
  message: string;
};

export const USER_STATUSES = ['active', 'inactive'] as const;
export type UserStatus = typeof USER_STATUSES[number];

export const validateUserStatus = (status: string): status is UserStatus => {
  return USER_STATUSES.includes(status as UserStatus);
};

