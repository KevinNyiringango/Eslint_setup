import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        SELECT: "readonly",
        UPDATE: "readonly",
        INSERT: "readonly",
        DELETE: "readonly"
      }
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "arrow-body-style": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];