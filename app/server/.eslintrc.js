module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "project": ".eslintrc.js",
        "sourceType": "module"
    },
    "plugins": [
        '@typescript-eslint'
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        "prettier"
    ],
    "rules": {
        "import/extensions": "never"
    }
}