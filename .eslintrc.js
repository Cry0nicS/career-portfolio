module.exports = {
    extends: ["react-app", "@glen-84"],
    parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.eslint.json"]
    },
    rules: {
        // Place to specify ESLint rules.
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/naming-convention": 0 // Should be PascalCase.
    }
};
