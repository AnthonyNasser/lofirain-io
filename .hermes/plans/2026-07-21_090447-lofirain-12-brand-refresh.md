# lofirain 1.2 Brand Refresh Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Refresh `lofirain-io` so the marketing site clearly matches the app’s version 1.2 brand and feels materially different from the current dark storm/rain landing page.

**Architecture:** Keep the existing Next.js app structure and static marketing page, but introduce a new brand system in `app/globals.css`, refreshed homepage content/sections in `app/page.tsx`, and updated metadata/assets where needed. Prioritize a calm, cozy, modern visual language that mirrors the app instead of only presenting it through screenshots.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, static assets in `public/`.

---

## Current context / assumptions

- Current homepage is mostly a dark rainy gradient with cream text, two app screenshots, an App Store CTA, a legal/takedown CTA, feature cards, and track source copy.
- Current brand tokens are `--background`, `--cream`, `--storm`, `--amber`, and `--cloud` in `app/globals.css`.
- The site still reads as “cozy rainy lofi app,” but version 1.2 branding should look meaningfully different and more intentional.
- The legal pages can stay structurally similar, but should inherit updated brand colors and navigation styling.

## What should change

### 1. Visual direction

Move away from the current stormy, dark-blue landing page toward a more distinctive 1.2 identity:

- Softer “dream cloud” palette instead of generic dark rain.
- More warmth and depth: dusky lavender, soft blue, muted peach/amber, cream, and near-black plum/navy.
- Add brand-specific shapes: clouds, rounded blobs, soft halos, mist layers, headphone/cloud motifs.
- Make the page feel less like a standard SaaS hero and more like a tiny ambient world.

Suggested palette direction:

- Background: deep midnight plum/navy (`#080711`, `#11101f`)
- Primary text: warm cream (`#fff1dd`)
- Cloud surfaces: muted lavender-gray (`#cfc6e8`, `#b7bfdc`)
- Rain/accent blue: soft periwinkle (`#8fb8ff`)
- Warm accent: sleepy peach/amber (`#f0b36a`, `#ffd39a`)
- Mood accent variants: relax blue, deep-work violet, study green/teal

### 2. Homepage hero

Current hero copy:

> A quiet lofi player built around mood, ambient rain, and a little cloud companion...

Refresh it to foreground 1.2’s stronger app identity:

- Add a small “Version 1.2” / “new look” pill above the headline.
- Replace the plain `lofirain` heading with a more emotional headline, e.g.:
  - “A tiny raincloud for focus.”
  - “Lofi, rain, and calm sessions in one little cloud.”
  - “Set the mood. Let the rain handle the rest.”
- Keep the App Store CTA primary.
- Replace or de-emphasize “Artist takedown request” in the hero; it belongs in footer/legal, not as a main conversion CTA.
- Add a secondary CTA like “See what’s new in 1.2” that scrolls to a new section.

### 3. Screenshot presentation

The two-phone stack is useful, but should look more branded:

- Use updated v1.2 app screenshots if available.
- Put phones inside a soft cloud/mist composition rather than generic glows.
- Add small floating labels around the screenshots:
  - “Mood presets”
  - “Ambient layers”
  - “Focus timer”
  - “Cloud companion”
- Consider a single large polished phone mockup on mobile to avoid clutter.

### 4. New “What’s new in 1.2” section

Add a dedicated section near the top. This is the clearest way to communicate that the brand changed.

Suggested cards:

- **A calmer home** — refreshed look, softer surfaces, less noise.
- **Better session rhythm** — clearer focus session controls and thresholds.
- **Mood-first listening** — relax, deep work, and study feel more distinct.
- **Ambient mixes** — rain/fire/birds presented as cozy layers.

Keep copy short and app-store friendly.

### 5. Feature section rewrite

Current feature cards are generic. Refresh them around the new brand promise:

- Replace “Mood-first listening” with “Pick a mood, not a playlist.”
- Replace “Ambient layers” with “Add weather to the room.”
- Replace “Gentle sessions” with “Focus without sharp edges.”

Each card should use a small icon/glyph or illustrated symbol, not just text.

### 6. Navigation and CTA hierarchy

Current nav includes all legal links in the top right. That makes the brand feel administrative.

Change top nav to:

- Left: updated logo + lofirain wordmark
- Right: “What’s new”, “Music credits”, primary “Download” button

Move these to footer only:

- Privacy
- Terms
- Takedown

Keep music credits visible because licensing/source transparency matters, but do not let legal links dominate the landing page.

### 7. Brand assets: replace the outdated cloud and logo

Treat the current cloud companion and logo as deprecated. Do not build the v1.2 site around `cloud-headphones.png` or the existing `lofirain-logo.png` unless they are intentionally updated first.

Audit and replace/expand assets in `public/brand/`:

- Current outdated assets:
  - `public/brand/lofirain-logo.png`
  - `public/brand/cloud-headphones.png`
- Replace with:
  - new v1.2 logo mark
  - new v1.2 wordmark treatment, if separate from the mark
  - new cloud/companion artwork or retire the companion entirely if the app no longer centers it
  - favicon / apple touch icon / Open Graph image
  - optional soft cloud/mist SVG background motif that matches the new art style

Implementation rule: the refreshed website should not visually depend on the old cloud or old logo. If final v1.2 assets are not ready, use neutral layout placeholders or abstract mist/cloud shapes rather than reusing outdated brand art.

If version 1.2 has a new app icon, use it across nav, metadata, favicon, and social previews.

### 8. Typography and spacing

Current Nunito + Inter is fine, but make the type treatment more branded:

- Keep Nunito for rounded/soft display headings.
- Increase headline personality with tighter line-height and maybe a subtle gradient fill.
- Use more generous section spacing and rounder cards/buttons.
- Make the App Store button feel custom-integrated while preserving recognizable App Store affordance.

### 9. Motion and atmosphere

Current rain animation is simple diagonal repeating lines. For the refresh:

- Reduce the obvious rain-line effect.
- Add slower mist/cloud drift layers.
- Keep `prefers-reduced-motion` handling.
- Avoid heavy animation; it should feel sleepy, not busy.

### 10. Legal/support pages

Do not redesign legal pages heavily, but update them to match the new shell:

- Updated nav/header styling.
- New background tokens.
- Buttons/forms inheriting new focus/accent colors.
- Footer consistency.

## Files likely to change

- `app/page.tsx` — homepage structure, hero copy, v1.2 section, nav hierarchy, feature copy.
- `app/globals.css` — brand tokens, backgrounds, buttons, card styles, phone mockup, motion effects, responsive tuning.
- `app/layout.tsx` — metadata title/description, icons, Open Graph/Twitter metadata if assets exist.
- `app/legal.tsx` — shared legal shell/nav styling if needed.
- `public/brand/*` — updated logo/icon/cloud assets.
- `public/app-screens/*` — updated screenshots for version 1.2.

## Step-by-step implementation outline

### Task 1: Collect 1.2 assets

**Objective:** Gather the new app screenshots, app icon, and brand artwork before changing UI.

**Files:**
- Add/replace: `public/app-screens/setup.png`
- Add/replace: `public/app-screens/playback.png`
- Add/replace: `public/brand/lofirain-logo.png`
- Optional add: `public/brand/og-image.png`, `public/brand/app-icon.png`

**Verification:** Open images locally or run the app and confirm assets load without broken image placeholders.

### Task 2: Define the new brand token system

**Objective:** Replace the old storm/amber palette with 1.2 tokens.

**Files:**
- Modify: `app/globals.css:3-20`

**Verification:** Run `npm run lint` and visually confirm the page still renders.

### Task 3: Rework homepage nav and hero

**Objective:** Make the first viewport announce the new 1.2 brand immediately.

**Files:**
- Modify: `app/page.tsx:23-99`
- Modify: relevant button/nav CSS in `app/globals.css`

**Verification:** Desktop and mobile hero should show clear headline, App Store CTA, and non-legal secondary CTA.

### Task 4: Refresh screenshot/phone composition

**Objective:** Make the product mockups feel embedded in the lofirain world.

**Files:**
- Modify: `app/page.tsx:101-126`
- Modify: `.phone`, `.phone-front`, `.phone-back`, and new floating-label styles in `app/globals.css`

**Verification:** Check desktop and mobile overlap, no cropped critical app UI, no horizontal overflow.

### Task 5: Add “What’s new in 1.2” section

**Objective:** Explain the update in a concise branded section.

**Files:**
- Modify: `app/page.tsx` after hero section
- Add CSS for release cards in `app/globals.css`

**Verification:** Section is reachable from nav/secondary CTA and reads clearly above the old feature/source sections.

### Task 6: Rewrite feature cards

**Objective:** Make feature copy and visuals align with the new brand promise.

**Files:**
- Modify: `features` array in `app/page.tsx:4-17`
- Modify: feature card styling in `app/globals.css:213-229`

**Verification:** Cards should be short, scannable, and visually distinct.

### Task 7: Update metadata/social preview

**Objective:** Make links and previews match the refreshed brand.

**Files:**
- Modify: `app/layout.tsx:18-25`
- Add: `public/brand/og-image.png` if available

**Verification:** Build passes and metadata references valid files.

### Task 8: Validate build and responsive polish

**Objective:** Ensure the refreshed site is production-safe.

**Commands:**
- `npm run lint`
- `npm run build`
- `npm run dev` and inspect locally

**Manual checks:**
- Desktop hero
- Mobile hero
- CTA links
- Legal pages
- Music credits page
- Reduced motion

## Risks / tradeoffs

- If v1.2 screenshots are not available yet, the brand refresh may look inconsistent with the current app screenshots.
- Too much animation could fight the calm focus positioning.
- Keeping legal links too prominent will weaken the marketing story.
- A dramatic palette shift should still preserve accessibility contrast for text/buttons.

## Open questions

- Do we already have the final v1.2 app icon and screenshots exported?
- Is the 1.2 update primarily visual, or should the site also mention specific product changes?
- Should the site include a short release-note section or keep it more timeless?
- Do you want the new brand to feel more “cute cloud companion” or more “premium ambient focus”?
