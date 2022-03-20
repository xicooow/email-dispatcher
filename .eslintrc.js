/* eslint-disable no-undef */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/react-in-jsx-scope": 0,
    "semi": 1,
    "no-else-return": 1,
    "space-unary-ops": 1,
    "consistent-return": 2,
    "eol-last": 2,
    "no-trailing-spaces": 2,
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
