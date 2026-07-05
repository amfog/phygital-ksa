# Phygital KSA

The national hub for phygital competition in Saudi Arabia — hosting the SEF Arena
tournament with Al-Ittihad Al-Saudi, and the national deployment framework across
schools, universities, and corporates.

Built with Next.js 16 (App Router) + TypeScript. Mock CMS data lives in `lib/data.ts` —
swap for real Supabase queries when ready (server components already read from a single
typed source, so this is a drop-in replacement later).

Built by [Nexaro.tech](https://project-jelc4.vercel.app/).

## Structure

- `app/` — routes (one folder per page, `[id]` folders are dynamic routes)
- `components/` — Header, Footer, ScrollReveal, CountUp (shared across every page)
- `lib/data.ts` — all mock data + typed helpers (single source of truth)
- `app/globals.css` — full design system (tokens, animations, responsive rules)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Deploy

Push to GitHub, then import the repo on [vercel.com](https://vercel.com) — it
auto-detects Next.js, no config needed.
