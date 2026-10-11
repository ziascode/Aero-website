import { NextResponse } from "next/server";
import { resolveCanonical } from "@/lib/site-urls";

export function middleware(request) {
  const target = resolveCanonical(request.nextUrl.pathname);
  if (!target || target === request.nextUrl.pathname) return NextResponse.next();

  const url = new URL(request.url);
  url.pathname = target;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
