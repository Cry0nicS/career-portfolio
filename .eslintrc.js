/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
"use strict";

const baseConfig = require("@glen-84/eslint-config");

module.exports = {
    extends: ["react-app", "@glen-84"],
    parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.eslint.json"]
    },
    rules: {
        // Place to specify ESLint rules.
        "@typescript-eslint/naming-convention": [
            ...baseConfig.rules["@typescript-eslint/naming-convention"],
            {
                selector: "variable",
                format: ["strictCamelCase", "StrictPascalCase"],
                types: ["function"]
            }
        ]
    },
    // Lint .*.js files in the project root directory.
    ignorePatterns: ["!/.*.js"],
    overrides: [
        {
            // Files that are run with Node.js.
            files: ["./*.js"],
            rules: {
                "@typescript-eslint/no-require-imports": "off",
                "@typescript-eslint/no-var-requires": "off",
                "strict": ["error", "global"]
            },
            parserOptions: {
                sourceType: "script"
            }
        }
    ]
};
