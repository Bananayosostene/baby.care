import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

export async function checkAuth() {
  const { user, error } = await getCurrentUser();

  if (error) {
    return {
      auth: false,
      response: NextResponse.json(
        { error: error.message },
        { status: error.type === "ROLE_FORBIDDEN" ? 403 : 401 }
      ),
    };
  }

  if (!user) {
    return {
      auth: false,
      response: NextResponse.json(
        { error: "Authentication failed" },
        { status: 401 }
      ),
    };
  }

  return { auth: true, user };
}
