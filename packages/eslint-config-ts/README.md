<p align="center">
  <img src="../../.github/assets/eslint-config.png" />
</p>
<p align="center">
  Ascend's ESLint config for writing clean consistent code in Typescript projects 👌
</p>
<br/>

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@ascend-innovations/eslint-config-ts" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@ascend-innovations/eslint-config-ts.svg" alt="NPM version" /></a></span> <img src="https://img.shields.io/badge/PRs-welcome-orange.svg" alt="PRs welcome!" />

## Current Support

Currently this package provides Typescript configurations for:

- Typescript vanilla JS
- Typescript React
- Typescript Svelte
- Typescript Node
- Typescript Jest

## Non-Typescript Rule Definitions

This package extends all of the rules defined in our core `eslint-config` package, [`@ascend-innovations/eslint-config`](https://www.npmjs.com/package/@ascend-innovations/eslint-config). The only difference is that it adds overrides that define rules & handling for typescript files.

## Installing

1. Put a `.eslintrc` (or any [valid eslint config file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)) in your project root
2. You can alternatively put the config in your `package.json` under the property `"eslintConfig"`:. This makes one less file in your project.
3. Be sure your to have a valid `tsconfig.json` configured for your project.
4. Install dependencies and select the configuration you want (available configs listed below)

### Default Vanilla JS Configuration

The default install will install all required _AND_ optional dependencies. You can safely remove the following packages without triggering a peer dependency warning if you aren't consuming the associated configs:

- `react`
  - `eslint-config-airbnb`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`
- `jest`
  - `eslint-plugin-jest`

_Install it with NPM:_ `npx install-peerdeps --dev @ascend-innovations/eslint-config-ts`\
_Install it with Yarn:_ `npx install-peerdeps --dev @ascend-innovations/eslint-config-ts -Y`\
_Use it:_

```
{
  "extends": [
    "@ascend-innovations/eslint-config-ts"
  ]
}
```

_Notes:_

- This install will install optional peer dependencies as well. If you aren't using `react` or `jest`, you can remove the following packages without triggering a peer dependency warning:
  - `eslint-config-airbnb`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`
- Extends [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- Prettier is always on (configured & enabled by default)

### React Configuration

_Use it:_

```
{
  "extends": [
    "@ascend-innovations/eslint-config-ts/react"
  ]
}
```

_Notes:_

- Extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- Prettier is always on (configured & enabled by default)

### Node Configuration

_Use it:_

```
{
  "extends": [
    "@ascend-innovations/eslint-config-ts/node"
  ]
}
```

_Notes:_

- Extends [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- Prettier is always on (configured & enabled by default)

### Add Jest Support

You can add Jest support to any project:

```
{
  "extends": [
    "@ascend-innovations/eslint-config-ts/jest"
  ]
}
```

## Set Up Project Lint Scripts

Add two scripts to your package.json to lint and/or fix:

_Non-React projects:_

```
"scripts": {
  "lint": "eslint . --ext .js,.ts",
  "lint:fix": "eslint . --ext .js,.ts --fix"
},
```

_React projects:_

```
"scripts": {
  "lint": "eslint . --ext .js,.ts,.jsx,.tsx",
  "lint:fix": "eslint . --ext .js,.ts,.jsx,.tsx --fix"
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
