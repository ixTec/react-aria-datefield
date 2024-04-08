/** @type {import('next').NextConfig} */

const { resolve } = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["transpiled"] = resolve(__dirname, "../dist");

    return config;
  },
};
