# Svafnir Site — Project Context

## Overview

This is an FFXIV roleplay character profile site for **Svafnir Asoltun**, a Viera (Rava clan) hunter/arcane archer. The site uses a dark forest theme with gold and green accents, floating ember particles, fog effects, and high-fantasy styling.

The site is part of a larger personal website at **ruminabottle.com**.

## Owner

- **GitHub**: ruminabottle
- **Domain**: ruminabottle.com (registered on Cloudflare, DNS points to GitHub Pages)
- **Socials**: X @RumInABottle, Discord RumInABottle, Twitch rum_in_a_bottle
- **IRL**: Solutions engineer with side projects
- **Old Carrd**: svafnir.carrd.co (now redirects to the new site)

## Architecture

### Two Repos

1. **ruminabottle/svafnir** — React source code for the character profile
   - Local path: `/Users/ramonmunoz/Documents/personal/svafnir-site`
   - React 19 + Vite 8 + React Router 7
   - `vite.config.js` base: `/characters/svafnir/`
   - Has `gh-pages` package but deployment is done by copying `dist/` into the root repo

2. **ruminabottle/ruminabottle.github.io** — The deployed root site (static HTML + svafnir build)
   - Local path: `/Users/ramonmunoz/Documents/personal/ruminabottle.github.io`
   - Serves from `main` branch via GitHub Pages
   - Custom domain: `ruminabottle.com` (CNAME file in repo root)
   - Contains:
     - `index.html` — Modern about me landing page (static HTML, Inter font, minimal dark design)
     - `characters/index.html` — Character selector page (static HTML, card layout)
     - `characters/svafnir/` — Built output from the svafnir React app (copied from `dist/`)

### Deployment Workflow

```bash
# 1. Make changes in svafnir-site
cd /Users/ramonmunoz/Documents/personal/svafnir-site

# 2. Build
npm run build

# 3. Commit and push svafnir source
git add <files> && git commit -m "message" && git push origin main

# 4. Copy build to root repo
rm -rf /Users/ramonmunoz/Documents/personal/ruminabottle.github.io/characters/svafnir/*
cp -r dist/* /Users/ramonmunoz/Documents/personal/ruminabottle.github.io/characters/svafnir/

# 5. Commit and push root repo
cd /Users/ramonmunoz/Documents/personal/ruminabottle.github.io
git add -A && git commit -m "message" && git push origin main
```

## Live URLs

- **https://ruminabottle.com** — About me page
- **https://ruminabottle.com/characters/** — Character selector
- **https://ruminabottle.com/characters/svafnir/** — Svafnir profile

## Svafnir React App Structure

### Tech Stack
- React 19, Vite 8, React Router 7 (HashRouter)
- CSS Modules for component styling
- Global theme in `src/styles/theme.css`
- No UI library — all custom CSS

### Routing (HashRouter)
- `/` — Home (hero image, character name, icon nav buttons)
- `/information` — Character stats (Info page)
- `/hooks` — RP hooks (Hooks page)
- `/art` — Gallery carousel with artist credit (Art page)
- `/user` — OOC info (User/OOC page)

### Key Files

```
src/
  main.jsx              — Entry point, HashRouter wrapper
  App.jsx               — Route definitions
  styles/theme.css      — Global CSS variables, body styles, vignette, fog, scrollbar
  components/
    EmberCanvas.jsx     — Floating gold/green ember particles (canvas animation)
    Layout.jsx          — Page wrapper with corner accents
    Layout.module.css
    Divider.jsx         — SVG branch & diamond decorative divider
    BackButton.jsx      — Styled "Go Back" link to home
    BackButton.module.css
    InfoSection.jsx     — Character stats grid (age, race, clan, etc.)
    InfoSection.module.css
    HooksSection.jsx    — RP hook cards (Drunkard, Mercenary, Hunter, Scars, Learning)
    HooksSection.module.css
    ArtSection.jsx      — Image carousel with arrows, dots, keyboard nav, artist credit (@Ylaziel)
    ArtSection.module.css
    UserSection.jsx     — OOC info (timezone EST, 18+, RP preferences)
    UserSection.module.css
  pages/
    Home.jsx            — Landing page with hero image + 4 icon nav buttons
    Home.module.css
    Information.jsx     — Wraps InfoSection + BackButton
    Hooks.jsx           — Wraps HooksSection + BackButton
    Art.jsx             — Wraps ArtSection + BackButton
    User.jsx            — Wraps UserSection + BackButton
    Page.module.css     — Shared page animation styles
public/
  favicon.svg           — Custom arrow/arrowhead icon (gold on dark)
  images/
    image01.jpg         — Hero image on home page
    gallery/
      Svafnir_DT_Final.png  — Gallery image
      Rest_Well.png         — Gallery image
```

### Design System (CSS Variables in theme.css)
- **Backgrounds**: `--bg-deep: #060a06`, `--bg-card: rgba(12, 18, 14, 0.85)`
- **Greens**: `--green-deep: #2d5a3d`, `--green-mid: #4a7c59`, `--green-light: #6b9b7a`
- **Golds**: `--gold-deep: #8b7a2e`, `--gold-mid: #c9a84c`, `--gold-light: #d4bf6a`
- **Text**: `--text-primary: #d1cdc4`, `--text-secondary: #8a8677`
- **Fonts**: Cinzel (headings), Cormorant Garamond (body), Mulish (fallback)

### Visual Effects
- **Ember particles**: Canvas-based, 45 particles (20 on mobile), gold/green colors with glow
- **Fog drift**: CSS pseudo-element with 30s animation
- **Vignette**: Radial gradient overlay on body::before
- **Corner accents**: Fixed gold corner brackets in viewport corners
- **Section animations**: fadeRise keyframe on page transitions

### Gallery
- Auto-detects images from `public/images/gallery/` using Vite's `import.meta.glob`
- Supports .png, .jpg, .jpeg, .webp, .gif
- Arrow navigation, dot indicators, keyboard left/right, slide animations
- Artist credit: "All art is created by @Ylaziel" with link to https://x.com/Ylaziel

### Character Data (hardcoded in components)
- **Name**: Svafnir Asoltun
- **Subtitle**: The Arcane Archer
- **Race**: Viera (Rava)
- **Age**: Unknown (Visually 25)
- **Gender**: Male, Height: 217 cm, Weight: 110 Kg
- **Eyes**: Emerald, Hair: Black
- **Sexuality**: Heterosexual, Alignment: Chaotic Neutral
- **Languages**: Common
- **Backstory**: TBD (placeholder)
- **RP Hooks**: Drunkard, Mercenary, Hunter, Scars, Learning

### Nav Button Labels
- Info, Hooks, Art, OOC (previously were Information, Hooks, Art, User)

## Root Site (ruminabottle.github.io)

### About Me Page (index.html)
- Modern minimal dark design (different aesthetic from the fantasy character pages)
- Inter + JetBrains Mono fonts
- Subtle CSS grid background + purple gradient glow
- Green pulsing "Building things" status indicator
- Projects section with card linking to /characters/
- Social links: X, Discord, Twitch
- Fade-in animations

### Character Selector (characters/index.html)
- Same modern design language as about me page
- Back link to home
- Character cards with avatar, name, subtitle, tags
- Svafnir card uses his hero image as avatar
- Dashed placeholder card for future characters

## Notes
- GitHub auth uses `gh` CLI (installed via homebrew): `gh auth login` then `gh auth setup-git`
- Gallery images are large (~4.5MB each PNGs) — could be optimized
- The old Carrd embeds are in `/Users/ramonmunoz/Documents/personal/svafnir-carrd/` (no longer needed)
- Carrd at svafnir.carrd.co has a JS redirect to ruminabottle.com/characters/svafnir/
