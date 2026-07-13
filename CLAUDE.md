# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Atomatify** (an AI-automation agency). Single-page React app — no backend, no router library, no tests. React 19 + Vite 7 + TypeScript + Tailwind v4, with GoHighLevel (GHL) iframes as the lead-capture path.

The brand was renamed from "Mevan AI" to Atomatify. GHL endpoints still live on `link.mevan.ai` / `api.leadconnectorhq.com` — those URLs are intentional, not stale strings to rename.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build  — typecheck is part of the build
npm run lint     # eslint .
npm run preview  # serve the production build
```

There is no test framework configured. Don't invent a `npm test`; verify changes by running the dev server.

## Architecture

**Hand-rolled hash routing.** `src/App.tsx` owns a `Page` union (`'home' | 'about' | 'services' | 'contact' | 'testimonials'`), reads it from `window.location.hash`, and switches on it. That union is *re-declared verbatim* in `Navigation.tsx`, `Footer.tsx`, `Services.tsx`, and the other page components — adding a page means touching `validPages`, `renderPage()`, `navItems`, and each local copy of the type.

**`Contact` is deliberately always mounted.** In `App.tsx` it renders inside a `display: none` wrapper while another page is active, instead of going through `renderPage()`. This keeps the GHL calendar/form iframes from re-fetching on every navigation. Don't "simplify" it into the switch statement.

**GHL embeds are the conversion surface.** `index.html` loads `form_embed.js` and the Meta Pixel; `Contact.tsx` embeds a booking calendar plus a contact form; `Services.tsx` maps each service *title* to a form URL/height in its `ghlForms` object. Cross-page deep links pass a `serviceId` through `onNavigate('services', id)`, which `Services.tsx` scrolls to via a ref map.

**Styling is Tailwind v4 with no config file.** Theme tokens live in `src/styles/globals.css` (`@theme inline`, imported by `src/index.css`) — there is no `tailwind.config.js`. Use v4 utility names (`bg-linear-to-r`, not `bg-gradient-to-r`). Page components are hand-written utility classes in a dark slate + cyan/teal gradient aesthetic; they largely ignore the CSS variable tokens.

**Animation** is `motion` v12, imported as `motion/react`. The **React Compiler** is enabled through `babel-plugin-react-compiler` in `vite.config.ts`.

## Dead scaffolding (from a Figma Make export)

`src/components/ui/**` (~40 shadcn/Radix components), `src/components/figma/ImageWithFallback.tsx`, and `src/App.css` are **imported by nothing**. The Radix, recharts, react-hook-form, cmdk, vaul, etc. dependencies exist only to satisfy them. Editing a `ui/` component changes nothing on the live site — build real UI in `src/components/*.tsx` with utility classes, matching the existing style.

## Gotchas

- `tsc -b` gates the build with `strict`, `noUnusedLocals`, and `noUnusedParameters` — an unused import fails `npm run build`, not just lint.
- `verbatimModuleSyntax` is on: type-only imports need `import type`. `erasableSyntaxOnly` is on: no enums, namespaces, or constructor parameter properties.
- There is no `public/` directory. `index.html`'s `og:image` points at a deploy-time asset (`https://www.atomatify.com/og-image.png`) that does not exist in the repo.
- Testimonial videos are imported as ES modules from `src/assets/videos/` and get bundled — they are not static-served files.
