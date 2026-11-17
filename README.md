# Portfolio: Shaik Mohammad Yaseen

Personal portfolio built with Next.js (App Router), Tailwind CSS and Framer Motion's `useInView` for the stat counters.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

- All text, projects, skills and experience live in `lib/data.ts`.
- Page sections live in `components/sections.tsx`.
- Replace the resume by overwriting `public/Shaik_Mohammad_Yaseen_Resume.pdf`.
- The ZestBill screenshot is `public/zestbill-dashboard.webp`.
- The social preview image is generated in `app/opengraph-image.tsx`; the favicon is `app/icon.svg`.

## Deploy to Cloudflare (static export)

The site is a static export (`output: "export"` in `next.config.ts`), so Cloudflare serves plain files from `out/`. It does not need the OpenNext adapter (`opennextjs-cloudflare`).

Cloudflare Workers (static assets), configured by `wrangler.jsonc`:

| Setting | Value |
| --- | --- |
| Build command | `npx next build` |
| Deploy command | `npx wrangler deploy` |
| Environment variable | `NEXT_PUBLIC_SITE_URL` = your final site URL, for example `https://portfolio.yourname.workers.dev` |

Cloudflare Pages also works: preset "Next.js (Static HTML Export)", build command `npx next build`, output directory `out`.

`public/_headers` sets security and caching headers, and `.node-version` pins Node 22.
