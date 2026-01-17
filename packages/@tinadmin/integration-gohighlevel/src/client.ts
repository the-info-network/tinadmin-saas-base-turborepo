import "server-only";

import type { GHLApiError } from "./types";

const DEFAULT_BASE_URL = "https://services.leadconnectorhq.com";

export class GoHighLevelClient {
  constructor(
    private accessToken: string,
    private baseUrl: string = DEFAULT_BASE_URL
  ) {}

  private async request<T>(
    path: string,
    options?: { method?: string; headers?: Record<string, string>; body?: any }
  ): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: options?.method ?? "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
        ...(options?.headers ?? {}),
      },
      body: options?.body ? JSON.stringify(options.body) : undefined,
    });

    const text = await res.text();
    const json = text ? safeJson(text) : null;

    if (!res.ok) {
      const err: GHLApiError = {
        message: (json as any)?.message ?? `GHL request failed: ${res.status}`,
        status: res.status,
        details: json,
      };
      throw new Error(JSON.stringify(err));
    }

    return (json ?? {}) as T;
  }

  // Minimal endpoints we need to prove the connector works
  async listContacts(params: { locationId: string; limit?: number; offset?: number }) {
    const q = new URLSearchParams();
    q.set("locationId", params.locationId);
    if (params.limit) q.set("limit", String(params.limit));
    if (params.offset) q.set("offset", String(params.offset));
    return this.request<any>(`/contacts/?${q.toString()}`);
  }
}

function safeJson(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

