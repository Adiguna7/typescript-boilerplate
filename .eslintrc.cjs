module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        "@typescript-eslint/brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true },
        ],
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/comma-spacing": ["error"],
        "@typescript-eslint/no-unused-vars": ["warn", {"args": "none"}],
        "no-constant-condition": ["error", { "checkLoops": false }],
        // placeholder
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "linebreak-style": [ "error", "unix" ],
        "semi": [ "error", "always" ],
        // formatting
        "no-trailing-spaces": [ "error" ],
        "max-len": [ "error", {
            "ignoreStrings": true,
            "ignoreUrls": true,
            "ignoreTrailingComments": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true,
        }],
    }
};