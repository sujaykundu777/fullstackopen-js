module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "airbnb-typescript/base",
        "plugin:prettier/recommended"
    ],
    "rules":{
        "import/extensions": ["error", "ignorePackages", {
            "js": "never",
            "mjs": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }],
        "prettier/prettier": "error",
        "@typescript-eslint/indent": ["error", 2],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error"
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [
              ".js",
              ".jsx",
              ".ts",
              ".tsx"
            ]
          }
        }
      }
}
