/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/images sync recursive ^\\.\\/.*$":
/*!**********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/images/ sync ^\.\/.*$ ***!
  \**********************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./decidim/alternative_landing/platoniq-logo.png": "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/images/decidim/alternative_landing/platoniq-logo.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/src/decidim/alternative_landing/alternative_landing.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/src/decidim/alternative_landing/alternative_landing.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var coverFull = $(".alternative-landing.cover-full");
  if (coverFull.is("#content section:first-of-type")) {
    $(".navbar").addClass("transparent");
  }
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/entrypoints/decidim_alternative_landing.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/entrypoints/decidim_alternative_landing.scss ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/images/decidim/alternative_landing/platoniq-logo.png":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/images/decidim/alternative_landing/platoniq-logo.png ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/platoniq-logo-5439008eeac5e5428475.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/decidim-packs/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*******************************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/entrypoints/decidim_alternative_landing.js ***!
  \*******************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_alternative_landing_alternative_landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/alternative_landing/alternative_landing.js */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/src/decidim/alternative_landing/alternative_landing.js");
/* harmony import */ var src_decidim_alternative_landing_alternative_landing_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_alternative_landing_alternative_landing_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var entrypoints_decidim_alternative_landing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entrypoints/decidim_alternative_landing.scss */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/entrypoints/decidim_alternative_landing.scss");

__webpack_require__("../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/images sync recursive ^\\.\\/.*$");

}();
/******/ })()
;
//# sourceMappingURL=decidim_alternative_landing.js.map