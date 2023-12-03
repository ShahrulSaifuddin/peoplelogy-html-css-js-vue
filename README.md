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

article {
display: grid;
place-items: center;
background: linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7)),
url(./images/img.jpg) center/cover no-repeat;
}

/_ ============= GLOBAL CSS =============== _/

\*,
::after,
::before {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
font-size: 100%;
} /_16px_/

:root {
/_ colors _/
--primary-100: #e2e0ff;
--primary-200: #a5f3fc;
--primary-300: #67e8f9;
--primary-400: #22d3ee;
--primary-500: #06b6d4;
--primary-600: #0891b2;
--primary-700: #0e7490;
--primary-800: #155e75;
--primary-900: #164e63;

/_ grey _/
--grey-50: #f8fafc;
--grey-100: #f1f5f9;
--grey-200: #e2e8f0;
--grey-300: #cbd5e1;
--grey-400: #94a3b8;
--grey-500: #64748b;
--grey-600: #475569;
--grey-700: #334155;
--grey-800: #1e293b;
--grey-900: #0f172a;
/_ rest of the colors _/
--black: #222;
--white: #fff;
--red-light: #f8d7da;
--red-dark: #842029;
--green-light: #d1e7dd;
--green-dark: #0f5132;

--small-text: 0.875rem;
--extra-small-text: 0.7em;
/_ rest of the vars _/
--backgroundColor: var(--grey-50);
--textColor: var(--grey-900);
--borderRadius: 0.25rem;
--letterSpacing: 1px;
--transition: 0.3s ease-in-out all;
--max-width: 1120px;
--fixed-width: 600px;

/_ box shadow_/
--shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

body {
background: var(--backgroundColor);
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 400;
line-height: 1;
color: var(--textColor);
}
p {
margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
margin: 0;
font-family: var(--headingFont);
font-weight: 400;
line-height: 1;
text-transform: capitalize;
letter-spacing: var(--letterSpacing);
}

h1 {
font-size: 3.052rem;
}

h2 {
font-size: 2.441rem;
}

h3 {
font-size: 1.953rem;
}

h4 {
font-size: 1.563rem;
}

h5 {
font-size: 1.25rem;
}

.text {
margin-bottom: 1.5rem;
max-width: 40em;
}

small,
.text-small {
font-size: var(--small-text);
}

a {
text-decoration: none;
}
ul {
list-style-type: none;
padding: 0;
}

.img {
width: 100%;
display: block;
object-fit: cover;
}
