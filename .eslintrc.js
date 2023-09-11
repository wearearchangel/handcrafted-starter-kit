module.exports = {
  env: {
    browser: true, es2021: true
  },
  extends: ["standard", "eslint:recommended", "plugin:import/recommended"],
  plugins: ["import"],
  settings: {
    "import/resolver": "webpack"
  },
  rules: {
    "import/no-unresolved": [2, {
      commonjs: true, amd: true
    }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    semi: ["error", "always"],
    indent: ["error", 2, {
      SwitchCase: 1
    }],
    "no-loss-of-precision": 0,
    "space-before-function-paren": ["error", {
      anonymous: "always", named: "always", asyncArrow: "always"
    }]
  }
};
