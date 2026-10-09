# Multi-Service Lead-Generation Site for a Wellness Business

A multi-page React site for a real aesthetics and wellness business in Belo Horizonte, Brazil. It presents ten different services to different audiences and turns visits into WhatsApp conversations, with click tracking that stays comparable across every page.

> Client project, in Portuguese for a local audience. Actively maintained, with a few engineering gaps listed under [Current limitations](#current-limitations).

[Run locally](#running-locally) · [Architecture](#architecture) · [Engineering decisions](#engineering-decisions)

<!-- TODO: add a short GIF of the home → service page → WhatsApp flow here (docs/demo/). -->

## Problem

Small service businesses usually depend on a single Instagram profile and a WhatsApp number. That has three problems:

- Prospective clients can't tell which service fits them (post-surgery recovery, pregnancy, corporate wellness, therapy).
- The owner can't tell which pages or offers actually produce conversations.
- Adding a new service or professional means redoing layout and copy.

The site answers three questions:

- How do you give each audience a page that speaks to its situation instead of one generic page?
- How do you measure conversion across all of those pages with one consistent metric?
- How do you make adding a professional or a section a low-risk change?

## Current capabilities

### Implemented
- Home page (hero, about, services, booking, differentials, location, call to action)
- 9 service landing pages, with 13 URLs mapped to them: lymphatic drainage, home visits (two URLs), post-operative care, corporate quick massage, therapeutic massagers, psychology, online therapy, online nutrition, manicure
- Floating WhatsApp button, per-page calls to action, and a single GA4 event (`whatsapp_click`) for every WhatsApp link
- Typed data files for psychologists and nutritionists, rendered through a shared carousel
- Deep links to sections (for example `/drenagem#gestantes`) with smooth scroll
- CI/CD on Vercel: builds and production deploys, with SPA rewrites

### Not implemented
- Online booking or payments (all scheduling happens in WhatsApp)
- Content management (copy and team data live in the code)
- Automated tests
- Any use of the Gemini SDK, which is installed but unused

## Engineering highlights

- **One conversion metric, enforced by convention.** All 25 WhatsApp touchpoints use the same event name through one `trackEvent` helper in `src/components/Shared.tsx`. This keeps GA4 data comparable across pages and avoids page-specific event names that nobody can compare later.
- **Team data is separated from markup.** `Psychologist` and nutritionist records are typed (`src/data/`). Adding a professional is a data change, and the compiler flags missing fields.
- **A reusable carousel that handles uneven data.** `TeamCarousel` centers its cards when there are fewer than four, so one or two professionals don't look broken.
- **A theme defined once.** The color palette and four font families are Tailwind v4 theme tokens in `src/index.css`, and pages use those tokens instead of default Tailwind colors.
- **Shared building blocks.** Navbar, footer, fade-in animation, floating WhatsApp button and tracking helper are each defined once.

## Architecture

```text
Browser
   │
   ▼
main.tsx ──► App.tsx (react-router)
                │
                ├── ScrollToTop (resets scroll, or scrolls to #hash)
                │
                ├── HomePage (sections defined in App.tsx)
                └── *Page.tsx (one component per service)
                        │
                        ├── components/  Navbar · Shared · TeamCarousel · PsychologistCard
                        └── data/        psychologists.ts · nutricionistas.ts

WhatsApp link click ──► trackEvent('whatsapp_click') ──► window.gtag ──► GA4
```

- `src/App.tsx`: routes, `ScrollToTop`, and the home page sections
- `src/*Page.tsx`: one landing page per service
- `src/components/`: shared UI (`Shared.tsx` holds the WhatsApp link constant and `trackEvent`)
- `src/data/`: typed team-member data
- `src/index.css`: Tailwind theme (brand palette, fonts)
- `public/`: images, referenced as `/filename.ext`

## Tech stack

- **React 19 + TypeScript**: UI and type-checking (`npm run lint` runs `tsc --noEmit`)
- **Vite 6**: dev server and production build
- **Tailwind CSS v4**: styling through theme tokens
- **React Router 7**: client-side routing and hash links
- **motion/react**: scroll-triggered animations
- **Embla Carousel**: team carousels
- **lucide-react**: icons
- **Vercel**: hosting, with an SPA rewrite in `vercel.json`

## Data flow

1. A visitor lands on a service URL, and `vercel.json` serves `index.html` for any path.
2. React Router renders the matching page component.
3. Team sections read typed records from `src/data/` and render them in the carousel.
4. The visitor clicks any WhatsApp link, which fires `trackEvent('whatsapp_click')` and opens a `wa.me` chat.
5. If the URL contains a hash, `ScrollToTop` scrolls to the section with that `id`.

## Testing

There is no automated test suite. The only automated checks are the Vite production build that Vercel runs on each deploy and the TypeScript type-check (`npm run lint`), which I run manually. I verify behavior by hand in the browser. See [Roadmap](#roadmap).

## Engineering decisions

**One shared WhatsApp event instead of per-section events**
- *Context:* The site has about 25 WhatsApp links across many pages.
- *Alternative:* Name each event after its page or section, which gives finer detail.
- *Decision:* Use a single `whatsapp_click` event.
- *Consequence:* Page-level comparison needs GA4's page path, not the event name. In return, reports stay simple and new pages can't break them.

**Typed data files instead of a CMS**
- *Context:* The team changes a few times a year.
- *Alternative:* A headless CMS.
- *Decision:* Keep records in typed TypeScript files.
- *Consequence:* No extra service or cost, and type-safe edits. Non-developers can't update the content without a code change.

**A client-side SPA on Vercel**
- *Context:* A content site that needs fast iteration and cheap hosting.
- *Alternative:* An SSR or static-generation framework.
- *Decision:* Vite + React Router with a rewrite to `index.html`.
- *Consequence:* Simple deploys, but service pages are rendered in the browser, which weakens SEO. See the limitations.

## Current limitations

- No automated tests. Vercel builds and deploys, but nothing runs the type-check or tests before a deploy.
- Routes are not code-split, so every visitor downloads the whole app.
- Pages are client-rendered, which limits SEO for the individual service pages.
- `src/App.tsx` is about 930 lines and holds all home page sections. It should be split.
- `/drenagem` is registered twice in `App.tsx`. The first match wins, so the second route is dead code.
- `/manta` and `/ventosa` render the home page rather than their own pages.
- Content and team data are hard-coded.
- `@google/genai` and `express` are listed as dependencies but aren't used in the code.

## Roadmap

1. Run `npm run lint` before each deploy, for example in the Vercel build command or a GitHub Actions check.
2. Add component tests for the carousel and the WhatsApp tracking helper.
3. Lazy-load routes with `React.lazy`.
4. Split `App.tsx` into one file per home section.
5. Pre-render the service pages for SEO.

## Development approach

The initial version was generated in Google AI Studio, and I continue it with AI coding assistance. I decide the structure, content and tracking conventions, and I review every change before it ships. Project conventions are written down in `AGENTS.md` so that humans and AI tools follow the same rules.

## Running locally

```bash
git clone <repository-url>
cd bhruna-azevedo-_-estética-e-bem-estar
npm install
cp .env.example .env.local   # the site itself does not read the Gemini key; see note below
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build` (output in `dist/`), `npm run preview`, and `npm run lint`.

`.env.example` asks for `GEMINI_API_KEY`, because the build injects it, but no page uses it. A placeholder value is enough to run the site.

## License

Released under the [MIT License](LICENSE).
