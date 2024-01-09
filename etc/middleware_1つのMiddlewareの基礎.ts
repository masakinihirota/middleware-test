import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(
    'middleware.ts: request.nextUrl.pathname',
    request.nextUrl.pathname
  );

  const url = request.url;
  console.log('middleware.ts: request.url', url);

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
