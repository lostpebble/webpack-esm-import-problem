module.exports = {
  presets: ["@babel/typescript", ["@babel/env", {
    modules: false,
    targets: {
      node: "current",
      esmodules: true,
    }
  }]],
}
