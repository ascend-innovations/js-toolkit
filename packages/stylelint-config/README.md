<p align="center">
  <img src="../../.github/assets/stylelint-config.png" />
</p>
<p align="center">
  Ascend's Stylelint config for writing consistent styles 👌
</p>
<br/>

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@ascend-innovations/stylelint-config" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@ascend-innovations/stylelint-config.svg" alt="NPM version" /></a></span> <img src="https://img.shields.io/badge/PRs-welcome-orange.svg" alt="PRs welcome!" />

## Install
*Install it with NPM:* `npx install-peerdeps --dev @ascend-innovations/stylelint-config`\
*Install it with Yarn:* `npx install-peerdeps --dev @ascend-innovations/stylelint-config -Y`\

## Use
1. Create a `.stylelintrc` file in your project root
2. Extend this config:
```
{
  extends: '@ascend-innovations/stylelint-config';
}
```
3. Add a stylelint script to your `package.json`
```
"lint:css": "yarn stylelint **/*.css",
"lint:css:fix": "yarn stylelint **/*.css --fix"
```

## VSCode Setup
1. It is recommended to auto-fix on save by adding the following to `.vscode/settings.json`:
```
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
},
```
2. Additionally, you may want to disable conflicting VSCode reporting by adding the following to `.vscode/settings.json`:
```
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
```
3. For more information on configuring stylelint for VSCode head here: [https://github.com/stylelint/vscode-stylelint](https://github.com/stylelint/vscode-stylelint)