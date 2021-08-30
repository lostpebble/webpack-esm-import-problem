/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_rehype_parse__ from "rehype-parse";
import * as __WEBPACK_EXTERNAL_MODULE_unified__ from "unified";
/******/ var __webpack_modules__ = ({

/***/ "./src/MainEntry.ts":
/*!**************************!*\
  !*** ./src/MainEntry.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fela-plugin-named-keys */ \"fela-plugin-named-keys\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ \"unified\");\n/* harmony import */ var rehype_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rehype-parse */ \"rehype-parse\");\n/* harmony import */ var _test_dep_extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @test-dep/extra */ \"@test-dep/extra\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_test_dep_extra__WEBPACK_IMPORTED_MODULE_3__, fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__]);\n([_test_dep_extra__WEBPACK_IMPORTED_MODULE_3__, fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nconsole.log(fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__.default);\nconsole.log(unified__WEBPACK_IMPORTED_MODULE_1__.unified);\nvar EMediaDimensions;\n\n(function (EMediaDimensions) {\n  EMediaDimensions[EMediaDimensions[\"DesktopStart\"] = 1024] = \"DesktopStart\";\n})(EMediaDimensions || (EMediaDimensions = {}));\n\nvar mediaQueries = {\n  desktopOnly: \"@media (min-width: \".concat(EMediaDimensions.DesktopStart, \"px)\")\n};\nvar namedKeysPlugin = (0,fela_plugin_named_keys__WEBPACK_IMPORTED_MODULE_0__.default)(mediaQueries); // Test of an actual ES6 Module\n\nvar something = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)().use(rehype_parse__WEBPACK_IMPORTED_MODULE_2__.default).parse(\"<html></html>\");\nconsole.log(\"Module executed successfully in MAIN module\");\n(0,_test_dep_extra__WEBPACK_IMPORTED_MODULE_3__.Renderer)();\n});\n\n//# sourceURL=webpack://@test-dep/main/./src/MainEntry.ts?");

/***/ }),

/***/ "@test-dep/extra":
/*!**********************************!*\
  !*** external "@test-dep/extra" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@test-dep/extra");;

/***/ }),

/***/ "fela-plugin-named-keys":
/*!*****************************************!*\
  !*** external "fela-plugin-named-keys" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("fela-plugin-named-keys");;

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
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var completeQueue = (queue) => {
/******/ 		if(queue) {
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var completeFunction = (fn) => (!--fn.r && fn());
/******/ 	var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackThen]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					completeQueue(queue);
/******/ 					queue = 0;
/******/ 				});
/******/ 				var obj = {};
/******/ 											obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 							ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 							ret[webpackExports] = dep;
/******/ 							return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue = hasAwait && [];
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var isEvaluating = true;
/******/ 		var nested = false;
/******/ 		var whenAll = (deps, onResolve, onReject) => {
/******/ 			if (nested) return;
/******/ 			nested = true;
/******/ 			onResolve.r += deps.length;
/******/ 			deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 			nested = false;
/******/ 		};
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackThen] = (fn, rejectFn) => {
/******/ 			if (isEvaluating) { return completeFunction(fn); }
/******/ 			if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 			queueFunction(queue, fn);
/******/ 			promise.catch(rejectFn);
/******/ 		};
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			if(!deps) return outerResolve();
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn, result;
/******/ 			var promise = new Promise((resolve, reject) => {
/******/ 				fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 				fn.r = 0;
/******/ 				whenAll(currentDeps, fn, reject);
/******/ 			});
/******/ 			return fn.r ? promise : result;
/******/ 		}).then(outerResolve, reject);
/******/ 		isEvaluating = false;
/******/ 	};
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
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/MainEntry.ts");
/******/ __webpack_exports__ = await __webpack_exports__;
/******/ 
