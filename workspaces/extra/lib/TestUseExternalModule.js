import namedKeys from "fela-plugin-named-keys";
export var Renderer = () => {
  console.log(namedKeys);
  var EMediaDimensions;

  (function (EMediaDimensions) {
    EMediaDimensions[EMediaDimensions["DesktopStart"] = 1024] = "DesktopStart";
  })(EMediaDimensions || (EMediaDimensions = {}));

  var mediaQueries = {
    desktopOnly: "@media (min-width: ".concat(EMediaDimensions.DesktopStart, "px)")
  };
  var namedKeysPlugin = namedKeys(mediaQueries);
  console.log("Renderer executing successfully...");
};