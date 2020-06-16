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
    }
};
