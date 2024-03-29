# @ascend-innovations/eslint-config-ts

## 4.0.0

### Patch Changes

- Updated dependencies [8212811]
  - @ascend-innovations/eslint-config@2.1.0

## 3.0.0

### Major Changes

- a35da35: Remove prettier from configs & make svelte config a bare-bones add-on instead of a full config

### Patch Changes

- a35da35: Fix bug where parserOptions.project wasn't finding our tests
- a35da35: Refactor Svelte support
- Updated dependencies [a35da35]
- Updated dependencies [a35da35]
  - @ascend-innovations/eslint-config@2.0.0

## 2.0.0

### Minor Changes

- 08293c4: Add ESLint support for Svelte

### Patch Changes

- bce8e5f: Add correct NPM Badge to package READMEs
- Updated dependencies [08293c4]
- Updated dependencies [bce8e5f]
- Updated dependencies [08293c4]
  - @ascend-innovations/eslint-config@1.1.0

## 1.0.2

### Patch Changes

- f92d0bc: Add @babel/core as a dev and peer dependency. It's required in order for linting to work
- Updated dependencies [f92d0bc]
  - @ascend-innovations/eslint-config@1.0.2

## 1.0.1

### Patch Changes

- 16bbf24: Configure tests to validate configs
- Updated dependencies [16bbf24]
  - @ascend-innovations/eslint-config@1.0.1

## 1.0.0

### Major Changes

- d01998d: ## WHAT

  - Typescript configs used to be part of the `@ascend-innovations/eslint-config` package. They are now being published independently here!
  - This package actually extends `@ascend-innovations/eslint-config` and provides targeted overrides for Typescript files.

  ## WHY

  - We write a lot of Typescript and having the Typescript ESLint config on its own gives us more power and flexibility for these configurations.

### Patch Changes

- Updated dependencies [d01998d]
  - @ascend-innovations/eslint-config@1.0.0
