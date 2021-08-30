import path from "path";

export default {
  entry: "./src/MainEntry.ts",
  target: ["node", "es2020"],
  output: {
    library: {
      type: "module",
    },
    module: true,
    filename: "index.js",
    path: path.join(process.cwd(), "lib")
  },
  mode: "production",
  module: {
    rules: [{
      test: /\.ts/,
      loader: "babel-loader",
      options: {
        rootMode: "upward",
      },
    }]
  },
  // externalsPresets: { "node": true },
  experiments: { "outputModule": true },
  externalsType: "module",
  externals: {
    "fela-plugin-named-keys": "fela-plugin-named-keys"
  },
  optimization: {
    minimize: false,
  },
};
