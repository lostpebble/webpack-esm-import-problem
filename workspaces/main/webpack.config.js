import path from "path";
// import webpackNodeExternals from "webpack-node-externals";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

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
  externals: [function ({ context, request, contextInfo, getResolve }, callback) {
    console.log(`Request`, request);
    console.log(`Context`, context);
    // console.log(`Context Info`, contextInfo);

    // console.log(getResolve()(context));
    // console.log(`GetResolve`, getResolve());

    console.log(`${!request.startsWith(".")} && ${context.includes("webpack-module-errors\\workspaces\\main\\src")}`)

    if (!request.startsWith(".") && context.includes("webpack-module-errors\\workspaces\\main\\src")) {
      console.log(`Making external: ${request}`);
      const libFile = require.resolve(request);
      console.log(`Lib file: ${libFile}`);
      const moduleBasePath = /(.+node_modules\\([^\\]+|@[^\\]+\\[^\\]+))/g.exec(libFile);
      console.log(moduleBasePath);
      if (moduleBasePath != null) {
        const packageJson = require(`${moduleBasePath[0]}/package.json`);
        // console.log(packageJson);
        if (packageJson.type === "module") {
          return callback(null, request, "module");
        }
      }

      return callback(null, `import ${request}`);
    }
    callback();
  }],
  externalsPresets: {
    node: true,
  },
  optimization: {
    minimize: false,
  },
};
