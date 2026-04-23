# Project notes

## Using `notes/` in every project

We keep a small **`notes/`** folder at the repo root in every project going forward. It lives in version control and is the place for lightweight, human-written context that does not belong in code or READMEs.

- **`NOTES.md`** (this file): decisions, environment setup, conventions, and summaries worth remembering. Things you would explain to a future you or a collaborator—stack quirks, one-off commands, *why* something is configured a certain way.
- **`TODO.md`**: a running checklist: features, fixes, refactors, and “maybe later” items. Keep it scannable; turn items into issues or tickets when they grow large.

Treat **`NOTES` + `TODO`** as the default pair: durable narrative in one, action list in the other, both easy to find without hunting through chat or ad-hoc files.

## Commits, site content, and CMS

For changes that are **additions or updates to what the site says or shows** (project blurbs, copy, listings, static data) rather than code structure, use a **`content:`**-style message or plain-English subject lines (e.g. “Add Emberblade to projects”). **Reserve `refactor` for code-only** reorganizing where behavior is intentionally unchanged; it reads wrong for marketing or portfolio text.

A **headless CMS (or full CMS) was considered** for this portfolio. It was decided that **editing static content in the repo is fine for now**—simpler deploys, no extra service, and good enough for the scale of updates here. A CMS is still an option if content churn, non-dev editors, or richer editing eventually justify it.

## Node.js and Astro 6

This repo uses **Astro 6** with `package.json` engines **`"node": ">=22.12.0"`** (Astro 6’s documented minimum is Node **22.12.0+**).

- **Use Node 22.12+**, preferably the **Node 22 LTS** line (even majors). Avoid odd major versions (e.g. 23, 25) for Astro, per [Astro’s docs](https://docs.astro.build).

### Local setup (nvm)

- A **`.nvmrc`** file in the project root pins **22.22.2** (Node 22 LTS) so `nvm install` / `nvm use` in this directory picks a compatible version.
- If your global default was an older 22.x (e.g. **22.6.0**), that is **below** the minimum—switch with `nvm use` or align your default with the `.nvmrc` value.

### Terminal: checking Node

- **Correct:** `node -v` or `node --version`
- **Wrong:** `node -- version` (with a space)—Node treats `version` as a script path and you get `MODULE_NOT_FOUND` for a file named `version`.

### Summary

Astro 6 + this project require **Node ≥ 22.12.0**. The project uses **`.nvmrc`** to document and lock a suitable **22.x** release; use **nvm** (or another tool that reads `.nvmrc`) so local and CI use a matching Node version.
