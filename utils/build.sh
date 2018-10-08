#!/bin/sh

set -e

git merge --no-ff \
  -m "merge notebooks at $(date +'%m%d/%I-%M%p')" \
  $(git branch | grep 'jupyter/' | cut -d, -f2- | tr '\n' ' ' | sed 's/,$//')
