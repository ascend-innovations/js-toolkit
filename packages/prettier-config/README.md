<p align="center">
  [Add cover image here]
</p>
<p align="center">
  Ascend's Prettier config for consistent formatting 💅
</p>
<br/>

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@ascend-innovations/prettier" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@ascend-innovations/prettier-config.svg" alt="NPM version" /></a></span> <img src="https://img.shields.io/badge/PRs-welcome-orange.svg" alt="PRs welcome!" />

## Installing

1. Put a `prettier.config.js` (or any [valid prettier config file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)) in your project root
2. You can alternatively put the config in your `package.json` under the property `"prettier"`:. This makes one less file in your project.
3. Install dependencies and select the configuration you want (available configs listed below)

### Default Configuration

The default install will install all required _AND_ optional dependencies. You can safely remove un-needed packages without triggering a peer dependency warning if you aren't consuming the associated configs:

_Install it with NPM:_ `npx install-peerdeps --dev @ascend-innovations/prettier-config`\
_Install it with Yarn:_ `npx install-peerdeps --dev @ascend-innovations/prettier-config -Y`\

_Use it with no overrides:_

```
module.exports = require('@ascend-innovations/prettier-config')
```

OR in `package.json`

```
"prettier: "@ascend-innovations/prettier-config"
```

_Use it and allow overrides:_

```
module.exports = {
    ...require('@ascend-innovations/prettier-config')
}
```

_Notes:_
If you are using ESLint, you will want to add `prettier` as the last item in your `extends` array.

### Svelte Configuration

_Use it:_
Svelte is a bit finicky with Prettier setups and requires it's own plugin, so we have it as a separate export.

```
module.exports = {
    ...require('@ascend-innovations/prettier-config/svelte')
}
```

OR in `package.json`

```
"prettier: "@ascend-innovations/prettier-config/svelte"
```
