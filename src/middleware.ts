import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices";
const authRoutes = ["/login", "/register"];
type role = keyof typeof roleBasedPrivateRoutes;
const roleBasedPrivateRoutes = {
  tenant: [/^\/tenant/],
  admin: [/^\/admin/],
  landlord: [/^\/landlord/],
};
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `https://basa-khoji-client-b4a6.vercel.app/login?redirectPath=${pathname}`,
          request.url
        )
      );
      // return NextResponse.redirect(
      //   new URL(
      //     `http://localhost:3000/login?redirectPath=${pathname}`,
      //     request.url
      //   )
      // );
    }
  }
  if (
    (userInfo?.role as role) &&
    roleBasedPrivateRoutes[userInfo?.role as role]
  ) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/admin",
    "/admin/:page",
    "/tenant",
    "/tenant/:page",
    "/landlord",
    "/landlord/:page",
  ],
};
