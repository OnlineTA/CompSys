#!/usr/bin/env bash

set -euo pipefail

# Use -B to keep gh-pages at most one commit ahead of master.
# This leads to the use of -f when pushing to gh-pages on remote.
# This might actually be one descent use of git push -f..
git checkout -B gh-pages

set +e
cat | bash - <<EOF
set -euo pipefail

git add -f blockly_compressed.js
git add -f blocks_compressed.js
git commit -S -m 'Deploy'
git push -f origin gh-pages
EOF
set -e

git checkout master
