#!/usr/bin/env bash

set -euo pipefail

rsync -av ~/blockly/blockly_compressed.js .
rsync -av ~/blockly/blocks_compressed.js .
rsync -av ~/blockly/msg/js/en.js ./msg/js/
rsync -av ~/blockly/media/ ./media/
rsync -av ~/blockly/osm/index.html ./T1.html

sed -iE "/^.*\\/blocks\\/.*$/d" ./T1.html
perl -pi -e "s/^<!--(.*blocks_compressed.*) -->$/\\1/" ./T1.html
perl -pi -e "s/uncompressed\\.js/compressed\\.js/" ./T1.html
perl -pi -e "s/\\.\\.\\/\\.\\.\\/media\\//media\\//" ./T1.html
perl -pi -e "s/\\.\\.\\///" ./T1.html
