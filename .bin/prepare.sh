#!/usr/bin/env bash

# Inits husky hooks if they aren't installed
if [ ! -f './.husky/_/husky.sh' ]; then
  npx husky install
fi

# Sets up our repo to check commits for conventional commit compliance before finalizing
if [ ! -f './.husky/commit-msg' ]; then
    npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
fi