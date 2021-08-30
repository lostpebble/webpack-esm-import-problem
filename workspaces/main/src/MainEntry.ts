import namedKeys from "fela-plugin-named-keys";
// import { Renderer } from "@test-dep/extra";

console.log(namedKeys);
enum EMediaDimensions {
  DesktopStart = 1024,
}

const mediaQueries = {
  desktopOnly: `@media (min-width: ${EMediaDimensions.DesktopStart}px)`,
};

const namedKeysPlugin = namedKeys.default(mediaQueries);

console.log("Module executed successfully in MAIN module");

// Renderer();
