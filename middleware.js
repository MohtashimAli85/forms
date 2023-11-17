import { NextResponse } from 'next/server';

export function middleware(request) {
  const userToken = request.cookies.get('token')?.value;
  const resetApp = () => {
    if (pathname !== '/auth/login') {
      const response = NextResponse.redirect(
        new URL('/auth/login', request.url)
      );
      response.cookies.delete('token');
      return response;
    }
  };
  const { pathname } = request.nextUrl;
  if(pathname.includes('register')) return
  try {
    if (typeof JSON.parse(userToken) === 'object' && userToken !== 'null') {
      if (pathname === '/auth/login') {
        return NextResponse.redirect(
          new URL('/assessment/general', request.url)
        );
      }
    } else {
      return resetApp();
    }
  } catch (err) {
    return resetApp();
  }
}

export const config = {
  matcher: ['/assessment/:path*', '/auth/:path*']
};
