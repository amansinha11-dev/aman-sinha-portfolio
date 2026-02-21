#!/usr/bin/env bash
# setup-profile.sh
# Run this script locally (with gh CLI installed and logged in) to
# create / update your amansinha11-dev GitHub profile README.
#
# Prerequisites:
#   1. Install GitHub CLI:  https://cli.github.com/
#   2. Log in:              gh auth login
#   3. Run this script:     bash setup-profile.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
README_SRC="$SCRIPT_DIR/github-profile/README.md"
REPO="amansinha11-dev/amansinha11-dev"

if [ ! -f "$README_SRC" ]; then
  echo "❌ Could not find github-profile/README.md in $SCRIPT_DIR"
  exit 1
fi

echo "🔍 Checking if profile repo exists..."
if ! gh repo view "$REPO" &>/dev/null; then
  echo "📦 Creating repository $REPO ..."
  gh repo create "$REPO" --public --description "👋 My GitHub Profile README"
  echo "✅ Repository created."
  sleep 2
else
  echo "✅ Repository already exists — will update the README."
fi

TMPDIR=$(mktemp -d)
trap "rm -rf \"$TMPDIR\"" EXIT

echo "📥 Cloning profile repo..."
gh repo clone "$REPO" "$TMPDIR/profile-repo"

echo "📝 Copying README..."
cp "$README_SRC" "$TMPDIR/profile-repo/README.md"

cd "$TMPDIR/profile-repo"
git config user.name "Aman Sinha"
git config user.email "sinhaaman479@gmail.com"
git add README.md

if git diff --cached --quiet; then
  echo "ℹ️  README is already up to date — nothing to commit."
else
  git commit -m "✨ Add professional GitHub profile README"
  git push origin HEAD:main
  echo ""
  echo "🎉 Done! View your profile at: https://github.com/amansinha11-dev"
fi
