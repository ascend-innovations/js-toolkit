---
"@ascend-innovations/eslint-config": major
---

## WHAT
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

*After upgrading consumers will want to re-lint their application*
