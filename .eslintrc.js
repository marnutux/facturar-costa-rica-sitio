module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-multi-spaces": "warn",
    "no-trailing-spaces": "warn",
    "keyword-spacing": "warn",
    "key-spacing": "warn",
    "computed-property-spacing": "warn",
    "space-before-blocks": "warn",
    "no-var": "warn",
    "no-undef": "error",
    "no-unused-vars": ["warn", { "args": "none" }],
    "prefer-const": "error",
    "camelcase": 2,
    "no-console": ["error", { allow: ["warn", "error"] }],
  }
}
