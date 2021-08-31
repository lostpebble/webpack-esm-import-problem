import * as __WEBPACK_EXTERNAL_MODULE_null__ from "rehype-parse";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "fela-plugin-named-keys"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_fela_plugin_named_keys_namespaceObject = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_null__.default });
;// CONCATENATED MODULE: external "unified"
var external_unified_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var external_unified_y = x => () => x
const external_unified_namespaceObject = external_unified_x({ ["unified"]: () => __WEBPACK_EXTERNAL_MODULE_null__.unified });
;// CONCATENATED MODULE: external "rehype-parse"
var external_rehype_parse_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var external_rehype_parse_y = x => () => x
const external_rehype_parse_namespaceObject = external_rehype_parse_x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_null__.default });
;// CONCATENATED MODULE: ../extra/lib/TestUseExternalModule.js

console.log(external_fela_plugin_named_keys_namespaceObject.default);
var EMediaDimensions;

(function (EMediaDimensions) {
  EMediaDimensions[EMediaDimensions["DesktopStart"] = 1024] = "DesktopStart";
})(EMediaDimensions || (EMediaDimensions = {}));

var mediaQueries = {
  desktopOnly: "@media (min-width: ".concat(EMediaDimensions.DesktopStart, "px)")
};
var namedKeysPlugin = (0,external_fela_plugin_named_keys_namespaceObject.default)(mediaQueries);
console.log("Module executed successfully in EXTRA module");
var Renderer = () => {
  console.log("Renderer executing successfully...");
};
;// CONCATENATED MODULE: ./src/MainEntry.ts




console.log(external_fela_plugin_named_keys_namespaceObject.default);
console.log(external_unified_namespaceObject.unified);
var MainEntry_EMediaDimensions;

(function (EMediaDimensions) {
  EMediaDimensions[EMediaDimensions["DesktopStart"] = 1024] = "DesktopStart";
})(MainEntry_EMediaDimensions || (MainEntry_EMediaDimensions = {}));

var MainEntry_mediaQueries = {
  desktopOnly: "@media (min-width: ".concat(MainEntry_EMediaDimensions.DesktopStart, "px)")
};
var MainEntry_namedKeysPlugin = (0,external_fela_plugin_named_keys_namespaceObject.default)(MainEntry_mediaQueries); // Test of an actual ES6 Module

var something = (0,external_unified_namespaceObject.unified)().use(external_rehype_parse_namespaceObject.default).parse("<html></html>");
console.log("Module executed successfully in MAIN module");
Renderer();
