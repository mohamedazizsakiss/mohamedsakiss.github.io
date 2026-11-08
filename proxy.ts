import { NextResponse, type NextRequest } from "next/server";

// English is served at "/" (no prefix) so existing links and SEO stay intact.
// French and German live at "/fr" and "/de" and are matched by app/[lang] directly.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // "/en" would duplicate "/": send it to the canonical URL.
  if (pathname === "/en") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  // Serve the English page for "/" without changing the URL.
  const url = request.nextUrl.clone();
  url.pathname = "/en";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/", "/en"],
};
