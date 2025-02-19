#!/bin/bash

# Filename: release-new-version.sh
# Usage: chmod +x release-new-version.sh && ./release-new-version.sh

set -e # Exit immediately if any command fails

echo "🚀 Starting release process..."

# Step 1: Generate changeset
npm run changeset

# Step 2: (Optional) Add automatic description
# If you want to automate description, use:
# echo "Your description here" | npm run changeset
# Otherwise, the command above will let you interactively add descriptions

# Step 3: Version packages
echo "📦 Versioning packages..."
npm run version-packages

# Step 4: Publish to npm
echo "🚀 Publishing to npm..."
npm run release

echo "✅ Release completed successfully!"