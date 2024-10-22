import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.Parser, // if using TypeScript
    },
    settings: {
      react: {
        version: "detect", // Automatically picks the version you have installed.
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-console": "off", // Allow console logs
      semi: ["error", "always"], // Enforce semicolons
    },
  },
];
