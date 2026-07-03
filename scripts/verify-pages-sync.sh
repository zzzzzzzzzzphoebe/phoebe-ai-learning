#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"

pages_base="https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning"
raw_base="https://raw.githubusercontent.com/zzzzzzzzzzphoebe/phoebe-ai-learning/main"

local_index="$repo_root/index.html"
local_data="$repo_root/data/learning-data.js"

extract_version() {
  sed -nE 's/.*styles\.css\?v=([^"]+).*/\1/p' "$1" | head -n 1
}

extract_first_entry_id() {
  sed -nE 's/^[[:space:]]*id: "([^"]+)".*/\1/p' "$1" | head -n 1
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

require_cmd curl
require_cmd sed

local_version="$(extract_version "$local_index")"
local_entry_id="$(extract_first_entry_id "$local_data")"

tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT

raw_index="$tmpdir/raw-index.html"
raw_data="$tmpdir/raw-data.js"
pages_index="$tmpdir/pages-index.html"
pages_data="$tmpdir/pages-data.js"

curl -fsSL "$raw_base/index.html" -o "$raw_index"
curl -fsSL "$raw_base/data/learning-data.js" -o "$raw_data"
curl -fsSL "$pages_base/" -o "$pages_index"
curl -fsSL "$pages_base/data/learning-data.js" -o "$pages_data"

raw_version="$(extract_version "$raw_index")"
raw_entry_id="$(extract_first_entry_id "$raw_data")"
pages_version="$(extract_version "$pages_index")"
pages_entry_id="$(extract_first_entry_id "$pages_data")"

echo "local version: $local_version"
echo "raw version:   $raw_version"
echo "pages version: $pages_version"
echo
echo "local entry:   $local_entry_id"
echo "raw entry:     $raw_entry_id"
echo "pages entry:   $pages_entry_id"
echo

if [[ "$local_version" != "$raw_version" || "$local_entry_id" != "$raw_entry_id" ]]; then
  echo "ERROR: origin/main is not in sync with local files." >&2
  exit 2
fi

if [[ "$raw_version" != "$pages_version" || "$raw_entry_id" != "$pages_entry_id" ]]; then
  echo "ERROR: GitHub Pages is stale relative to origin/main." >&2
  echo "Suggested action: wait a few minutes, then rerun this script; if it still fails, retrigger Pages deploy." >&2
  exit 3
fi

echo "OK: local, origin/main, and GitHub Pages are in sync."
