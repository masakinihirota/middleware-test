import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';

function withMiddleware1(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    console.log(
      'middleware1.ts: request.nextUrl.pathname',
      request.nextUrl.pathname
    );

    return middleware(request, event);
  };
}

function withMiddleware2(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const url = request.url;
    console.log('middleware2.ts: request.url', url);

    return middleware(request, event);
  };
}

async function middleware3(request: NextRequest) {
  const credentials = request.credentials;
  console.log('middleware3.ts: request.credentials', credentials);

  return NextResponse.next();
}

export default withMiddleware1(withMiddleware2(middleware3));

export const config = {
  matcher: ['/'],
};
