<p align="center">
  <img src="./.github/assets/js-toolkit.png" />
</p>

<p align="center">
  A collection of tools for building javascript projects at Ascend.
</p>
<br/>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![](https://github.com/ascend-innovations/js-toolkit/workflows/Release/badge.svg)

## Published Tools

- [@ascend-innovations/eslint-config](https://github.com/ascend-innovations/js-toolkit/blob/main/packages/eslint-config)
- [@ascend-innovations/eslint-config-ts](https://github.com/ascend-innovations/js-toolkit/tree/main/packages/eslint-config-ts)
- [@ascend-innovations/prettier-config](https://github.com/ascend-innovations/js-toolkit/tree/main/packages/prettier-config)
- [@ascend-innovations/stylelint-config](https://github.com/ascend-innovations/js-toolkit/tree/main/packages/stylelint-config)

> More tools will be worked and published in the near future!

## Repo Toolchain

A list of tooling used in this monorepo along with the reasoning behind it. Look at these like mini ADRs.

### Node & Package Manager version pinning managed by Volta

- [View Volta website & docs](https://volta.sh/)

Volta is an alternative to `nvm` and has been far more reliable in my experience. If it's used my multiple devs across projects,
it virtually eliminates node or yarn version issues. Check out the site to install & configure.

Yarn and Node versions for this project are specified in `package.json` in the `volta` key.

### Package Management via Yarn

**Using [Yarn 1](https://classic.yarnpkg.com/lang/en/)**\
Why Yarn 1 instead of Yarn 2? Well... at first glance yarn 2 unfortunately doesn't work with any
sort of conventional commit tooling :/

Why use Yarn instead of NPM? I still really like yarn workspaces far more than anything NPM offers. We aren't using them
right now, but in the future there could be a reason to make this a monorepo. Also, I really like running `yarn <command>`
as opposed to `npm run <command>`. And finally, Yarn's resolutions are really nice in a pinch.

### We require Conventional Commits

Conventional commits are really great for improving commit clarity. They also help us in the release process by allowing us
to automate changelog generation and take full advantage of semantic releases.

- [View Conventional Commit spec](https://www.conventionalcommits.org/en/v1.0.0/)

### Conventional Commits CLI to help write better commits

The Commitizen CLI helps you write conventional commits by taking you through a commit prompt so you don't have to memorize the Conventional Commit spec.

- [View Github repo](https://github.com/commitizen/cz-cli)
- [View website & docs](http://commitizen.github.io/cz-cli/)

Using the CLI is totally optional and is a great option for anyone new to conventional commit. You can engage the CLI prompt by running `git cz` or instead of `git commit`

### Linter to enforce Conventional Commits

Commit linting will automatically run when you attempt to make a commit and will tell you if you have any syntax errors in your commit that break the conventional commit spec. This helps prevent bad commits from slipping through the cracks.

_Linting on commit messages is orchestrated via husky_

- [View Github repo](https://github.com/conventional-changelog/commitlint)
- [View website & docs](https://conventional-changelog.github.io/commitlint/)

### Package releases and publishing managed with Changesets

Created by Atlassian, Changesets is a tool to manage versioning and changelogs with a focus on multi-package repositories. It's based on the principles of `semver`.

- [View Github repo](https://github.com/atlassian/changesets)
- [View semver spec](https://semver.org/)

We've tried [semantic release](https://github.com/semantic-release/semantic-release) to manage monorepos but changesets just makes it 10x easier 🎉
