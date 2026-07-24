# 🍍 PINE

A tiny, silly, tropical single-page site for the PINE meme coin. No framework, no build step, no nonsense — just HTML, CSS and vanilla JS, deployed straight to Vercel from this repo.

**Live:** whatever `.vercel.app` URL your project has (no custom domain, on purpose).

## What's actually in here

- `index.html` — the whole site. One file, one page.
- `favicon.png` — the pineapple mascot, also used as the hero image.
- `pine-theme.mp3` — background music, toggled on/off with the "Pine mode" pill at the bottom.
- A pile of `.png` / `.jpg` icons — chain logos and DEX/launchpad logos used in the buy buttons.

That's it. No `package.json`, no dependencies, no `node_modules`. Open `index.html` in a browser and you've "run" the project.

## How it's structured

The page is chain-based tabs (`Base`, `Solana`, `Robinhood`, ...). Each chain has:

- an `info-card` with Chain / Quote / CA / Total supply
- a `buy-section` with buttons to whatever DEX(es) or launchpad(s) that token trades on

`switchChain()` in the `<script>` at the bottom just shows/hides the right `info-card` + `buy-section` pair and highlights the active tab. Nothing fancier than that.

Robinhood is the odd one out: since we ended up with the same coin listed on a bunch of different launchpads/dapps (each doing its own thing, no shared CA field), that tab skips the single-CA pattern and just lists every dapp as its own button with the CA underneath it. Simple > clever.

## Adding a new chain

1. Add a new `.chain-tab` in the tabs row (with its chain icon).
2. Duplicate an `info-card` block, give it a new `id="info-yourchain"`, fill in Chain/Quote/CA/Supply, `style="display:none"`.
3. Duplicate a `buy-section` block the same way, `id="buy-yourchain"`.
4. Add your chain's icon + any DEX icons to the repo root.
5. Add two lines to `switchChain()` so it knows to show/hide your new blocks.

## Adding a new DEX/dapp button to an existing chain

Just copy-paste one `.buy-btn` inside the relevant `buy-section` and swap the link, icon, and label. That's the whole process — this has happened more times than anything else in this repo.

## Deploy

Connected to Vercel via GitHub. Push to `main` → auto-deploy. No CLI needed — edit files straight from the GitHub web UI if you want, commit, done.

## Disclaimer

This is a meme. There is no roadmap, no utility, no promises. If PINE moons, great, buy a round. If it doesn't, you were warned by the fact that the whole site was built by vibes and iterative chat messages. Not financial advice, not anything advice — just pineapples.
