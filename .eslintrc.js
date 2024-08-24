module.exports = {
  extends: ["expo", "prettier" ],
  plugins: ["prettier", "import"],
  rules: {
    "prettier/prettier": "warn",
    "import/order": [
      "error",
      {
         "endOfLine": "auto", 
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
