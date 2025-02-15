
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { handleAuth, isProtectedRoute } from "@/lib/auth";

// export async function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
  
//   // Only apply auth middleware to protected routes
//   if (isProtectedRoute(pathname)) {
//     return handleAuth(request);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/api/admin/:path*",
//     "/api/family/:path*",
//     "/api/:path*"
//   ],
// };
