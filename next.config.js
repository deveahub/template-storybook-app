/** @type {import('next').NextConfig} */
const packageJSON = require("./package.json");

const getModuleNamesToTranspile = (dependencies = {}) =>
  Object.keys(dependencies).filter((f) => dependencies[f] === "*");

const withTranspile = require("next-transpile-modules")([
  ...getModuleNamesToTranspile(packageJSON.dependencies),
  ...getModuleNamesToTranspile(packageJSON.devDependencies),
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTranspile(nextConfig);
