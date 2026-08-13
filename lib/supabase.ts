import { createClient } from "@supabase/supabase-js";

// Server-only client — same Supabase project Vicious OS writes to.
// Not NEXT_PUBLIC_: only ever runs at build/request time server-side.
const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

/** Null when env vars aren't configured — callers should treat that the
 *  same as a failed fetch and fall back to mock data rather than throw. */
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
