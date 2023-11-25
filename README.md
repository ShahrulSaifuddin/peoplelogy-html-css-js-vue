# peoplelogy-html-css-js-vue

training peoplelogy

a:
a: visited
a: hover, a: focus
a: active

<!-- Mobile -->

@media (max-width: 480px){}

<!-- Extra small devices -->

@media (min-width: 481px) and (max-width: 767px){}

<!-- Small tablets -->

@media (min-width: 768px) and (max-width: 991px){}

<!-- Large tablets/laptops -->

@media (min-width: 992px) and (max-width: 1199px){}

<!-- Desktops -->

@media (min-width: 1200px) and (max-width: 1919px){}

<!-- Extra large screen -->

@media (min-width: 1920px){}

//.eslintrc.cjs
module.exports = {
root: true,
env: { browser: true, es2020: true },
extends: [
'eslint:recommended',
'plugin:react/recommended',
'plugin:react/jsx-runtime',
'plugin:react-hooks/recommended',
],
ignorePatterns: ['dist', '.eslintrc.cjs'],
parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
settings: { react: { version: '18.2' } },
plugins: ['react-refresh'],
rules: {
'react-refresh/only-export-components': [
'warn',
{ allowConstantExport: true },
],

    // Disable the rule for prop-types validation
    'react/prop-types': 'off',

},
};
