#!/usr/bin/env bash
# Renders /cv for every face × language into public/cv/*.pdf.
#
# Run before pushing: Vercel has no Chrome, so the PDFs are committed.
# CV_PHONE (read from the git-ignored .env) is passed as ?phone= and filled in
# client-side, so the number never exists in the built HTML or in source.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -f .env ]; then set -a; . ./.env; set +a; fi
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT="${CV_PORT:-4390}"

bun run build >/dev/null
node_modules/.bin/astro preview --port "$PORT" >/dev/null 2>&1 &
PREVIEW=$!
trap 'kill "$PREVIEW" 2>/dev/null || true' EXIT

for _ in $(seq 50); do
  curl -sf "http://localhost:$PORT/" >/dev/null && break
  sleep 0.2
done

query=""
if [ -n "${CV_PHONE:-}" ]; then
  query="?phone=$(printf %s "$CV_PHONE" | sed 's/+/%2B/g; s/ /%20/g')"
else
  echo "CV_PHONE not set — generating without a phone number" >&2
fi

mkdir -p public/cv
for face in de se; do
  for lang in en id; do
    out="public/cv/dimas-adi-saputra-$face-$lang.pdf"
    "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
      --virtual-time-budget=5000 --print-to-pdf="$out" \
      "http://localhost:$PORT/$face/$lang/cv/$query" 2>/dev/null
    echo "wrote $out"
  done
done
