# Phoebe AI Learning

Public-safe AI learning journal for GitHub Pages.

Live site: <https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/>

## Purpose

This project turns the daily AI learning workflow into a browsable learning site:

- latest AI event or product/research movement
- global AI community signals and GitHub trending projects
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

The project is published from the repository root using GitHub Pages. No build output directory is required.
