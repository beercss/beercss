module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.eslint.json"],
  },
  extends: [
    "standard-with-typescript",
    "eslint:recommended",
    "plugin:vue/strongly-recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
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
    // 2-space indentation
    indent: ["error", 2],
  },
  overrides: [
    {
      files: [".eslintrc.cjs"],
      parserOptions: { project: null },
    },
  ],
};
