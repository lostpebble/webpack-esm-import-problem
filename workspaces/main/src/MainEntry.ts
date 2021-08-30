import namedKeys from "fela-plugin-named-keys";
import { unified } from "unified";

console.log(namedKeys);

enum EMediaDimensions {
  DesktopStart = 1024,
}

const mediaQueries = {
  desktopOnly: `@media (min-width: ${EMediaDimensions.DesktopStart}px)`,
};

const namedKeysPlugin = namedKeys(mediaQueries);

// Test of an actual ES6 Module
const something = unified().parse("");

console.log("Module executed successfully in MAIN module");
