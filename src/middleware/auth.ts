// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "@/lib/jwt";
import { UserRole } from "@/types/auth";

export async function middleware(request: NextRequest) {
  console.log("Middleware executing for path:", request.nextUrl.pathname); // Debug log

  // Get token from Authorization header
  const authHeader = request.headers.get("authorization");
  console.log("Middleware - Auth Header:", authHeader); // Debug log

  const token = authHeader?.split(" ")[1];
  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized: No token provided" },
      { status: 401 }
    );
  }

  // Verify token
  const decodedUser = decodeToken(token);
  console.log("Middleware - Decoded User:", decodedUser); // Debug log

  if (!decodedUser) {
    return NextResponse.json(
      { message: "Unauthorized: Token expired or invalid" },
      { status: 401 }
    );
  }

  // Create new headers and clone the request
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("user", JSON.stringify(decodedUser));

  // Role-based checks
  if (
    request.nextUrl.pathname.startsWith("/api/admin") &&
    decodedUser.role !== UserRole.ADMIN
  ) {
    return NextResponse.json(
      { message: "Forbidden: Admins only" },
      { status: 403 }
    );
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // For debugging, also set the header on the response
  response.headers.set("x-user-debug", JSON.stringify(decodedUser));

  return response;
}

// Update the matcher to include the signup route
export const config = {
  matcher: [
    "/api/users/signup",
    "/api/admin/:path*",
    "/api/family/:path*",
    // Add other protected routes here
  ],
};
