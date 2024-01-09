import { NextMiddleware, NextRequest, NextFetchEvent } from 'next/server';

export function withMiddleware2(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const url = request.url;
    console.log('middleware2.ts: request.url', url);

    return middleware(request, event);
  };
}
