---
"@ascend-innovations/eslint-config": patch
"@ascend-innovations/eslint-config-ts": patch
---

Apply appropriate local ESLint configs bases on file type.

- This fixes a bug where files with extensions other than `.js` were throwing an ESLint error in VSCode because we were only apply the index.js config which handles vanilla JS only.
- To fix this, we still use the root index.js config file, but we override it for Svelte and React specific components and leverage our `react.js` and `svelte.js` configs accordingly.
