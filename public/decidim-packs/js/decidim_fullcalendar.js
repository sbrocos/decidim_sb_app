/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/src/decidim/alternative_landing/decidim_fullcalendar.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/src/decidim/alternative_landing/decidim_fullcalendar.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var target = document.getElementById("participatory-process-group-homepage-calendar");
  var filters = JSON.parse(decodeURIComponent(target.dataset.resources));
  function removeFilter(filters, filter) {
    return filters.filter(function (element) {
      return element !== filter;
    });
  }
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    plugins: [timeGridPlugin, dayGridPlugin],
    defaultView: "dayGridMonth",
    locale: "es",
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay"
    },
    height: "auto",
    eventTimeFormat: {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      omitZeroMinute: false
    },
    events: JSON.parse(decodeURIComponent(target.dataset.events)),
    eventRender: function eventRender(info) {
      if ("subtitle" in info.event.extendedProps) {
        title = "<span class=\"fc-title\"><b>" + info.event.title + "</b> - " + info.event.extendedProps.subtitle + "</span>";
        info.el.firstChild.innerHTML = title;
      }
      return filters.includes(info.event.extendedProps.resourceId);
    }
  });
  $(function () {
    calendar.setOption('locale', target.dataset.locale);
    calendar.render();
    $(".cal-filter").on("click", function () {
      $(this).toggleClass("hollow");
      var filter = $(this).attr("id");
      if (filters.includes(filter)) {
        filters = removeFilter(filters, filter);
      } else {
        filters.push(filter);
      }
      calendar.rerenderEvents();
    });
  });
});

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/entrypoints/decidim_fullcalendar.js ***!
  \************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_alternative_landing_decidim_fullcalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/alternative_landing/decidim_fullcalendar */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-module-alternative_landing-110292c2b0f3/app/packs/src/decidim/alternative_landing/decidim_fullcalendar.js");
/* harmony import */ var src_decidim_alternative_landing_decidim_fullcalendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_alternative_landing_decidim_fullcalendar__WEBPACK_IMPORTED_MODULE_0__);

}();
/******/ })()
;
//# sourceMappingURL=decidim_fullcalendar.js.map