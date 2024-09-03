const love = require('eslint-config-love');

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.eslint.json"],
  },
  extends: [
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "plugin:vue-pug/vue3-recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-n",
    "eslint-plugin-promise",
  ],
  env: {
    es2020: true,
  },
  rules: {
    ...love.rules,
    // double quotes
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],
    // semicolon
    semi: ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    // trailing comma
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: "comma",
        requireLast: true,
      },
      singleline: {
        delimiter: "comma",
        requireLast: false,
      },
    }],
    // Array<T>
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    // allow misused promises
    "@typescript-eslint/no-misused-promises": "warn",
    // allow floating promises
    "@typescript-eslint/no-floating-promises": "warn",
    // allow undef variables
    "no-undef": "warn",
    // allow unused variables
    "no-unused-vars": "warn",
    // allow no-setup-props-destructure variables
    "vue/no-setup-props-destructure": "warn",
    // allow functions without return type
    "@typescript-eslint/explicit-function-return-type": 0,
    // allow non-strict boolean expressions
    "@typescript-eslint/strict-boolean-expressions": 0,
    // single word vue files
    "vue/multi-word-component-names": 0,
    // allow position as key in v-for
    "vue/require-v-for-key": 0,
    // allow mutation props
    "vue/no-mutating-props": "warn",
    // allow any arguments
    "@typescript-eslint/no-unsafe-argument": "warn",
    // 2-space indentation
    indent: ["error", 2],

    "vue/max-attributes-per-line": 0,
  },
};
