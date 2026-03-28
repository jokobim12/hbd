#!/bin/bash
# Script untuk menyalin gambar karakter ke folder assets
# Jalankan: bash setup.sh

BRAIN_DIR="$HOME/.gemini/antigravity/brain/1ea1d292-74cc-46c5-9c61-4d05c6d75e62"

mkdir -p assets

cp "$BRAIN_DIR/anime_character_normal_1774573244254.png" assets/character_normal.png 2>/dev/null
cp "$BRAIN_DIR/anime_character_shy_1774573260674.png" assets/character_shy.png 2>/dev/null
cp "$BRAIN_DIR/anime_character_happy_1774573277062.png" assets/character_happy.png 2>/dev/null

echo "✅ Gambar karakter berhasil disalin ke folder assets/"
echo "Jalankan: python3 -m http.server 8080"
echo "Buka: http://localhost:8080"
