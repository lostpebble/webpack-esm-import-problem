import * as __WEBPACK_EXTERNAL_MODULE_rehype_parse__ from "rehype-parse";
import * as __WEBPACK_EXTERNAL_MODULE_unified__ from "unified";
/******/ var __webpack_modules__ = ({

/***/ "../../node_modules/css-in-js-utils/lib/assignStyle.js":
/*!*************************************************************!*\
  !*** ../../node_modules/css-in-js-utils/lib/assignStyle.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = assignStyle;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function filterUniqueArray(arr) {
  return arr.filter(function (val, index) {
    return arr.lastIndexOf(val) === index;
  });
}

function assignStyle(base) {
  for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i) {
    var style = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];

      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value));
          continue;
        }

        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue].concat(_toConsumableArray(value)));
          continue;
        }

        if (_typeof(value) === 'object') {
          base[property] = assignStyle({}, baseValue, value);
          continue;
        }
      }

      base[property] = value;
    }
  }

  return base;
}

/***/ }),

/***/ "../../node_modules/fela-plugin-named-keys/es/index.js":
/*!*************************************************************!*\
  !*** ../../node_modules/fela-plugin-named-keys/es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ namedKeys)
/* harmony export */ });
/* harmony import */ var isobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isobject */ "../../node_modules/isobject/index.js");
/* harmony import */ var isobject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isobject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_utils_lib_assignStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-in-js-utils/lib/assignStyle */ "../../node_modules/css-in-js-utils/lib/assignStyle.js");



function resolveNamedKeys(style, keys) {
  for (var property in style) {
    var value = style[property];

    if (isobject__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
      var resolvedValue = resolveNamedKeys(value, keys);

      if (keys.hasOwnProperty(property)) {
        var resolvedKey = keys[property];
        if (style.hasOwnProperty(resolvedKey)) {
          style[resolvedKey] = (0,css_in_js_utils_lib_assignStyle__WEBPACK_IMPORTED_MODULE_1__.default)(style[resolvedKey], resolvedValue);
        } else {
          style[resolvedKey] = resolvedValue;
        }

        // We clean the old keys as they're not used anymore
        delete style[property];
      }
    }
  }

  return style;
}

function namedKeys(keys) {
  return function (style, type, renderer, props) {
    return resolveNamedKeys(style, keys instanceof Function ? keys(props) : keys);
  };
}

/***/ }),

/***/ "../../node_modules/isobject/index.js":
/*!********************************************!*\
  !*** ../../node_modules/isobject/index.js ***!
  \********************************************/
/***/ ((module) => {

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "rehype-parse":
/*!*******************************!*\
  !*** external "rehype-parse" ***!
  \*******************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_rehype_parse__;

/***/ }),

/***/ "unified":
/*!**************************!*\
  !*** external "unified" ***!
  \**************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_unified__;

/***/ }),

/***/ "../extra/lib/TestUseExternalModule.js":
/*!*********************************************!*\
  !*** ../extra/lib/TestUseExternalModule.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fela-plugin-named-keys */ "../../node_modules/fela-plugin-named-keys/es/index.js");

var Renderer = () => {
  console.log(fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__.default);
  var EMediaDimensions;

  (function (EMediaDimensions) {
    EMediaDimensions[EMediaDimensions["DesktopStart"] = 1024] = "DesktopStart";
  })(EMediaDimensions || (EMediaDimensions = {}));

  var mediaQueries = {
    desktopOnly: "@media (min-width: ".concat(EMediaDimensions.DesktopStart, "px)")
  };
  var namedKeysPlugin = (0,fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__.default)(mediaQueries);
  console.log("Renderer executing successfully...");
};

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/MainEntry.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fela-plugin-named-keys */ "../../node_modules/fela-plugin-named-keys/es/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ "unified");
/* harmony import */ var rehype_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rehype-parse */ "rehype-parse");
/* harmony import */ var _test_dep_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @test-dep/extra */ "../extra/lib/TestUseExternalModule.js");




console.log(fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_3__.default);
console.log(unified__WEBPACK_IMPORTED_MODULE_0__.unified);
var EMediaDimensions;

(function (EMediaDimensions) {
  EMediaDimensions[EMediaDimensions["DesktopStart"] = 1024] = "DesktopStart";
})(EMediaDimensions || (EMediaDimensions = {}));

var mediaQueries = {
  desktopOnly: "@media (min-width: ".concat(EMediaDimensions.DesktopStart, "px)")
};
var namedKeysPlugin = (0,fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_3__.default)(mediaQueries); // Test of an actual ES6 Module

var something = (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)().use(rehype_parse__WEBPACK_IMPORTED_MODULE_1__.default).parse("<html></html>");
console.log("Module executed successfully in MAIN module");
(0,_test_dep_extra__WEBPACK_IMPORTED_MODULE_2__.Renderer)();
})();


//# sourceMappingURL=index.js.map