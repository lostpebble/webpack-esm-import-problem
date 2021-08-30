import namedKeys from "fela-plugin-named-keys";
import { unified } from "unified";
import parse from "rehype-parse";
import { Renderer } from "@test-dep/extra";

console.log(namedKeys);
console.log(unified);

enum EMediaDimensions {
  DesktopStart = 1024,
}

const mediaQueries = {
  desktopOnly: `@media (min-width: ${EMediaDimensions.DesktopStart}px)`,
};

const namedKeysPlugin = namedKeys(mediaQueries);
// Test of an actual ES6 Module
const something = unified().use(parse).parse("<html></html>");

console.log("Module executed successfully in MAIN module");

Renderer();
