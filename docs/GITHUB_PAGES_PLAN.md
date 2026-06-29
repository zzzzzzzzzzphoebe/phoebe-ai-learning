# GitHub Pages Plan

## Recommended Setup

1. Create a dedicated repository for this project.
2. Keep the repository public-safe.
3. Publish from the repository root with GitHub Pages.
4. Keep `index.html`, `styles.css`, `app.js`, `data/`, and `assets/` at the root level.

## Suggested Repository Name

`phoebe-ai-learning`

## Manual Publish Flow

```bash
cd /Users/ye/Desktop/Phoebe/04-Projects/10-ai-learning-journal
git init
git branch -M main
git add .
git commit -m "Initial AI learning journal"
gh repo create phoebe-ai-learning --public --source=. --remote=origin --push
```

Then enable GitHub Pages:

```text
Settings -> Pages -> Build and deployment -> Deploy from a branch -> main /(root)
```

## Future Daily Automation Shape

The daily task can later do four things:

1. Pick one public-safe AI topic.
2. Append an entry to `data/learning-data.js`.
3. Write a matching Markdown note under `content/daily/YYYY-MM-DD.md`.
4. Send a short email with the GitHub Pages link.

Do not include company confidential data, private email details, API keys, tokens, customer identifiers, or internal-only notes.
