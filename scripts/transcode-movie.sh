#!/usr/bin/env bash
# Transcode hero video for web delivery.
# Usage: ./scripts/transcode-movie.sh [path-to-movie.mov]
set -euo pipefail

SOURCE="${1:-$HOME/Downloads/CounterParty Brand/movie.mov}"
OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/brand"

mkdir -p "$OUT_DIR"

ffmpeg -y -i "$SOURCE" \
  -c:v libx264 -crf 23 -preset slow -movflags +faststart -an \
  "$OUT_DIR/movie.mp4"

ffmpeg -y -i "$OUT_DIR/movie.mp4" -frames:v 1 -q:v 2 \
  "$OUT_DIR/movie-poster.jpg"

echo "Wrote $OUT_DIR/movie.mp4 and movie-poster.jpg"
