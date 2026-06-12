<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

# Rank Sarthi — Project Agent Rules

## What this project is
A Next.js 14 (App Router, TypeScript, Tailwind CSS) website for Rank Sarthi,
an Indian competitive exam test-preparation platform. The JeeRankUp page is
the primary platform page for JEE Main & Advanced preparation.

## Command budget — READ THIS BEFORE RUNNING ANYTHING
Running commands has a real memory and CPU cost. Follow this strictly:

  ALLOWED during development (light, run at most once per step):
    npx tsc --noEmit           ← type-check only, ~3s, low RAM

  ALLOWED only once, at the very end when ALL files are written:
    npm run build              ← expensive (1–4 GB RAM, 30–90s). ONE RUN TOTAL.

  NEVER run automatically:
    npm run dev                ← starts a persistent server. Developer runs this manually.
    npm test                   ← only if tests already exist and are asked for.
    npm install <package>      ← ask before installing anything new.

  NEVER do these without a specific file path:
    grep -r, find . -name      ← scanning all of src/ wastes memory. Read files by path.

  Batching rule:
    Write ALL files for a step first. Then run ONE check.
    Do NOT run a check after each individual file.

  Loop limit:
    If tsc --noEmit fails, fix only the reported errors, then run it once more.
    Do not re-read the whole codebase between fix attempts.
    If the same error appears three times, stop and ask.

  /compact:
    Run /compact when the thread exceeds 40 turns to avoid context overflow.

## Design system — NON-NEGOTIABLE
These exact values must be used everywhere. Do not substitute Tailwind defaults.

Colors:
  Primary blue:   #1B2D8F  (Tailwind: primary-DEFAULT)
  Primary dark:   #132270  (Tailwind: primary-dark)
  Accent crimson: #D93025  (Tailwind: accent-DEFAULT)
  Accent light:   #FF4438  (Tailwind: accent-light)
  Gold:           #B8860B  (Tailwind: gold-DEFAULT)
  Gold light:     #E6A817  (Tailwind: gold-light)
  Background:     #F9F8F5  (Tailwind: bg)
  Surface:        #FFFFFF
  Surface alt:    #F2F4FA
  Border:         #E3E8F4
  Border strong:  #C9D2E8
  Ink primary:    #0E1117
  Ink secondary:  #3D4A63
  Ink muted:      #7A869A

Typography:
  Display/headings: Cormorant Garamond  (CSS var: --font-cormorant)
  Body/UI:          Outfit              (CSS var: --font-outfit)
  Never use system-ui or any other font for these roles.

Shadows (custom tokens, not Tailwind defaults):
  shadow-sm: 0 2px 8px rgba(27,45,143,.07)
  shadow-md: 0 8px 32px rgba(27,45,143,.12)
  shadow-lg: 0 20px 60px rgba(27,45,143,.16)

## Code rules
- TypeScript strict mode. No `any`. All props need explicit interfaces.
- No inline styles — Tailwind classes or CSS custom properties only.
- All images use next/image with explicit width and height.
- Animations use Framer Motion on transform/opacity only (no layout-triggering props).
- Respect prefers-reduced-motion on every animated component.
- Forms use React Hook Form + Zod. No uncontrolled inputs.
- Platform data lives in src/data/platforms.ts — never hardcode content in JSX.
- Every page exports generateMetadata.

## Component locations
  Shared primitives:      src/components/ui/
  Layout (Nav/Footer):    src/components/layout/
  Homepage sections:      src/components/home/
  Platform page sections: src/components/platform/
  Shared across pages:    src/components/shared/

## Context note
The design reference is jeerankup.html (attached to the thread).
Match it precisely: layout, spacing, color, type scale.
The test-interface preview card in the hero must be interactive
(clickable options, hover states) using local React state only.

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
