import namedKeys from "fela-plugin-named-keys";
console.log(namedKeys);
var EMediaDimensions;

(function (EMediaDimensions) {
  EMediaDimensions[EMediaDimensions["DesktopStart"] = 1024] = "DesktopStart";
})(EMediaDimensions || (EMediaDimensions = {}));

var mediaQueries = {
  desktopOnly: "@media (min-width: ".concat(EMediaDimensions.DesktopStart, "px)")
};
var namedKeysPlugin = namedKeys(mediaQueries);
console.log("Module executed successfully");
export var Renderer = () => {
  console.log("Renderer executing successfully...");
};