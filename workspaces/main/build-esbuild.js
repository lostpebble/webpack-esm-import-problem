import esbuild from "esbuild"

esbuild.buildSync({
  entryPoints: ['src/MainEntry.ts'],
  outfile: "lib-esbuild/index.js",
  bundle: true,
  platform: "node",
  external: ["unified", "rehype-parse", "fela-plugin-named-exports"],
  target: ["es2020", "node16"],
  format: "esm"
})
