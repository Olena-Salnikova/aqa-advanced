import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "semi": ["error", "always"], // Require semicolons
      "prefer-const": "error", // Prefer const when variables are not reassigned
      "array-bracket-spacing": ["error", "never"], // Disallow spacing inside array brackets
      "curly": ["error", "all"], // Enforce curly braces for all control statements
      "no-var": "error", // Disallow var, use let or const instead
      "no-unused-vars": ["warn", { "args": "none", "ignoreRestSiblings": true }], // Warn on unused variables
      "eqeqeq": ["error", "always"], // Enforce strict equality
      "no-console": "off", // Allow console statements (useful for learning)
      "space-before-blocks": ["error", "always"], // Enforce space before blocks
      "object-curly-spacing": ["error", "always"], // Enforce spacing inside curly braces
      "no-multiple-empty-lines": ["error", { "max": 1 }], // Limit consecutive empty lines
      "prefer-template": "error", // Prefer template literals over string concatenation
      "no-extra-semi": "error", // Disallow unnecessary semicolons
      "spaced-comment": ["warn", "always", { "markers": ["/"] }], // Enforce space after comment markers
      "no-duplicate-case": "error", // Disallow duplicate case labels
      "consistent-return": "warn", // Ensure functions return consistent types
      "default-case": "warn", // Require default case in switch statements
      "no-debugger": "warn", // Warn if debugger is left in code
    },
    languageOptions: { globals: globals.browser }
  },
]);
