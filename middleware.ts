import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnAdminPage = req.nextUrl.pathname.startsWith("/admin");
  const isOnLoginPage = req.nextUrl.pathname === "/admin/login";

  // Allow access to login page
  if (isOnLoginPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/admin", req.nextUrl));
    }
    return NextResponse.next();
  }

  // Protect admin routes
  if (isOnAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};
