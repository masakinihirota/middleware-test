import { NextMiddleware, NextRequest, NextFetchEvent } from 'next/server';

export function withMiddleware1(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    console.log(
      'middleware1.ts: request.nextUrl.pathname',
      request.nextUrl.pathname
    );

    return middleware(request, event);
  };
}
