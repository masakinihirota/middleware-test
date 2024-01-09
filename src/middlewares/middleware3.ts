import { NextMiddleware, NextRequest, NextFetchEvent } from 'next/server';

export function withMiddleware3(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const credentials = request.credentials;
    console.log('middleware3.ts: request.credentials', credentials);

    return middleware(request, event);
  };
}
