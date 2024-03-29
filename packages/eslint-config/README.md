<p align="center">
  <img src="../../.github/assets/eslint-config.png" />
</p>
<p align="center">
  Ascend's ESLint config for writing clean consistent code 👌
</p>
<br/>

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@ascend-innovations/eslint-config" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@ascend-innovations/eslint-config.svg" alt="NPM version" /></a></span> <img src="https://img.shields.io/badge/PRs-welcome-orange.svg" alt="PRs welcome!" />

## Current Support

Currently this package provides configurations for:

- Vanilla JS
- React
- Node
- Jest
- Svelte

## Installing

1. Put an `.eslintrc` (or any [valid eslint config file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)) in your project root
2. You can alternatively put the config in your `package.json` under the property `"eslintConfig"`:. This makes one less file in your project.
3. Install dependencies and select configuration you want (available configs listed below)

### Default Vanilla JS Configuration

The default install will install all required _AND_ optional dependencies. You can safely remove the following packages without triggering a peer dependency warning if you aren't consuming the associated configs:

- `react`
  - `eslint-config-airbnb`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`
- `jest`
  - `eslint-plugin-jest`
- `svelte`
  - `eslint-plugin-svelte3`

These can safely be removed if they aren't needed.

_Install it with NPM:_ `npx install-peerdeps --dev @ascend-innovations/eslint-config`\
_Install it with Yarn:_ `npx install-peerdeps --dev @ascend-innovations/eslint-config -Y`\
_Use it:_

```
{
  "extends": [
    "@ascend-innovations/eslint-config"
  ]
}
```

_Notes:_

- Extends [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

### React Configuration

_Use it:_

```
{
  "extends": [
    "@ascend-innovations/eslint-config/react"
  ]
}
```

### Svelte Configuration

_Use it:_
Svelte is a bit finicky with linting setups, so we keep Svelte stuff in it's own config to apply on top of the root config.
This gives us greater control and makes debugging easier.

```
{
  "extends": [
    "@ascend-innovations/eslint-config",
    "@ascend-innovations/eslint-config/svelte"
  ]
}
```

_Notes:_

- Extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

### Node Configuration

_Use it:_

```
{
  "extends": [
    "@ascend-innovations/eslint-config/node"
  ]
}
```

_Notes:_

- Extends [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

### Add Jest Support

You can add Jest support to any project:

```
{
  "extends": [
    "@ascend-innovations/eslint-config/jest"
  ]
}
```

## Set Up Project Lint Scripts

Add two scripts to your package.json to lint and/or fix:

```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`.

## With VS Code

We highly recommend configuring your editor to do this automatically on file save across your whole project.

1. Install the [ESLint plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Create a file in your current project in `.vscode/settings.json`.
3. Place the following configuration in the file:

```
{
    // show eslint icon at bottom toolbar
    "eslint.alwaysShowStatus": true,

    //
    // Auto-run code formatting on save
    //
    "editor.formatOnSave": true,

    // Tell the ESLint plugin to run on save
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },

    // The following prevents linting from running twice
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript]": {
        "editor.formatOnSave": false
    },

    "[javascriptreact]": {
        "editor.formatOnSave": false
    },

    "[svelte]": {
        "editor.formatOnSave": false
    },

}
```

4. In order to ensure there are no conflicts between Prettier and ESLint with any plugins you may have active in your VSCode editor, we also recommend adding a file at `.vscode/extensions.json` with the following content:

```
{
    // See http://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
    // List of extensions which should be recommended for users of this workspace.
    "recommendations": [
        "dbaeumer.vscode-eslint"
    ],
    // List of extensions recommended by VS Code that should not be recommended for users of this workspace.
    "unwantedRecommendations": [
        "esbenp.prettier-vscode", // You don't need the prettier extension with this setup
        "editorconfig.editorconfig", // You don't need editor config with this setup
    ]
}
```

This will make sure that anyone working on the project is aware of enabling/disabling proper extensions!
