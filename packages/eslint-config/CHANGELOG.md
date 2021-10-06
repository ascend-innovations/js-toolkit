# @ascend-innovations/eslint-config

## 1.0.2

### Patch Changes

- f92d0bc: Add @babel/core as a dev and peer dependency. It's required in order for linting to work

## 1.0.1

### Patch Changes

- 16bbf24: Configure tests to validate configs

## 1.0.0

### Major Changes

- d01998d: ## WHAT

  - This package is now being released as part of our Ascend ESLint monorepo
  - This release includes better rule separation and consumer experience
  - Typescript support is no longer included in this package. It's now part of our `eslint-config-ts` package
  - Vanilla JS is now the default
  - React, node, and jest are all opt in configs
  - Prettier is always included by default
  - We took a closer look at what rules were being used and tweaked them

  ## WHY

  We needed to create a more consistent yet extensible way of making our ESLint configs available to our projects. Moving this package into a monorepo and splitting out Typescript gives us more flexibility.

  ## HOW to upgrade

  Vanilla JS Consumers: `@ascend-innovations/eslint-config`
  React consumers: `@ascend-innovations/eslint-config/react`
  Node consumers: `@ascend-innovations/eslint-config/node`
  Jest support: `@ascend-innovations/eslint-config/jest` (to be used with another available config)

  _After upgrading consumers will want to re-lint their application_
