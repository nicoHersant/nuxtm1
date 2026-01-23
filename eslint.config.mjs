// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default withNuxt(
    // Your custom configs here
    ...tseslint.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    {
        files: ['**/*.vue'],
        languageOptions: {
        parserOptions: {
            parser: tseslint.parser
        }
        }
    }
)
