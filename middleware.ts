import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/enter" || path === "/enter/signup";
  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/enter", request.nextUrl));
  }
  if (path.includes("/api") && !token) {
    return NextResponse.redirect(new URL("/enter", request.nextUrl));
  }
  if (path.includes("/logout") && !token) {
    return NextResponse.redirect(new URL("/enter", request.nextUrl));
  }

}

export const config = {
  matcher: [
    "/",
    "/latest",
    "/t/:path*",
    "/top/:path*",
    "/enter/:path*",
    "/api/:path?",
    "/api/users/logout",
  ],
};
