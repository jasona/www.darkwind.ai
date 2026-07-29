# DarkWind website

The public DarkWind website is a Vite, React, and TypeScript single-page
application. It contains the main game overview, player-facing reference pages,
the browser help library, and a generated newbie tutorial sourced from the live
mudlib documentation.

## Local development

Install the locked dependencies, then start Vite:

```sh
npm ci
npm run dev
```

Useful commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Rebuild the committed help index, then start the Vite development server. |
| `npm run build` | Rebuild the help index, type-check, and create the production site in `dist/`. |
| `npm run preview` | Serve the current `dist/` build locally. |
| `npm run help:build` | Rebuild the help metadata and search indexes from `public/help-docs/doc/`. |
| `npm run sync:help:local` | Replace the committed help-doc snapshot from a sibling `darkwind-nextgen` checkout, then rebuild its indexes. |
| `npm run tutorial:sync` | Refresh only the newbie-guide source files and generated tutorial snapshot. |
| `npm run tutorial:validate` | Validate the committed tutorial snapshot without changing files; safe for CI and production builds. |
| `npm test` | Run focused tutorial ordering, link, formatting, and Stage 8 content tests. |

## Routes

Routing is implemented in `src/components/Current.tsx` with the browser History
API rather than a routing package. The public routes are:

- `/`
- `/about`
- `/world`
- `/guilds`
- `/systems`
- `/races`
- `/start`
- `/help`

`/lore` remains an alias for `/about`. The help browser also supports
`/help?doc=<document-id>`. Direct requests need an SPA fallback; the committed
`public/_redirects` file rewrites unmatched requests to `index.html`.

## Help documentation

The in-game documentation in `darkwind-nextgen` owns the gameplay facts and
player-facing copy. This repository owns the website presentation and commits a
deployable snapshot under `public/help-docs/`.

`npm run sync:help:local` is a maintainer operation. It requires the sibling
mudlib checkout, replaces the copied document tree, and regenerates
`public/help-docs/index.json` and `public/help-docs/search-index.json`. Review
the resulting diff before committing it. Normal development and production
builds use the committed snapshot and do not require access to the mudlib
repository.

`help:build` writes a fresh generation timestamp into both indexes. Because it
runs before `dev` and `build`, either command can leave those generated files
modified even when their document content did not change.

## Newbie tutorial sync

The tutorial pipeline is deliberately narrower than the full help-doc sync:

1. `npm run tutorial:sync` reads
   `codebase/public/docs/helpdir/new/{guide,stage1..stage8}` and the matching
   `codebase/public/docs/vihelp/new/` screenreader variants from the sibling
   `darkwind-nextgen` checkout.
2. It copies those exact raw files into
   `public/help-docs/doc/{helpdir,vihelp}/new/`.
3. It writes the committed normalized snapshot
   `src/data/newbieTutorial.generated.json`.
4. `src/data/newbieTutorial.ts` exposes the typed data used by the React UI.

Do not hand-edit the generated JSON or copied guide files. Change factual copy
in `darkwind-nextgen`, run the sync, review both visual and screenreader
variants, and commit the resulting website snapshot. The committed snapshot is
intentional: deployment must remain reproducible without a neighboring mudlib
checkout.

Run these checks before handing off tutorial changes:

```sh
npm run tutorial:validate
npm test
npm run build
```

There is currently no general lint or browser-test suite. The focused tutorial
tests, non-mutating tutorial validation, and production build are the baseline
checks.

## Deployment

Vite produces a static `dist/` directory. The repository assumes that directory
is deployed as the website root and that the host honors the SPA fallback and
serves files copied from `public/`.

Cloudflare project settings are managed outside this repository. Before a
release, verify the configured build command, `dist` output directory, SPA
rewrite behavior, and the `www.darkwind.ai` production domain in Cloudflare
rather than treating this README as proof of the live configuration.
