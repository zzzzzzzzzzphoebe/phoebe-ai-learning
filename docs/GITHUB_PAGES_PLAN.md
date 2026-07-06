# GitHub Pages Maintenance

## Current Setup

- Repository: <https://github.com/zzzzzzzzzzphoebe/phoebe-ai-learning>
- GitHub Pages: <https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/>
- Source: GitHub Actions workflow
- Workflow: `.github/workflows/deploy-pages.yml`
- Build mode: static files, no app build step; workflow uploads the repository root directly

Keep the repository public-safe. Keep `index.html`, `styles.css`, `app.js`, `data/`, and `assets/` at the root level.

## Manual Recovery Flow

Use this only if the repository needs to be recreated from a fresh local copy:

```bash
cd /Users/ye/Desktop/Phoebe/04-Projects/10-ai-learning-journal
git init
git branch -M main
git add .
git commit -m "Initial AI learning journal"
gh repo create phoebe-ai-learning --public --source=. --remote=origin --push
```

Then enable GitHub Pages from:

```text
Settings -> Pages -> Build and deployment -> GitHub Actions
```

## Future Daily Automation Shape

The daily task can later do four things:

1. Pick one public-safe AI topic.
2. Append an entry to `data/learning-data.js`.
3. Write a matching Markdown note under `content/daily/YYYY-MM-DD.md`.
4. Send a short email with the GitHub Pages link.

## Deploy Failure Triage

If GitHub sends a `pages build and deployment` failure mail but the `build` step succeeded, do not assume the site files are broken.

Use this sequence:

```bash
cd /Users/ye/Desktop/Phoebe/04-Projects/10-ai-learning-journal
./scripts/verify-pages-sync.sh
```

- If local and raw GitHub match, but Pages is stale, the failure is in Pages deploy rather than site content.
- Wait a few minutes and verify again.
- If Pages is still stale, rerun the `Deploy GitHub Pages` workflow or retrigger the Pages build instead of making unrelated content edits.

## Actions Deploy Notes

- The workflow is intentionally minimal because this site is static: checkout, configure Pages, upload the repo root, then deploy.
- Keep the site public-safe and root-based. Do not move `index.html`, `styles.css`, `app.js`, `data/`, or `assets/` into a generated build folder unless the workflow is updated at the same time.
- The main advantage over legacy branch deploy is observability: each run has explicit logs, rerun support, and a clear artifact/deploy split.

This prevents a false fix loop where content keeps changing even though the real problem is a transient GitHub Pages deployment failure.

Do not include company confidential data, private email details, API keys, tokens, customer identifiers, or internal-only notes.
