import createIntlMiddleware from "next-intl/middleware"
import { routing } from "@/i18n/routing"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const intlMiddleware = createIntlMiddleware(routing)

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect CMS routes — redirect to /cms/login if no auth cookie
  const isCMSRoute = pathname.includes("/cms")
  const isLoginPage = pathname.includes("/cms/login")
  const isAuthRoute = pathname.startsWith("/api/auth")

  // Skip auth check for login page and auth API routes
  if (isCMSRoute && !isLoginPage && !isAuthRoute) {
    const token =
      request.cookies.get("authjs.session-token") ??
      request.cookies.get("__Secure-authjs.session-token")

    if (!token) {
      const loginUrl = new URL("/cms/login", request.url)
      loginUrl.searchParams.set("callbackUrl", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    // Match all paths except static files, api routes, and internal Next.js paths
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
