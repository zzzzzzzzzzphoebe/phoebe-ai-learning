# Phoebe AI Learning

Public-safe AI learning journal for GitHub Pages.

Live site: <https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/>

## Purpose

This project turns the daily AI learning workflow into a browsable learning site:

- latest AI event or product/research movement
- global AI community signals and GitHub trending projects
- source links for website reading, grouped by official, community, GitHub, paper, and media sources
- a three-step learning path: quick read, deep read, and FDE practice
- a life operating system view: direction, today's output, capability focus, and next step
- an AI tool-use radar: what people are doing with Codex, Hermes / Phoebe, Claude, and other AI tools
- a Codex Pro leverage plan: which projects deserve quota, how to allocate weekly effort, and what to avoid
- a project pipeline that turns AI trends into Codex Pro build candidates
- a capability flywheel that connects research, system design, engineering output, and professional expression
- hot debate and follow-up signals
- important AI term explained in plain language
- AI Field Deployment Engineer practice prompt
- weekly review and archive search

The site is intentionally static: no login, no database, no build step, and no private data.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static file server.

## Content Model

- `data/learning-data.js` powers the rendered website.
- `content/daily/*.md` keeps human-readable daily notes.
- `assets/ai-news-radar.png` is the site visual asset.
- `docs/design-concept.png` stores the design concept used for the first implementation.

## Public-Safe Rule

Do not add company confidential data, personal mailbox details, API keys, tokens, customer identifiers, or internal-only notes. Phrase enterprise examples generically.

## GitHub Pages

The project is published with a GitHub Actions Pages workflow. The workflow uploads the repository root directly, so no build output directory is required.

## Publish Verification

After pushing to `origin/main`, verify that GitHub Pages actually caught up:

```bash
./scripts/verify-pages-sync.sh
```

This checks three states:

- local files in the repo
- raw content on `origin/main`
- public GitHub Pages content

If raw GitHub matches local but Pages is still stale, treat it as a deploy problem rather than a content problem. Wait briefly and rerun the script. If it still reports stale Pages, retrigger the deploy instead of editing content blindly.

The deploy workflow lives at `.github/workflows/deploy-pages.yml`.
