import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { vueTsConfigs } from "@vue/eslint-config-typescript";

export default defineConfig([
    {
        ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**", "**/storybook-static/**"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    vueTsConfigs.recommended,
    {
        rules: {
            "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "vue/multi-word-component-names": "off",
        },
    },
]);