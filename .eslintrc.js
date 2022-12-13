/** @type {import('@types/eslint').Linter.BaseConfig} */
const { resolve } = require("path");
const baseConfig = require("eslint-config-react/react-next");

module.exports = {
...baseConfig,
  parserOptions: {
    ...baseConfig.parserOptions,
    project: resolve(__dirname, "tsconfig.json"),
  },
};
