module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/restaurantByCollection.jsx":
/*!******************************************!*\
  !*** ./pages/restaurantByCollection.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_simple_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-sidenav */ "react-simple-sidenav");
/* harmony import */ var react_simple_sidenav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simple_sidenav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\newtemplate\\pages\\restaurantByCollection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const renderRestaurantInfo = props => {
  console.log("TRAILS", props.result.restaurants[0].restaurant);
  let style = {
    width: "300px",
    height: "300px",
    margin: "10px 10px 10px 10px",
    backgroundColor: "white"
  };
  const restaurants = props.result.restaurants.map(t => {
    return __jsx("div", {
      className: "card",
      style: {
        width: 30 + "rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, __jsx("img", {
      className: "card-img-top",
      src: t.restaurant.featured_image,
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }), __jsx("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, __jsx("h1", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, t.restaurant.name), __jsx("h4", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, t.timings, " "), __jsx("ul", {
      className: "list-group list-group-flush",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, __jsx("li", {
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, "Cusines: ", t.cuisines), __jsx("li", {
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "currency: ", t.currency, " miles"), __jsx("li", {
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, "has_online_delivery ", t.has_online_delivery, " ft, Descent:", " ", t.has_online_delivery, " ft"), __jsx("li", {
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, "price_range: ", t.price_range, ", ", t.price_range, " "))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(react_simple_sidenav__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("div", {
    className: "row",
    style: {
      margin: "10px 10px 10px 10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, restaurants));
};

renderRestaurantInfo.getInitialProps = async function ({
  query
}) {
  const url = `https://developers.zomato.com/api/v2.1/search?collection_id=${query.cid}`;
  const res = await fetch(url, {
    headers: {
      "user-key": "477646bb6cbda47c85e1f1fb90afb556",
      Accept: "application/json"
    }
  });
  const result = await res.json();
  console.log("result", result);
  return {
    result
  };
};

/* harmony default export */ __webpack_exports__["default"] = (renderRestaurantInfo);

/***/ }),

/***/ 4:
/*!************************************************!*\
  !*** multi ./pages/restaurantByCollection.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\newtemplate\pages\restaurantByCollection.jsx */"./pages/restaurantByCollection.jsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-simple-sidenav":
/*!***************************************!*\
  !*** external "react-simple-sidenav" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-sidenav");

/***/ })

/******/ });
//# sourceMappingURL=restaurantByCollection.js.map