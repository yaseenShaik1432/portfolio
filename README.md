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

## Deploy

Import the repo in Vercel. Set `metadataBase` in `app/layout.tsx` to your production domain so social previews use the right URL.
