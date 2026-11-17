# FIKO sample café website

A Next.js App Router + TypeScript + Tailwind CSS v4 starter with Framer Motion animations and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Before presenting / publishing

- Replace the typographic `FIKO.` wordmark in `Navbar.tsx` and `Footer.tsx` with the client's transparent SVG/PNG logo.
- The current photography uses remote Unsplash image URLs. For a fully offline presentation, download approved photos into `public/images/` and replace the remote URLs in the components with local paths such as `/images/hero.jpg`.
- Replace the sample address, opening hours, phone and WhatsApp number in `VisitFiko.tsx`.
- Confirm the exact descriptions and details of the women's opportunity programme and free creative stall initiative before publishing.
- Confirm menu names, prices and actual food photographs. The current menu content is illustrative pitch copy.
- The map and WhatsApp links require internet when clicked; the main page can run locally once all photography is stored locally.

## Main sections

`Navbar`, `Hero`, `Introduction`, `ExploreFiko`, `SignatureFavourites`, `OurStory`, `OurCommunity`, `FikoExperience`, `Gallery`, `VisitFiko`, and `Footer` are independent components in `src/components/`.
