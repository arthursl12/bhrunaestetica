# AGENTS.md - Bhruna Azevedo Estética & Bem-Estar

## Project Overview
React 19 + TypeScript + Vite 6 SPA for a Brazilian aesthetics/wellness business. Deployed on Vercel.

## Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 3000 (host 0.0.0.0) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove `dist/` |
| `npm run lint` | TypeScript type-check (`tsc --noEmit`) |

## Environment
- **Required**: `GEMINI_API_KEY` in `.env.local` (injected by AI Studio at runtime)
- **Optional**: `APP_URL` for self-referential links
- Copy `.env.example` → `.env.local` and fill in values

## Architecture
- **Entry**: `src/main.tsx` → `src/App.tsx` (routes)
- **Routes** (in `App.tsx`):
  - `/` — Home page (Hero, About, Services, Booking, Differentials, Location, CTA)
  - `/domicilio`, `/domiciliodrenagem` — Home service pages
  - `/posoperatorio` — Post-op care
  - `/massageadores` — Therapeutic massagers
  - `/psicologia` — Psychology services
  - `/massagemcorporativa` — Corporate Quick Massage landing page
- **Shared components**: `src/components/Shared.tsx` (Navbar, Footer, FadeIn, FloatingWhatsApp, WhatsAppIcon, `trackEvent`)
- **Styling**: Tailwind CSS v4 with custom `--color-brand-*` palette and fonts (Inter, Cormorant Garamond, Playfair Display, Cinzel) defined in `src/index.css`
- **Animations**: `motion/react` (framer-motion)
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom` v7
- **AI**: `@google/genai` (Gemini)

## Vercel Deployment
- `vercel.json` configures SPA rewrite (`/*` → `/index.html`)
- Build output: `dist/`

## Key Conventions
- **Path alias**: `@/*` → project root (configured in `tsconfig.json` and `vite.config.ts`)
- **HMR**: Disabled in AI Studio via `DISABLE_HMR=true` (see `vite.config.ts`)
- **GA4**: `window.gtag` used via `trackEvent` helper in `Shared.tsx`
- **WhatsApp link**: Constant `WHATSAPP_LINK` in `Shared.tsx` (`https://wa.me/553191422212`)
- **WhatsApp tracking**: All WhatsApp click events across the site must use the unified event name `'whatsapp_click'` (e.g., `trackEvent('whatsapp_click')`). Do not use page-specific or section-specific event names for WhatsApp links.
- **Images**: Stored in `public/` (referenced as `/filename.ext`)
- **Hash-based section linking**: Sections use `id` attributes for deep-linking (e.g., `/drenagem#gestantes`). The `ScrollToTop` component in `App.tsx` reads `location.hash` and scrolls to the target element. When adding new sections, give them a meaningful `id` to enable direct linking.

## Development Notes
- No test suite configured
- TypeScript config: `noEmit: true`, `isolatedModules: true`, ESNext modules, bundler resolution
- Vite loads env via `loadEnv(mode, '.', '')` and injects `GEMINI_API_KEY` into `process.env`
- Custom brand color palette used throughout (no default Tailwind colors)

## Git Workflow
- **Do not commit or push to git without explicit user request**
- Only commit when explicitly asked by the user
- Never amend failed commits; create new ones instead