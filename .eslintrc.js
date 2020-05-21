module.exports = {
    extends: ["react-app", "@glen-84"],
    parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.eslint.json"]
    },
    rules: {
        // Place to specify ESLint rules.
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "react/prop-types": "off"
    }
};
