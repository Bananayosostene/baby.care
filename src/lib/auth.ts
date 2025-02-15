import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "@/lib/jwt";
import { AuthenticatedUser, UserRole, AuthError } from "@/types/auth";

// Shared function to extract and validate token
export async function validateAuthToken(
  authHeader: string | null
): Promise<{ user: AuthenticatedUser | null; error: AuthError | null }> {
  try {
    if (!authHeader) {
      return {
        user: null,
        error: {
          type: "NO_TOKEN",
          message: "No authorization header provided",
        },
      };
    }

    if (!authHeader.startsWith("Bearer ")) {
      return {
        user: null,
        error: {
          type: "INVALID_FORMAT",
          message: "Invalid authorization format. Use Bearer token",
        },
      };
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return {
        user: null,
        error: {
          type: "NO_TOKEN",
          message: "No token provided in authorization header",
        },
      };
    }

    const decodedUser = decodeToken(token);
    if (!decodedUser) {
      return {
        user: null,
        error: {
          type: "INVALID_TOKEN",
          message: "Token is invalid or expired",
        },
      };
    }

    return { user: decodedUser, error: null };
  } catch (error) {
    return {
      user: null,
      error: {
        type: "SERVER_ERROR",
        message: "Error processing authentication",
      },
    };
  }
}

// For use in API routes
export async function getCurrentUser(): Promise<{
  user: AuthenticatedUser | null;
  error: AuthError | null;
}> {
  try {
    const headersList = headers();
    const authHeader = (await headersList).get("authorization");
    return await validateAuthToken(authHeader);
  } catch (error) {
    console.error("Error getting current user:", error);
    return {
      user: null,
      error: {
        type: "SERVER_ERROR",
        message: "Error processing authentication",
      },
    };
  }
}

// For use in middleware
export async function handleAuth(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  const { user, error } = await validateAuthToken(authHeader);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.type === "ROLE_FORBIDDEN" ? 403 : 401 }
    );
  }

  if (!user) {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }

  // Role-based checks
  if (
    request.nextUrl.pathname.startsWith("/api/admin") &&
    user.role !== UserRole.ADMIN
  ) {
    return NextResponse.json(
      { error: "Forbidden: Admins only" },
      { status: 403 }
    );
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-auth-user", JSON.stringify(user));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}


// Helper to check if a route should be protected
// export function isProtectedRoute(pathname: string): boolean {
//   const publicRoutes = ['/api/users/login', '/api/users/signup'];
//   return !publicRoutes.includes(pathname);
// }