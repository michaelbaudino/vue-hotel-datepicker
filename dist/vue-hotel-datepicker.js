(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HotelDatePicker"] = factory();
	else
		root["HotelDatePicker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgOCAxNCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwQ0E5RCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xLjM2OCAxTDYuNjYgNy4wOTIgMSAxMy41MTIiLz4KPC9zdmc+Cg=="

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__(55);

var _lodash2 = _interopRequireDefault(_lodash);

var _vueOnClickOutside = __webpack_require__(57);

var _fecha = __webpack_require__(14);

var _fecha2 = _interopRequireDefault(_fecha);

var _Day = __webpack_require__(58);

var _Day2 = _interopRequireDefault(_Day);

var _DateInput = __webpack_require__(60);

var _DateInput2 = _interopRequireDefault(_DateInput);

var _helpers = __webpack_require__(16);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaulti18n = {
  night: 'Night',
  nights: 'Nights',
  'day-names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  'check-in': 'Check-in',
  'check-out': 'Check-out',
  'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

exports.default = {
  name: 'HotelDatePicker',

  directives: {
    'on-click-outside': _vueOnClickOutside.directive
  },

  components: {
    Day: _Day2.default,
    DateInput: _DateInput2.default
  },

  props: {
    currentDateStyle: {
      default: function _default() {
        return { border: "1px solid #00c690" };
      }
    },
    value: {
      type: String
    },
    startingDateValue: {
      default: null,
      type: Date
    },
    endingDateValue: {
      default: null,
      type: Date
    },
    format: {
      default: 'YYYY-MM-DD',
      type: String
    },
    startDate: {
      default: function _default() {
        return new Date();
      },
      type: [Date, String]
    },
    endDate: {
      default: Infinity,
      type: [Date, String, Number]
    },
    firstDayOfWeek: {
      default: 0,
      type: Number
    },
    minNights: {
      default: 1,
      type: Number
    },
    maxNights: {
      default: null,
      type: Number
    },
    disabledDates: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    disabledDaysOfWeek: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    allowedRanges: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    hoveringTooltip: {
      default: true,
      type: [Boolean, Function]
    },
    tooltipMessage: {
      default: null,
      type: String
    },
    i18n: {
      default: function _default() {
        return defaulti18n;
      },
      type: Object
    },
    enableCheckout: {
      default: false,
      type: Boolean
    },
    singleDaySelection: {
      default: false,
      type: Boolean
    },
    showYear: {
      default: false,
      type: Boolean
    },
    closeDatepickerOnClickOutside: {
      default: true,
      type: Boolean
    },
    displayClearButton: {
      default: true,
      type: Boolean
    }
  },

  data: function data() {
    return {
      hoveringDate: null,
      checkIn: this.startingDateValue,
      checkOut: this.endingDateValue,
      months: [],
      activeMonthIndex: 0,
      nextDisabledDate: null,
      show: true,
      isOpen: false,
      xDown: null,
      yDown: null,
      xUp: null,
      yUp: null,
      sortedDisabledDates: null,
      screenSize: this.handleWindowResize()
    };
  },


  computed: {
    showClearSelectionButton: function showClearSelectionButton() {
      return Boolean((this.checkIn || this.checkOut) && this.displayClearButton);
    }
  },

  watch: {
    isOpen: function isOpen(value) {
      var _this = this;

      if (this.screenSize !== 'desktop') {
        var bodyClassList = document.querySelector('body').classList;

        if (value) {
          bodyClassList.add('-overflow-hidden');
          setTimeout(function () {
            var swiperWrapper = document.getElementById('swiperWrapper');
            var monthEl = document.querySelector('.datepicker__month');
            if (swiperWrapper && monthEl) swiperWrapper.scrollTop = _this.activeMonthIndex * monthEl.offsetHeight;
          }, 100);
        } else {
          bodyClassList.remove('-overflow-hidden');
        }
      }
    },
    checkIn: function checkIn(newDate) {
      this.$emit("check-in-changed", newDate);
    },
    checkOut: function checkOut(newDate) {

      if (this.checkOut !== null && this.checkOut !== null) {
        this.hoveringDate = null;
        this.nextDisabledDate = null;
        this.show = true;
        this.parseDisabledDates();
        this.reRender();
        this.isOpen = false;
      }

      this.$emit("check-out-changed", newDate);
    }
  },

  methods: (0, _extends3.default)({}, _helpers2.default, {
    formatDate: function formatDate(date) {
      if (date) {
        return _fecha2.default.format(date, this.format);
      }
      return '';
    },
    handleWindowResize: function handleWindowResize() {
      if (window.innerWidth < 480) {
        this.screenSize = 'smartphone';
      } else if (window.innerWidth >= 480 && window.innerWidth < 768) {
        this.screenSize = 'tablet';
      } else if (window.innerWidth >= 768) {
        this.screenSize = 'desktop';
      }

      return this.screenSize;
    },
    onElementHeightChange: function onElementHeightChange(el, callback) {
      var lastHeight = el.clientHeight;
      var newHeight = lastHeight;

      (function run() {
        newHeight = el.clientHeight;

        if (lastHeight !== newHeight) {
          callback();
        }

        lastHeight = newHeight;

        if (el.onElementHeightChangeTimer) {
          clearTimeout(el.onElementHeightChangeTimer);
        }

        el.onElementHeightChangeTimer = setTimeout(run, 1000);
      })();
    },
    emitHeighChangeEvent: function emitHeighChangeEvent() {
      this.$emit('height-changed');
    },
    reRender: function reRender() {
      var _this2 = this;

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    },
    clearSelection: function clearSelection() {
      this.hoveringDate = null, this.checkIn = null;
      this.checkOut = null;
      this.nextDisabledDate = null;
      this.show = true;
      this.parseDisabledDates();
      this.reRender();
    },
    hideDatepicker: function hideDatepicker() {
      this.isOpen = false;
    },
    showDatepicker: function showDatepicker() {
      this.isOpen = true;
    },
    toggleDatepicker: function toggleDatepicker() {
      this.isOpen = !this.isOpen;
    },
    clickOutside: function clickOutside() {
      if (this.closeDatepickerOnClickOutside) {
        this.hideDatepicker();
      }
    },
    handleDayClick: function handleDayClick(event) {

      if (this.checkIn == null && this.singleDaySelection == false) {
        this.checkIn = event.date;
      } else if (this.singleDaySelection == true) {
        this.checkIn = event.date;
        this.checkOut = event.date;
      } else if (this.checkIn !== null && this.checkOut == null) {
        this.checkOut = event.date;
      } else {
        this.checkOut = null;
        this.checkIn = event.date;
      }

      this.nextDisabledDate = event.nextDisabledDate;
    },
    renderPreviousMonth: function renderPreviousMonth() {
      if (this.activeMonthIndex >= 1) {
        this.activeMonthIndex--;
      } else return;
    },


    renderNextMonth: (0, _lodash2.default)(function throttleRenderNextMonth() {
      if (this.activeMonthIndex < this.months.length - 2) {
        this.activeMonthIndex++;
        return;
      }

      var firstDayOfLastMonth = void 0;

      if (this.screenSize !== 'desktop') {
        firstDayOfLastMonth = this.months[this.months.length - 1].days.filter(function (day) {
          return day.belongsToThisMonth === true;
        });
      } else {
        firstDayOfLastMonth = this.months[this.activeMonthIndex + 1].days.filter(function (day) {
          return day.belongsToThisMonth === true;
        });
      }

      if (this.endDate !== Infinity) {
        if (_fecha2.default.format(firstDayOfLastMonth[0].date, 'YYYYMM') == _fecha2.default.format(new Date(this.endDate), 'YYYYMM')) {
          return;
        }
      }

      this.createMonth(this.getNextMonth(firstDayOfLastMonth[0].date));

      this.activeMonthIndex++;
    }, 200),

    setCheckIn: function setCheckIn(date) {
      this.checkIn = date;
    },
    setCheckOut: function setCheckOut(date) {
      this.checkOut = date;
    },
    getDay: function getDay(date) {
      return _fecha2.default.format(date, 'D');
    },
    getMonth: function getMonth(date) {
      return this.i18n["month-names"][_fecha2.default.format(date, 'M') - 1] + (this.showYear ? _fecha2.default.format(date, ' YYYY') : '');
    },
    createMonth: function createMonth(date) {
      var firstDay = this.getFirstDay(date, this.firstDayOfWeek);
      var month = {
        days: []
      };

      for (var i = 0; i < 42; i++) {
        month.days.push({
          date: this.addDays(firstDay, i),
          belongsToThisMonth: this.addDays(firstDay, i).getMonth() === date.getMonth(),
          isInRange: false
        });
      }
      this.months.push(month);
    },
    parseDisabledDates: function parseDisabledDates() {
      var sortedDates = [];

      for (var i = 0; i < this.disabledDates.length; i++) {
        sortedDates[i] = new Date(this.disabledDates[i]);
      }

      sortedDates.sort(function (a, b) {
        return a - b;
      });

      this.sortedDisabledDates = sortedDates;
    }
  }),

  beforeMount: function beforeMount() {
    _fecha2.default.i18n = {
      dayNames: this.i18n['day-names'],
      dayNamesShort: this.shortenString(this.i18n['day-names'], 3),
      monthNames: this.i18n['month-names'],
      monthNamesShort: this.shortenString(this.i18n['month-names'], 3),
      amPm: ['am', 'pm'],

      DoFn: function DoFn(D) {
        return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
      }
    };
    if (this.checkIn && (this.getMonthDiff(this.getNextMonth(new Date(this.startDate)), this.checkIn) > 0 || this.getMonthDiff(this.startDate, this.checkIn) > 0)) {
      this.createMonth(new Date(this.startDate));
      var count = this.getMonthDiff(this.startDate, this.checkIn);
      var nextMonth = new Date(this.startDate);
      for (var i = 0; i <= count; i++) {
        var tempNextMonth = this.getNextMonth(nextMonth);
        this.createMonth(tempNextMonth);
        nextMonth = tempNextMonth;
      }
      if (this.checkOut && this.getMonthDiff(this.checkIn, this.checkOut) > 0) {
        this.createMonth(this.getNextMonth(nextMonth));
        this.activeMonthIndex = 1;
      }
      this.activeMonthIndex += count;
    } else {
      this.createMonth(new Date(this.startDate));
      this.createMonth(this.getNextMonth(new Date(this.startDate)));
    }
    this.parseDisabledDates();
  },
  mounted: function mounted() {
    var _this3 = this;

    document.addEventListener('touchstart', this.handleTouchStart, false);
    document.addEventListener('touchmove', this.handleTouchMove, false);
    window.addEventListener('resize', this.handleWindowResize);

    this.onElementHeightChange(document.body, function () {
      _this3.emitHeighChangeEvent();
    });
  },
  destroyed: function destroyed() {
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('resize', this.handleWindowResize);
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(27);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(11);
var defined = __webpack_require__(12);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
  'use strict';

  /**
   * Parse or format dates
   * @class fecha
   */
  var fecha = {};
  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm;
  var noop = function () {
  };

  function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };

  var formatFlags = {
    D: function(dateObj) {
      return dateObj.getDate();
    },
    DD: function(dateObj) {
      return pad(dateObj.getDate());
    },
    Do: function(dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate());
    },
    d: function(dateObj) {
      return dateObj.getDay();
    },
    dd: function(dateObj) {
      return pad(dateObj.getDay());
    },
    ddd: function(dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function(dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()];
    },
    M: function(dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function(dateObj) {
      return pad(dateObj.getMonth() + 1);
    },
    MMM: function(dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function(dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function(dateObj) {
      return String(dateObj.getFullYear()).substr(2);
    },
    YYYY: function(dateObj) {
      return pad(dateObj.getFullYear(), 4);
    },
    h: function(dateObj) {
      return dateObj.getHours() % 12 || 12;
    },
    hh: function(dateObj) {
      return pad(dateObj.getHours() % 12 || 12);
    },
    H: function(dateObj) {
      return dateObj.getHours();
    },
    HH: function(dateObj) {
      return pad(dateObj.getHours());
    },
    m: function(dateObj) {
      return dateObj.getMinutes();
    },
    mm: function(dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function(dateObj) {
      return dateObj.getSeconds();
    },
    ss: function(dateObj) {
      return pad(dateObj.getSeconds());
    },
    S: function(dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function(dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function(dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    },
    a: function(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function(dateObj) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };

  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    YY: [twoDigits, function (d, v) {
      var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    d: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      var val = v.toLowerCase();
      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.dd = parseFlags.d;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.DD = parseFlags.D;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;


  // Some common format strings
  fecha.masks = {
    default: 'ddd MMM DD YYYY HH:mm:ss',
    shortDate: 'M/D/YY',
    mediumDate: 'MMM D, YYYY',
    longDate: 'MMMM D, YYYY',
    fullDate: 'dddd, MMMM D, YYYY',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };

  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */
  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];

    var literals = [];

    // Make literals inactive by replacing them with ??
    mask = mask.replace(literal, function($0, $1) {
      literals.push($1);
      return '??';
    });
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/\?\?/g, function() {
      return literals.shift();
    });
  };

  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */
  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format;

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        var index = dateStr.search(info[0]);
        if (!~index) {
          isValid = false;
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n);
            dateStr = dateStr.substr(index + result.length);
            return result;
          });
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
      return false;
    }

    var today = new Date();
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;
    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }
    return date;
  };

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return fecha;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    main.fecha = fecha;
  }
})(this);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _fecha = __webpack_require__(14);

var _fecha2 = _interopRequireDefault(_fecha);

var _helpers = __webpack_require__(16);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Day',

  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    sortedDisabledDates: {
      type: Array
    },
    options: {
      type: Object
    },
    checkIn: {
      type: Date
    },
    checkOut: {
      type: Date
    },
    hoveringDate: {
      type: Date
    },
    mounseOverFunction: {
      type: Function
    },
    belongsToThisMonth: {
      type: Boolean
    },
    activeMonthIndex: {
      type: Number
    },
    date: {
      type: Date
    },
    dayNumber: {
      type: String
    },
    nextDisabledDate: {
      type: [Date, Number, String]
    },
    hoveringTooltip: {
      default: true,
      type: Boolean
    },
    tooltipMessage: {
      default: null,
      type: String
    },
    currentDateStyle: {
      required: true
    }
  },

  data: function data() {
    return {
      isHighlighted: false,
      isDisabled: false,
      allowedCheckoutDays: [],
      currentDate: new Date()
    };
  },


  computed: {
    tabIndex: function tabIndex() {
      if (!this.isOpen || !this.belongsToThisMonth || this.isDisabled || !this.isClickable()) {
        return -1;
      }
      return 0;
    },
    nightsCount: function nightsCount() {
      return this.countDays(this.checkIn, this.hoveringDate);
    },
    tooltipMessageDisplay: function tooltipMessageDisplay() {
      return this.tooltipMessage ? this.tooltipMessage : this.nightsCount + ' ' + (this.nightsCount !== 1 ? this.options.i18n['nights'] : this.options.i18n['night']);
    },
    showTooltip: function showTooltip() {
      return !this.isDisabled && this.date == this.hoveringDate && this.checkIn !== null && this.checkOut == null;
    },
    isToday: function isToday() {
      return this.compareDay(this.currentDate, this.date) == 0;
    },
    dayClass: function dayClass() {
      var _this = this;

      if (this.belongsToThisMonth) {
        if (!this.isDisabled && this.compareDay(this.date, this.checkIn) == 1 && this.options.minNights > 0 && this.compareDay(this.date, this.addDays(this.checkIn, this.options.minNights)) == -1) {
          return 'datepicker__month-day--selected datepicker__month-day--out-of-range';
        }

        if (this.options.allowedRanges.length !== 0) {
          if (!this.isDisabled && this.checkIn !== null && this.checkOut == null) {
            if (this.allowedCheckoutDays.some(function (i) {
              return _this.compareDay(i, _this.date) == 0 && !_this.isHighlighted;
            })) {
              return 'datepicker__month-day--allowed-checkout';
            }

            if (this.allowedCheckoutDays.some(function (i) {
              return _this.compareDay(i, _this.date) == 0 && _this.isHighlighted;
            })) {
              return 'datepicker__month-day--selected datepicker__month-day--allowed-checkout';
            }

            if (!this.allowedCheckoutDays.some(function (i) {
              return _this.compareDay(i, _this.date) == 0;
            }) && this.isHighlighted) {
              return 'datepicker__month-day--out-of-range datepicker__month-day--selected';
            } else {
              return 'datepicker__month-day--out-of-range';
            }
          }
        }

        if (this.checkIn !== null && _fecha2.default.format(this.checkIn, 'YYYYMMDD') == _fecha2.default.format(this.date, 'YYYYMMDD')) {
          if (this.options.minNights == 0) {
            return "datepicker__month-day--first-day-selected";
          } else {
            return "datepicker__month-day--disabled datepicker__month-day--first-day-selected";
          }
        }
        if (this.checkOut !== null) {
          if (_fecha2.default.format(this.checkOut, 'YYYYMMDD') == _fecha2.default.format(this.date, 'YYYYMMDD')) {
            return "datepicker__month-day--disabled datepicker__month-day--last-day-selected";
          }
        }

        if (this.isHighlighted && !this.isDisabled) {
          return " datepicker__month-day--selected";
        }
        if (this.isDisabled) {
          return "datepicker__month-day--disabled";
        }
      } else if (!this.belongsToThisMonth) {
        return "datepicker__month-day--hidden";
      } else {
        return "datepicker__month-day--valid";
      }
    }
  },

  watch: {
    hoveringDate: function hoveringDate(date) {
      if (this.checkIn !== null && this.checkOut == null && this.isDisabled == false) {
        this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.hoveringDate) ? this.isHighlighted = true : this.isHighlighted = false;
      }
      if (this.checkIn !== null && this.checkOut == null && this.allowedCheckoutDays.length !== 0) {}
    },
    activeMonthIndex: function activeMonthIndex(index) {
      this.checkIfDisabled();
      this.checkIfHighlighted();
      if (this.checkIn !== null && this.checkOut !== null) {
        this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut) ? this.isHighlighted = true : this.isHighlighted = false;
      } else if (this.checkIn !== null && this.checkOut == null) {
        this.disableNextDays();
      } else {
        return;
      }
    },
    nextDisabledDate: function nextDisabledDate() {
      this.disableNextDays();
    },
    checkIn: function checkIn(date) {
      this.createAllowedCheckoutDays(date);
    }
  },

  methods: (0, _extends3.default)({}, _helpers2.default, {
    isClickable: function isClickable() {
      if (this.$refs && this.$refs.day) {
        return getComputedStyle(this.$refs.day).pointerEvents !== 'none';
      } else {
        return true;
      }
    },
    compareDay: function compareDay(day1, day2) {
      var date1 = _fecha2.default.format(new Date(day1), 'YYYYMMDD');
      var date2 = _fecha2.default.format(new Date(day2), 'YYYYMMDD');

      if (date1 > date2) {
        return 1;
      } else if (date1 == date2) {
        return 0;
      } else if (date1 < date2) {
        return -1;
      }
    },
    dayClicked: function dayClicked(date) {
      if (this.isDisabled || !this.isClickable()) {
        return;
      } else {
        if (this.options.allowedRanges.length !== 0) {
          this.createAllowedCheckoutDays(date);
        }

        var nextDisabledDate = (this.options.maxNights ? this.addDays(this.date, this.options.maxNights) : null) || this.allowedCheckoutDays[this.allowedCheckoutDays.length - 1] || this.getNextDate(this.sortedDisabledDates, this.date) || this.nextDateByDayOfWeekArray(this.options.disabledDaysOfWeek, this.date) || Infinity;

        if (this.options.enableCheckout) {
          nextDisabledDate = Infinity;
        }

        this.$emit('day-clicked', { date: date, nextDisabledDate: nextDisabledDate });
      }
    },
    compareEndDay: function compareEndDay() {
      if (this.options.endDate !== Infinity) {
        return this.compareDay(this.date, this.options.endDate) == 1;
      }
    },
    checkIfDisabled: function checkIfDisabled() {
      var _this2 = this;

      this.isDisabled = (this.sortedDisabledDates ? this.sortedDisabledDates.some(function (i) {
        return _this2.compareDay(i, _this2.date) == 0;
      }) : null) || this.compareDay(this.date, this.options.startDate) == -1 || this.compareEndDay() || this.options.disabledDaysOfWeek.some(function (i) {
        return i == _fecha2.default.format(_this2.date, 'dddd');
      });

      if (this.options.enableCheckout) {
        if (this.compareDay(this.date, this.checkIn) == 1 && this.compareDay(this.date, this.checkOut) == -1) {
          this.isDisabled = false;
        }
      }
    },
    checkIfHighlighted: function checkIfHighlighted() {
      if (this.checkIn !== null && this.checkOut !== null && this.isDisabled == false) {
        this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut) ? this.isHighlighted = true : this.isHighlighted = false;
      }
    },
    createAllowedCheckoutDays: function createAllowedCheckoutDays(date) {
      var _this3 = this;

      this.allowedCheckoutDays = [];
      this.options.allowedRanges.forEach(function (i) {
        return _this3.allowedCheckoutDays.push(_this3.addDays(date, i));
      });
      this.allowedCheckoutDays.sort(function (a, b) {
        return a - b;
      });
    },
    disableNextDays: function disableNextDays() {
      if (!this.isDateLessOrEquals(this.date, this.nextDisabledDate) && this.nextDisabledDate !== Infinity) {
        this.isDisabled = true;
      } else if (this.isDateLessOrEquals(this.date, this.checkIn)) {
        this.isDisabled = true;
      }
      if (this.compareDay(this.date, this.checkIn) == 0 && this.options.minNights == 0) {
        this.isDisabled = false;
      }
      if (this.isDateLessOrEquals(this.checkIn, this.date) && this.options.enableCheckout) {
        this.isDisabled = false;
      } else {
        return;
      }
    }
  }),

  beforeMount: function beforeMount() {
    this.checkIfDisabled();
    this.checkIfHighlighted();
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getNextDate: function getNextDate(datesArray, referenceDate) {
    var now = new Date(referenceDate);
    var closest = Infinity;

    datesArray.forEach(function (d) {
      var date = new Date(d);
      if (date >= now && date < closest) {
        closest = d;
      }
    });

    if (closest === Infinity) {
      return null;
    } else {
      return closest;
    }
  },
  nextDateByDayOfWeek: function nextDateByDayOfWeek(weekDay, referenceDate) {
    referenceDate = new Date(referenceDate);
    weekDay = weekDay.toLowerCase();
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var referenceDateDay = referenceDate.getDay();

    for (var i = 7; i--;) {
      if (weekDay === days[i]) {
        weekDay = i <= referenceDateDay ? i + 7 : i;
        break;
      }
    }

    var daysUntilNext = weekDay - referenceDateDay;

    return referenceDate.setDate(referenceDate.getDate() + daysUntilNext);
  },
  nextDateByDayOfWeekArray: function nextDateByDayOfWeekArray(daysArray, referenceDate) {
    var tempArray = [];
    for (var i = 0; i < daysArray.length; i++) {
      tempArray.push(new Date(this.nextDateByDayOfWeek(daysArray[i], referenceDate)));
    }
    return this.getNextDate(tempArray, referenceDate);
  },
  isDateLessOrEquals: function isDateLessOrEquals(time1, time2) {
    return new Date(time1) <= new Date(time2);
  },
  countDays: function countDays(start, end) {
    var oneDay = 24 * 60 * 60 * 1000;
    var firstDate = new Date(start);
    var secondDate = new Date(end);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
  },
  addDays: function addDays(date, quantity) {
    var result = new Date(date);
    result.setDate(result.getDate() + quantity);
    return result;
  },
  getFirstDay: function getFirstDay(date, firstDayOfWeek) {
    var firstDay = this.getFirstDayOfMonth(date);
    var offset = 0;
    if (firstDayOfWeek > 0) {
      offset = firstDay.getDay() === 0 ? -7 + firstDayOfWeek : firstDayOfWeek;
    }
    return new Date(firstDay.setDate(firstDay.getDate() - (firstDay.getDay() - offset)));
  },
  getFirstDayOfMonth: function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  },
  getNextMonth: function getNextMonth(date) {
    var nextMonth = void 0;

    if (date.getMonth() == 11) {
      nextMonth = new Date(date.getFullYear() + 1, 0, 1);
    } else {
      nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    return nextMonth;
  },
  swipeAfterScroll: function swipeAfterScroll(direction) {
    if (this.screenSize !== 'desktop' && this.isOpen) {
      var swiperWrapper = document.getElementById('swiperWrapper');

      if (swiperWrapper.scrollHeight > swiperWrapper.clientHeight) {
        if (swiperWrapper.scrollTop === swiperWrapper.scrollHeight - swiperWrapper.offsetHeight) {
          this.renderNextMonth();
        } else if (swiperWrapper.scrollTop === 0) {
          this.renderPreviousMonth();
        } else {
          return;
        }
      } else if (direction == 'up') {
        this.renderNextMonth();
      } else if (direction == 'down') {
        this.renderPreviousMonth();
      }
    }
  },
  handleTouchStart: function handleTouchStart(evt) {
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
  },
  getMonthDiff: function getMonthDiff(d1, d2) {
    d1 = new Date(d1);
    d2 = new Date(d2);
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  },
  handleTouchMove: function handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    this.xUp = evt.touches[0].clientX;
    this.yUp = evt.touches[0].clientY;

    var xDiff = this.xDown - this.xUp;
    var yDiff = this.yDown - this.yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {} else {}
    } else {
      if (yDiff > 0) {
        this.swipeAfterScroll('up');
      } else {
        this.swipeAfterScroll('down');
      }
    }
    this.xDown = null;
    this.yDown = null;
  },
  shortenString: function shortenString(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    inputDate: {
      type: String,
      default: null
    },
    inputDateType: {
      type: String,
      default: 'check-in'
    },
    singleDaySelection: {
      type: Boolean,
      default: false
    },
    toggleDatepicker: {
      type: Function,
      required: true
    },
    showDatepicker: {
      type: Function,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    }
  },

  computed: {
    inputClass: function inputClass() {
      return {
        'datepicker__input--is-active': this.isOpen && this.inputDate == null,
        'datepicker__input--single-date': this.singleDaySelection
      };
    },
    tabIndex: function tabIndex() {
      return this.inputDateType === 'check-in' ? 0 : -1;
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a76e93e8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_DatePicker_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a76e93e8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_DatePicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DatePicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a76e93e8", Component.options)
  } else {
    hotAPI.reload("data-v-a76e93e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(25).default
var update = add("800a098c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a76e93e8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?minimize?{discardComments:{removeAll:true}}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatePicker.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a76e93e8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?minimize?{discardComments:{removeAll:true}}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatePicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(21);
exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n.square{width:14.28571%;float:left\n}\n@media screen and (min-width:768px){\n.square{cursor:pointer\n}\n}\n.datepicker__wrapper *,.datepicker__wrapper :after,.datepicker__wrapper :before{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.datepicker{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;background-color:#fff;color:#424b53;font-size:16px;line-height:14px;overflow:hidden;left:0;top:48px;position:absolute;z-index:999\n}\n.datepicker button.next--mobile{background:none;border:1px solid #d7d9e2;float:none;height:50px;width:100%;position:relative;background-position:50%;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden;position:fixed;bottom:0;left:0;outline:none;-webkit-box-shadow:0 5px 30px 10px rgba(0,0,0,.08);box-shadow:0 5px 30px 10px rgba(0,0,0,.08);background:#fff\n}\n.datepicker button.next--mobile:after{background:transparent url(" + escape(__webpack_require__(6)) + ") no-repeat 50%/8px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);content:\"\";position:absolute;width:200%;height:200%;top:-50%;left:-50%\n}\n.datepicker--closed{-webkit-box-shadow:0 15px 30px 10px transparent;box-shadow:0 15px 30px 10px transparent;max-height:0\n}\n.datepicker--open{-webkit-box-shadow:0 15px 30px 10px rgba(0,0,0,.08);box-shadow:0 15px 30px 10px rgba(0,0,0,.08);max-height:900px\n}\n@media screen and (max-width:767px){\n.datepicker--open{-webkit-box-shadow:none;box-shadow:none;height:100%;left:0;right:0;bottom:0;-webkit-overflow-scrolling:touch!important;position:fixed;top:0;width:100%\n}\n}\n.datepicker__wrapper{position:relative;display:inline-block;width:100%;height:48px;background:#fff url(" + escape(__webpack_require__(23)) + ") no-repeat 17px/16px\n}\n.datepicker__input{background:transparent;font-size:12px;outline:none;padding:4px 30px 2px;width:100%;word-spacing:5px;border:0\n}\n.datepicker__input:focus{outline:1px dashed #009775;outline-offset:-10px\n}\n.datepicker__input:-moz-placeholder,.datepicker__input:-ms-input-placeholder,.datepicker__input::-moz-placeholder,.datepicker__input::-webkit-input-placeholder{color:#35343d\n}\n.datepicker__dummy-wrapper{border:1px solid #d7d9e2;cursor:pointer;display:block;float:left;width:100%;height:100%\n}\n.datepicker__dummy-wrapper--no-border.datepicker__dummy-wrapper{margin-top:15px;border:0\n}\n.datepicker__dummy-wrapper--is-active{border:1px solid #00ca9d\n}\n.datepicker__input{color:#35343d;padding-top:0;font-size:14px;float:left;height:48px;line-height:3.1;text-align:left;text-indent:5px;width:calc(50% + 4px)\n}\n@media screen and (max-width:479px){\n.datepicker__input{text-indent:0;text-align:center\n}\n}\n.datepicker__input:first-child{background:transparent url(" + escape(__webpack_require__(24)) + ") no-repeat 100%/8px;width:calc(50% - 4px);text-indent:20px\n}\n.datepicker__input--is-active{color:#00ca9d\n}\n.datepicker__input--is-active::-webkit-input-placeholder{color:#00ca9d\n}\n.datepicker__input--is-active::-ms-input-placeholder{color:#00ca9d\n}\n.datepicker__input--is-active::placeholder{color:#00ca9d\n}\n.datepicker__input--is-active::-moz-placeholder{color:#00ca9d\n}\n.datepicker__input--is-active:-ms-input-placeholder{color:#00ca9d\n}\n.datepicker__input--is-active:-moz-placeholder{color:#00ca9d\n}\n.datepicker__input--single-date:first-child{width:100%;background:none;text-align:left\n}\n.datepicker__month-day{visibility:visible;text-align:center;margin:0;border:0;height:40px;padding-top:14px\n}\n.datepicker__month-day:focus{outline:1px dashed #009775;outline-offset:-10px\n}\n.datepicker__month-day--invalid-range{background-color:rgba(0,202,157,.3);color:#f3f5f8;cursor:not-allowed;position:relative\n}\n.datepicker__month-day--invalid{color:#f3f5f8;cursor:not-allowed\n}\n.datepicker__month-day--allowed-checkout:hover,.datepicker__month-day--valid:hover{background-color:#fff;color:#00ca9d;z-index:1;position:relative;-webkit-box-shadow:0 0 10px 3px rgba(66,75,83,.4);box-shadow:0 0 10px 3px rgba(66,75,83,.4)\n}\n.datepicker__month-day--disabled{opacity:.25;cursor:not-allowed;pointer-events:none;position:relative\n}\n.datepicker__month-day--selected{background-color:rgba(0,202,157,.5);color:#fff\n}\n.datepicker__month-day--selected:hover{background-color:#fff;color:#00ca9d;z-index:1;position:relative;-webkit-box-shadow:0 0 10px 3px rgba(66,75,83,.4);box-shadow:0 0 10px 3px rgba(66,75,83,.4)\n}\n.datepicker__month-day--first-day-selected,.datepicker__month-day--last-day-selected{background:#00ca9d;color:#fff;cursor:pointer;pointer-events:auto\n}\n.datepicker__month-day--allowed-checkout{color:#999\n}\n.datepicker__month-day--out-of-range{color:#f3f5f8;cursor:not-allowed;position:relative;pointer-events:none\n}\n.datepicker__month-day--valid{cursor:pointer;color:#999\n}\n.datepicker__month-day--hidden{opacity:.25;pointer-events:none;color:#fff\n}\n.datepicker__month-button{background:transparent url(" + escape(__webpack_require__(6)) + ") no-repeat 50%/8px;cursor:pointer;display:inline-block;height:60px;width:60px\n}\n.datepicker__month-button:focus{outline:1px dashed #009775;outline-offset:-10px\n}\n.datepicker__month-button--prev{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)\n}\n.datepicker__month-button--next{float:right\n}\n.datepicker__month-button--locked{opacity:.2;cursor:not-allowed;pointer-events:none\n}\n.datepicker__inner{padding:20px;float:left\n}\n@media screen and (max-width:767px){\n.datepicker__inner{padding:0\n}\n}\n@media screen and (min-width:768px){\n.datepicker__months{width:650px\n}\n}\n@media screen and (max-width:767px){\n.datepicker__months{margin-top:92px;height:calc(100% - 92px);position:absolute;left:0;top:0;overflow:scroll;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start\n}\n}\n.datepicker__months:before{background:#d7d9e2;bottom:0;content:\"\";display:block;left:50%;position:absolute;top:0;width:1px\n}\n@media screen and (max-width:767px){\n.datepicker__months:before{display:none\n}\n}\n.datepicker__month{font-size:12px;float:left;width:50%;padding-right:10px\n}\n@media screen and (max-width:767px){\n.datepicker__month{width:100%;padding-right:0;padding-top:60px\n}\n.datepicker__month:last-of-type{margin-bottom:65px\n}\n}\n@media screen and (min-width:768px){\n.datepicker__month:last-of-type{padding-right:0;padding-left:10px\n}\n}\n.datepicker__month-caption{height:2.5em;vertical-align:middle\n}\n.datepicker__month-name{font-size:16px;font-weight:500;margin-top:-40px;padding-bottom:17px;pointer-events:none;text-align:center\n}\n@media screen and (max-width:767px){\n.datepicker__month-name{margin-top:-25px;margin-bottom:0;position:absolute;width:100%\n}\n}\n.datepicker__week-days{height:2em;vertical-align:middle\n}\n.datepicker__week-row{border-bottom:5px solid #fff;height:38px\n}\n@media screen and (max-width:767px){\n.datepicker__week-row{-webkit-box-shadow:0 13px 18px -8px rgba(0,0,0,.07);box-shadow:0 13px 18px -8px rgba(0,0,0,.07);height:25px;left:0;top:65px;position:absolute;width:100%\n}\n}\n.datepicker__week-name{width:14.28571%;float:left;font-size:12px;font-weight:400;color:#999;text-align:center\n}\n.datepicker__close-button{color:#00ca9d;font-size:21px;margin-top:0;outline:0;z-index:10000;position:fixed;left:7px;top:5px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)\n}\n.datepicker__clear-button,.datepicker__close-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;cursor:pointer;font-weight:700\n}\n.datepicker__clear-button{font-size:25px;height:40px;margin:4px -2px 0 0;padding:0;position:absolute;right:0;top:0;width:40px\n}\n.datepicker__clear-button svg{fill:none;stroke-linecap:round;stroke-width:8px;stroke:#999;width:20px;width:14px;top:-3px;position:relative\n}\n.datepicker__clear-button:focus{outline:1px dashed #009775;outline-offset:-10px\n}\n.datepicker__tooltip{background-color:#2d3047;-webkit-border-radius:2px;border-radius:2px;color:#fff;font-size:11px;margin-left:5px;margin-top:-22px;padding:5px 10px;position:absolute;z-index:50\n}\n.datepicker__tooltip:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #2d3047;bottom:-4px;content:\"\";left:50%;margin-left:-4px;position:absolute\n}\n.-overflow-hidden{overflow:hidden\n}\n.-is-hidden{display:none\n}\n@media screen and (max-width:767px){\n.-hide-up-to-tablet{display:none\n}\n}\n@media screen and (min-width:768px){\n.-hide-on-desktop{display:none\n}\n}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNiAxOCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMTcuMzExaDE1Ljc1NFYuMTE1SDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLjE0OCkiPgogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzAwQ0E5RCIgZD0iTTE0LjQ2NSAxNi4yMTVIMS4yOWEuMTk2LjE5NiAwIDAgMS0uMTk0LS4xOTN2LTguNjloMTMuNTYydjguNjlhLjE5Ni4xOTYgMCAwIDEtLjE5My4xOTN6TTEuMjkgMi45NThoMS4wMTN2LjU2M2MwIC44MTcuNjY0IDEuNDgyIDEuNDgxIDEuNDgyLjgxOCAwIDEuNDgyLS42NjUgMS40ODItMS40ODJ2LS41NjNoNS4wNDZ2LjU2M2MwIC44MTcuNjY1IDEuNDgyIDEuNDgyIDEuNDgyczEuNDgyLS42NjUgMS40ODItMS40ODJ2LS41NjNoMS4xODljLjEwNSAwIC4xOTMuMDg5LjE5My4xOTN2My4xNDJIMS4wOTZWMy4xNTFjMC0uMTA0LjA4OS0uMTkzLjE5NC0uMTkzek0zLjM0IDEuNTk2YS40NDQuNDQ0IDAgMCAxIC44ODcgMHYxLjkyNWEuNDQ0LjQ0NCAwIDAgMS0uODg3IDBWMS41OTZ6bTguMDEgMGEuNDQ0LjQ0NCAwIDAgMSAuODg2IDB2MS45MjVhLjQ0NC40NDQgMCAwIDEtLjg4NyAwVjEuNTk2em0zLjExNC4yNjZoLTEuMTl2LS4yNjZjMC0uODE3LS42NjQtMS40ODItMS40ODEtMS40ODItLjgxNyAwLTEuNDgyLjY2NS0xLjQ4MiAxLjQ4MnYuMjY2SDUuMjY2di0uMjY2QzUuMjY2Ljc4IDQuNjAyLjExNCAzLjc4NC4xMTRjLS44MTcgMC0xLjQ4MS42NjUtMS40ODEgMS40ODJ2LjI2NkgxLjI5Qy41NzkgMS44NjIgMCAyLjQ0IDAgMy4xNTJ2MTIuODdjMCAuNzExLjU3OSAxLjI5IDEuMjkgMS4yOWgxMy4xNzVhMS4yOSAxLjI5IDAgMCAwIDEuMjktMS4yOVYzLjE1MmExLjI5IDEuMjkgMCAwIDAtMS4yOS0xLjI5eiIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBDQTlEIiBkPSJNMy4xOTQgMTAuOTk4aDEuMzU3VjkuNjQySDMuMTk0ek01Ljg2NCAxMC45OThoMS4zNTdWOS42NDJINS44NjR6TTguNTM0IDEwLjk5OEg5Ljg5VjkuNjQySDguNTM0ek0xMS4yMDQgMTAuOTk4aDEuMzU2VjkuNjQyaC0xLjM1NnpNMy4xOTQgMTMuOTRoMS4zNTd2LTEuMzU3SDMuMTk0ek01Ljg2NCAxMy45NGgxLjM1N3YtMS4zNTdINS44NjR6TTguNTM0IDEzLjk0SDkuODl2LTEuMzU3SDguNTM0ek0xMS4yMDQgMTMuOTRoMS4zNTZ2LTEuMzU3aC0xLjM1NnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgOCAxOCI+CiAgICA8cGF0aCBmaWxsPSIjOTU5OUFBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0uMTE5LjcxOGw3LjE1OCA3LjQwNy0uMDMzLS41NTEtNi43MzcgOC44ODlhLjQyNS40MjUgMCAwIDAgLjA4LjU5My40Mi40MiAwIDAgMCAuNTktLjA4bDYuNzM3LTguODg5YS40MjUuNDI1IDAgMCAwLS4wMzMtLjU1MUwuNzIzLjEyOEEuNDIuNDIgMCAwIDAgLjEyOC4xMmEuNDI1LjQyNSAwIDAgMC0uMDA5LjU5OHoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(26);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(30);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(40) });


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(31);
var hide = __webpack_require__(33);
var has = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(34);
var createDesc = __webpack_require__(39);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(35);
var IE8_DOM_DEFINE = __webpack_require__(36);
var toPrimitive = __webpack_require__(38);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(0);
var getKeys = __webpack_require__(41);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(53);
var toObject = __webpack_require__(54);
var IObject = __webpack_require__(11);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(51);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(44)(false);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(45);
var toAbsoluteIndex = __webpack_require__(46);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(13);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(48)('keys');
var uid = __webpack_require__(50);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(49) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(12);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['vue-on-click-outside'] = global['vue-on-click-outside'] || {})));
}(this, (function (exports) { 'use strict';

var registeredHandlers = [];
var domListener = void 0;

function on(el, event, callback) {
  el.addEventListener(event, callback, false);
  return { destroy: function destroy() {
      return el.removeEventListener(event, callback, false);
    } };
}

function dynamicStrategy(el, callback) {
  var hasMouseOver = false;
  var enterListener = on(el, 'mouseenter', function () {
    hasMouseOver = true;
  });
  var leaveListener = on(el, 'mouseleave', function () {
    hasMouseOver = false;
  });

  return {
    el: el,
    check: function check(event) {
      if (!hasMouseOver) {
        callback(event);
      }
    },
    destroy: function destroy() {
      enterListener.destroy();
      leaveListener.destroy();
    }
  };
}

function staticStrategy(el, callback) {
  return {
    el: el,
    check: function check(event) {
      if (!el.contains(event.target)) {
        callback(event);
      }
    },

    destroy: function destroy() {}
  };
}

function bind(el, binding) {
  var callback = binding.value,
      modifiers = binding.modifiers;

  // unbind any existing listeners first

  unbind(el);

  if (!domListener) {
    domListener = on(document.documentElement, 'click', function (event) {
      registeredHandlers.forEach(function (handler) {
        return handler.check(event);
      });
    });
  }

  setTimeout(function () {
    registeredHandlers.push(modifiers.static ? staticStrategy(el, callback) : dynamicStrategy(el, callback));
  }, 0);
}

function update(el, binding) {
  if (binding.value !== binding.oldValue) {
    bind(el, binding);
  }
}

function unbind(el) {
  var index = registeredHandlers.length - 1;

  while (index >= 0) {
    if (registeredHandlers[index].el === el) {
      registeredHandlers[index].destroy();
      registeredHandlers.splice(index, 1);
    }

    index -= 1;
  }

  if (registeredHandlers.length === 0 && domListener) {
    domListener.destroy();
    domListener = null;
  }
}

var directive = {
  bind: bind, unbind: unbind, update: update
};

var mixin = {
  directives: { 'on-click-outside': directive }
};

exports.directive = directive;
exports.mixin = mixin;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Day_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Day_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Day_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Day_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Day_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54db7b9c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Day_vue__ = __webpack_require__(59);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Day_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54db7b9c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Day_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Day.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54db7b9c", Component.options)
  } else {
    hotAPI.reload("data-v-54db7b9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.showTooltip && this.options.hoveringTooltip
      ? _c("div", {
          staticClass: "datepicker__tooltip",
          domProps: { innerHTML: _vm._s(_vm.tooltipMessageDisplay) }
        })
      : _vm._e(),
    _c("div", {
      ref: "day",
      staticClass: "datepicker__month-day",
      class: _vm.dayClass,
      style: _vm.isToday ? _vm.currentDateStyle : "",
      attrs: { tabindex: _vm.tabIndex },
      domProps: { textContent: _vm._s(_vm.dayNumber) },
      on: {
        click: function($event) {
          $event.preventDefault()
          $event.stopPropagation()
          return _vm.dayClicked(_vm.date)
        },
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          $event.preventDefault()
          $event.stopPropagation()
          return _vm.dayClicked(_vm.date)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-54db7b9c", esExports)
  }
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateInput_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateInput_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateInput_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateInput_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0f76288_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_DateInput_vue__ = __webpack_require__(61);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateInput_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0f76288_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_DateInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DateInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0f76288", Component.options)
  } else {
    hotAPI.reload("data-v-c0f76288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "datepicker__input",
    class: _vm.inputClass,
    attrs: { "data-qa": "datepickerInput", tabindex: _vm.tabIndex },
    domProps: {
      textContent: _vm._s(
        _vm.inputDate ? _vm.inputDate : _vm.i18n[_vm.inputDateType]
      )
    },
    on: {
      click: _vm.toggleDatepicker,
      keyup: function($event) {
        if (
          !$event.type.indexOf("key") &&
          _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
        ) {
          return null
        }
        $event.stopPropagation()
        $event.preventDefault()
        return _vm.toggleDatepicker($event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-c0f76288", esExports)
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        {
          directives: [
            {
              name: "on-click-outside",
              rawName: "v-on-click-outside",
              value: _vm.clickOutside,
              expression: "clickOutside"
            }
          ],
          staticClass: "datepicker__wrapper",
          on: { blur: _vm.clickOutside }
        },
        [
          _vm.isOpen
            ? _c(
                "div",
                {
                  staticClass: "datepicker__close-button -hide-on-desktop",
                  on: { click: _vm.hideDatepicker }
                },
                [_vm._v("＋")]
              )
            : _vm._e(),
          _c(
            "div",
            {
              staticClass: "datepicker__dummy-wrapper",
              class:
                "" + (_vm.isOpen ? "datepicker__dummy-wrapper--is-active" : "")
            },
            [
              _c("date-input", {
                attrs: {
                  i18n: _vm.i18n,
                  "input-date": _vm.formatDate(_vm.checkIn),
                  "input-date-type": "check-in",
                  "is-open": _vm.isOpen,
                  "show-datepicker": _vm.showDatepicker,
                  "hide-datepicker": _vm.hideDatepicker,
                  "toggle-datepicker": _vm.toggleDatepicker,
                  "single-day-selection": _vm.singleDaySelection
                }
              }),
              !_vm.singleDaySelection
                ? _c("date-input", {
                    attrs: {
                      i18n: _vm.i18n,
                      "input-date": _vm.formatDate(_vm.checkOut),
                      "input-date-type": "check-out",
                      "is-open": _vm.isOpen,
                      showDatepicker: _vm.showDatepicker,
                      "hide-datepicker": _vm.hideDatepicker,
                      "toggle-datepicker": _vm.toggleDatepicker,
                      "single-day-selection": _vm.singleDaySelection
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm.showClearSelectionButton
            ? _c(
                "div",
                {
                  staticClass: "datepicker__clear-button",
                  attrs: { tabindex: "0" },
                  on: { click: _vm.clearSelection }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 68 68"
                      }
                    },
                    [
                      _c("path", {
                        attrs: { d: "M6.5 6.5l55 55M61.5 6.5l-55 55" }
                      })
                    ]
                  )
                ]
              )
            : _vm._e(),
          _c(
            "div",
            {
              staticClass: "datepicker",
              class:
                "" + (_vm.isOpen ? "datepicker--open" : "datepicker--closed")
            },
            [
              _c("div", { staticClass: "-hide-on-desktop" }, [
                _vm.isOpen
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "datepicker__dummy-wrapper datepicker__dummy-wrapper--no-border",
                        class:
                          "" +
                          (_vm.isOpen
                            ? "datepicker__dummy-wrapper--is-active"
                            : ""),
                        on: { click: _vm.toggleDatepicker }
                      },
                      [
                        _c("div", {
                          staticClass: "datepicker__input",
                          class:
                            "" +
                            (_vm.isOpen && _vm.checkIn == null
                              ? "datepicker__dummy-input--is-active"
                              : ""),
                          attrs: { tabindex: "0", type: "button" },
                          domProps: {
                            textContent: _vm._s(
                              "" +
                                (_vm.checkIn
                                  ? _vm.formatDate(_vm.checkIn)
                                  : _vm.i18n["check-in"])
                            )
                          }
                        }),
                        _c("div", {
                          staticClass: "datepicker__input",
                          class:
                            "" +
                            (_vm.isOpen &&
                            _vm.checkOut == null &&
                            _vm.checkIn !== null
                              ? "datepicker__dummy-input--is-active"
                              : ""),
                          attrs: { tabindex: "0", type: "button" },
                          domProps: {
                            textContent: _vm._s(
                              "" +
                                (_vm.checkOut
                                  ? _vm.formatDate(_vm.checkOut)
                                  : _vm.i18n["check-out"])
                            )
                          }
                        })
                      ]
                    )
                  : _vm._e()
              ]),
              _c("div", { staticClass: "datepicker__inner" }, [
                _c("div", { staticClass: "datepicker__header" }, [
                  _c("span", {
                    staticClass:
                      "datepicker__month-button datepicker__month-button--prev -hide-up-to-tablet",
                    attrs: { tabindex: _vm.isOpen ? 0 : -1 },
                    on: {
                      click: _vm.renderPreviousMonth,
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        $event.stopPropagation()
                        $event.preventDefault()
                        return _vm.renderPreviousMonth($event)
                      }
                    }
                  }),
                  _c("span", {
                    staticClass:
                      "datepicker__month-button datepicker__month-button--next -hide-up-to-tablet",
                    attrs: { tabindex: _vm.isOpen ? 0 : -1 },
                    on: {
                      click: _vm.renderNextMonth,
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        $event.stopPropagation()
                        $event.preventDefault()
                        return _vm.renderNextMonth($event)
                      }
                    }
                  })
                ]),
                _vm.screenSize === "desktop"
                  ? _c(
                      "div",
                      { staticClass: "datepicker__months" },
                      _vm._l([0, 1], function(n) {
                        return _c(
                          "div",
                          { key: n, staticClass: "datepicker__month" },
                          [
                            _c("p", {
                              staticClass: "datepicker__month-name",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.getMonth(
                                    _vm.months[_vm.activeMonthIndex + n]
                                      .days[15].date
                                  )
                                )
                              }
                            }),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "datepicker__week-row -hide-up-to-tablet"
                              },
                              _vm._l(_vm.i18n["day-names"], function(dayName) {
                                return _c("div", {
                                  staticClass: "datepicker__week-name",
                                  domProps: { textContent: _vm._s(dayName) }
                                })
                              }),
                              0
                            ),
                            _vm._l(
                              _vm.months[_vm.activeMonthIndex + n].days,
                              function(day) {
                                return _c(
                                  "div",
                                  {
                                    staticClass: "square",
                                    on: {
                                      mouseover: function($event) {
                                        _vm.hoveringDate = day.date
                                      }
                                    }
                                  },
                                  [
                                    _c("Day", {
                                      attrs: {
                                        "is-open": _vm.isOpen,
                                        options: _vm.$props,
                                        date: day.date,
                                        sortedDisabledDates:
                                          _vm.sortedDisabledDates,
                                        nextDisabledDate: _vm.nextDisabledDate,
                                        activeMonthIndex: _vm.activeMonthIndex,
                                        hoveringDate: _vm.hoveringDate,
                                        tooltipMessage: _vm.tooltipMessage,
                                        dayNumber: _vm.getDay(day.date),
                                        belongsToThisMonth:
                                          day.belongsToThisMonth,
                                        checkIn: _vm.checkIn,
                                        checkOut: _vm.checkOut,
                                        currentDateStyle: _vm.currentDateStyle
                                      },
                                      on: {
                                        "day-clicked": function($event) {
                                          return _vm.handleDayClick($event)
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              }
                            )
                          ],
                          2
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm.screenSize !== "desktop" && _vm.isOpen
                  ? _c("div", [
                      _c(
                        "div",
                        { staticClass: "datepicker__week-row" },
                        _vm._l(this.i18n["day-names"], function(dayName) {
                          return _c("div", {
                            staticClass: "datepicker__week-name",
                            domProps: { textContent: _vm._s(dayName) }
                          })
                        }),
                        0
                      ),
                      _c(
                        "div",
                        {
                          staticClass: "datepicker__months",
                          attrs: { id: "swiperWrapper" }
                        },
                        [
                          _vm._l(_vm.months, function(a, n) {
                            return _c(
                              "div",
                              { key: n, staticClass: "datepicker__month" },
                              [
                                _c("p", {
                                  staticClass: "datepicker__month-name",
                                  domProps: {
                                    textContent: _vm._s(
                                      _vm.getMonth(_vm.months[n].days[15].date)
                                    )
                                  }
                                }),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "datepicker__week-row -hide-up-to-tablet"
                                  },
                                  _vm._l(_vm.i18n["day-names"], function(
                                    dayName
                                  ) {
                                    return _c("div", {
                                      staticClass: "datepicker__week-name",
                                      domProps: { textContent: _vm._s(dayName) }
                                    })
                                  }),
                                  0
                                ),
                                _vm._l(_vm.months[n].days, function(
                                  day,
                                  index
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: index,
                                      staticClass: "square",
                                      on: {
                                        mouseover: function($event) {
                                          _vm.hoveringDate = day.date
                                        },
                                        focus: function($event) {
                                          _vm.hoveringDate = day.date
                                        }
                                      }
                                    },
                                    [
                                      _c("Day", {
                                        attrs: {
                                          "is-open": _vm.isOpen,
                                          options: _vm.$props,
                                          date: day.date,
                                          sortedDisabledDates:
                                            _vm.sortedDisabledDates,
                                          nextDisabledDate:
                                            _vm.nextDisabledDate,
                                          activeMonthIndex:
                                            _vm.activeMonthIndex,
                                          hoveringDate: _vm.hoveringDate,
                                          tooltipMessage: _vm.tooltipMessage,
                                          dayNumber: _vm.getDay(day.date),
                                          belongsToThisMonth:
                                            day.belongsToThisMonth,
                                          checkIn: _vm.checkIn,
                                          checkOut: _vm.checkOut,
                                          currentDateStyle: _vm.currentDateStyle
                                        },
                                        on: {
                                          "day-clicked": function($event) {
                                            return _vm.handleDayClick($event)
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                })
                              ],
                              2
                            )
                          }),
                          _c("div", {
                            staticClass: "next--mobile",
                            attrs: { type: "button" },
                            on: { click: _vm.renderNextMonth }
                          })
                        ],
                        2
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a76e93e8", esExports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-hotel-datepicker.js.map