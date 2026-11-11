# Vorizo Infotech — Next.js + React + TypeScript

A responsive creative-minimal redesign of Vorizo Info Tech, converted from the HTML concept into a Next.js App Router application.

## Stack
- Next.js 16 App Router + React 19 + TypeScript
- Motion for React (`motion`) for entrance, hover-ready and ambient animations
- Lucide React for consistent vector icons
- Next Font for Manrope + DM Mono
- CSS design system retained from the original visual concept

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## React Bits, UI8 and Icons8 notes
- **React Bits** is primarily a source-first component library: components are copied/installed into your own project, not imported as one universal runtime package. This project uses original Motion-powered components and interactions in a React Bits-inspired style. You can add specific React Bits components from https://www.reactbits.dev/ when you choose the exact effects you want.
- **UI8** is a design-resource marketplace, not a React package. Use licensed UI8 illustrations, 3D assets or visual kits by placing exported assets in `public/` and referencing them from the components.
- **Icons8 animated icons** are available in JSON, GIF and After Effects formats. For JSON/Lottie assets, add `lottie-react` or `@lottiefiles/dotlottie-react`, place licensed animation files in `public/animations/`, then mount them in a client component. The current build uses animated Lucide icons and Motion effects so it runs without third-party asset keys or externally hosted icon files.

Suggested additions if you later add exported animation assets:

```bash
npm install lottie-react
```

## Before production

Please verify the company facts, employee counts, current vacancies, office address, phone numbers, testimonial permission and email addresses against the live business records. These were carried over from the previous concept's captured site content and should be confirmed before publishing.

The contact CTA uses email links; connect a form provider or a Next.js route handler if you want form submissions stored or emailed automatically.
