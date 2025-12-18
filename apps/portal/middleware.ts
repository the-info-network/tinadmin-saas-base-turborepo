import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@tinadmin/core/database";
import { resolveContext } from "@tinadmin/core/multi-tenancy/resolver";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  // Refresh session if expired
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    console.log("[portal middleware] Auth error:", authError.message);
  }

  // Resolve context (supports both multi-tenant and organization-only modes)
  const hostname = request.headers.get("host") || "";
  const context = await resolveContext({
    headers: request.headers,
    url: request.url,
    hostname,
  });

  // Set headers for downstream use
  if (context.tenantId) {
    request.headers.set("x-tenant-id", context.tenantId);
    response.headers.set("x-tenant-id", context.tenantId);
  }

  if (context.organizationId) {
    request.headers.set("x-organization-id", context.organizationId);
    response.headers.set("x-organization-id", context.organizationId);
  }

  request.headers.set("x-system-mode", context.mode);
  response.headers.set("x-system-mode", context.mode);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

