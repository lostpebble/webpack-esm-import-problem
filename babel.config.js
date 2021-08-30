module.exports = {
  presets: ["@babel/typescript", ["@babel/env", {
    modules: "auto",
    targets: {
      node: "current",
      esmodules: true,
    }
  }]],
}
