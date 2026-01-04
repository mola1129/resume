import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig(
  {
    ignores: [".astro/**", "node_modules/**", "dist/**"],
  },
  {
    files: ["**/*.{js,ts,vue}"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      eslintPluginVue.configs["flat/recommended"],
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".vue"],
        parser: tseslint.parser,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
);
