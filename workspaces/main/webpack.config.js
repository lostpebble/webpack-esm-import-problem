import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const whiteList = [/@test-dep/];
const whiteListContext = ["webpack-module-errors\\workspaces\\main\\src", "webpack-module-errors\\workspaces\\extra"];

export default {
  entry: "./src/MainEntry.ts",
  target: ["node", "es2020"],
  output: {
    library: {
      type: "module",
    },
    module: true,
    filename: "index.js",
    path: path.join(process.cwd(), "lib"),
    environment: {
      module: true,
    },
  },
  devtool: "cheap-module-source-map",
  mode: "development",
  module: {
    rules: [{
      test: /\.ts/,
      loader: "babel-loader",
      options: {
        rootMode: "upward",
      },
    }]
  },
  experiments: { "outputModule": true },
  externalsType: "module",
  externals: {
    // "fela-plugin-named-keys": "node-commonjs fela-plugin-named-keys",
    "unified": "module unified",
    "rehype-parse": "module rehype-parse",
  },
  externalsPresets: {
    node: true,
  },
  optimization: {
    minimize: false,
  },
  /*externals: [function ({ context, request, contextInfo, getResolve }, callback) {
    console.log(`Request`, request);
    console.log(`Context`, context);

    if (!request.startsWith(".") && whiteListContext.some(c => context.includes(c))) {
      const libFile = require.resolve(request);
      console.log(`Lib file: ${libFile}`);

      if (whiteList.some(r => r.test(request))) {
        console.log(`NOT external (bundled): ${request}`);
        return callback(); // bundle this
      }

      console.log(`Making external: ${request}`);
      const moduleBasePath = /(.+node_modules\\([^\\]+|@[^\\]+\\[^\\]+))/g.exec(libFile);
      console.log(moduleBasePath);
      if (moduleBasePath != null) {
        const packageJson = require(`${moduleBasePath[0]}/package.json`);
        // console.log(packageJson);
        if (packageJson.type === "module") {
          return callback(null, request, "module");
        }
      }

      return callback(null, `node-commonjs ${request}`);
    }

    console.log(`NOT external (bundled): ${request}`);

    callback();
  }],*/
};
