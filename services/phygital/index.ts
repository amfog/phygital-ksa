import type { PhygitalData } from "./PhygitalRepository";
import { MockPhygitalRepository } from "./MockPhygitalRepository";
import { SupabasePhygitalRepository } from "./SupabasePhygitalRepository";

const mock = new MockPhygitalRepository();
const live = new SupabasePhygitalRepository();

let cached: PhygitalData | null = null;

/**
 * Live-first: if Supabase is configured and the query succeeds, trust it
 * completely — including legitimately empty institutions/players/partners
 * arrays, since `regions` is always seeded (13 provinces) and the rest
 * fills in over time via Vicious OS. Only fall back to the mock dataset
 * if the query itself fails (no env vars, network issue), so the site
 * never renders broken.
 *
 * Cached per server instance/build.
 */
export async function getPhygitalData(): Promise<PhygitalData> {
  if (cached) return cached;

  try {
    cached = await live.getData();
    return cached;
  } catch {
    cached = await mock.getData();
    return cached;
  }
}
