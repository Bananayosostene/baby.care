// lib/auth.ts
import { headers } from "next/headers";
import { AuthenticatedUser } from "@/types/auth";

export async function getCurrentUser(): Promise<AuthenticatedUser | null> {
  try {
    const headersList = await headers();
    const userHeader = headersList.get("user");
    console.log("Auth - User header:", userHeader); // Debug log

    if (!userHeader) {
      return null;
    }

    const user = JSON.parse(userHeader) as AuthenticatedUser;
    console.log("Auth - Parsed user:", user); // Debug log
    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
