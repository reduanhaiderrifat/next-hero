import { NextResponse } from "next/server";

export const middleware = (request) => {
  // if (request.nextUrl.pathname.startsWith("/about")) {
  //   return NextResponse.redirect(new URL("/contact", request.url));
  // }

  const cookies = request.cookies.get("token");
  console.log(request.cookies.get("token"))
  const co = "next-superhero";
  if (!cookies) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (cookies.value !== co) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
