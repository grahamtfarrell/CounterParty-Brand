#!/usr/bin/env bash
# Optimize brand assets for web deploy (run from repo root).
set -euo pipefail

BRAND_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/brand"
cd "$BRAND_DIR"

echo "Resizing oversized PNGs (max 4096px)..."
for png in collage.png counter_logo.png; do
  if [[ -f "$png" ]]; then
    sips -Z 4096 "$png" >/dev/null
    echo "  resized $png"
  fi
done

echo "Recompressing videos..."
for src in movie.mp4 counter_footer.mp4 logo_update.mp4 overlay.mp4 for_site_final.mp4 clean_timer.mp4; do
  if [[ -f "$src" ]]; then
    tmp="${src%.mp4}.tmp.mp4"
    ffmpeg -y -i "$src" -c:v libx264 -crf 26 -preset slow -movflags +faststart -an "$tmp"
    mv "$tmp" "$src"
    echo "  recompressed $src"
  fi
done

if [[ -f book.gif ]]; then
  echo "Converting book.gif to book.mp4..."
  ffmpeg -y -i book.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -an book.mp4
  echo "  wrote book.mp4"
fi

echo "Done. Sizes:"
ls -lh
