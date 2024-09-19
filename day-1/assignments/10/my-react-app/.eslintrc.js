{
    "extends": ["eslint:recommended", "plugin:react/recommended", "prettier"],
    "plugins": ["react", "prettier"],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "semi": false,
                "singleQuote": true,
                "jsxSingleQuote": true,
                "jsxBracketSameLine": true,
                "trailingComma": "none"
            }
        ]
    }
}