const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/engine.mjs",
  output: {
    library: "engine",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    filename: "engine.js",
  },
  resolve: {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    zlib: require.resolve("browserify-zlib"),
    "process/browser": require.resolve("process/browser"),
    path: require.resolve("path-browserify"),
    alias: {
      "magic-sdk": path.resolve(
        __dirname,
        "node_modules/magic-sdk/dist/cjs/index.js"
      ),
    },
  },
};
