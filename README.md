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

The site is a static export (`output: "export"` in `next.config.ts`), so Cloudflare serves plain files from `out/`.

Cloudflare Pages settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npx next build` |
| Build output directory | `out` |
| Production branch | `main` |
| Environment variable | `NEXT_PUBLIC_SITE_URL` = your final site URL, for example `https://yourname.pages.dev` |

`public/_headers` sets security and caching headers, and `.node-version` pins Node 22.
