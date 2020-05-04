## eslint-loader
To use eslint-loader so that .vue files are automatically linted when saved in the dev environment:
1. `npm install -D eslint eslint-loader`
2. ensure it's applied as a pre-loader in the .eslintrc file--see https://vue-loader.vuejs.org/guide/linting.html#eslint

## eslint-plugin-pug
This is for linting inline scripts in Pug files. To use:
1. `npm i eslint-plugin-pug`
2. add to the .eslintrc file as a plugin.
3. The extended configuration provides base rules, which can be overridden by the configuration that references it.
4. Specify options and rules via a "pugLintConfig" option to package.json.
For more information, see https://www.npmjs.com/package/pug-lint#extends or https://openbase.io/js/pug-lint.


