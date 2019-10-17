webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_collectionHolder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/collectionHolder */ "./components/collectionHolder.jsx");










var _jsxFileName = "F:\\newtemplate\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, IndexPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(IndexPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handlechange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
        var val, url, res, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                val = event.target.value;
                url = "https://developers.zomato.com/api/v2.1/collections?city_id=".concat(val);
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()(url, {
                  headers: {
                    "user-key": "477646bb6cbda47c85e1f1fb90afb556",
                    Accept: "application/json"
                  }
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                result = _context.sent;
                console.log("result", result);

                if (result != null) {
                  _this.setState({
                    collectionsUI: true,
                    val: result
                  });

                  console.log("Indexpage state", _this.state.val); // console.log(
                  //   "state values",
                  //   this.state.collectionsUI,
                  //   this.state.values.collections
                  // );
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "createImage", function (collectionsResponse) {
      return __jsx(_components_collectionHolder__WEBPACK_IMPORTED_MODULE_13__["default"], {
        image_url: collectionsResponse.collection.image_url,
        title: collectionsResponse.collection.title,
        description: collectionsResponse.collection.description,
        key: collectionsResponse.collection.image_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "createImages", function (images) {
      return images.map(_this.createImage);
    });

    _this.state = {
      collectionsUI: false,
      val: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(IndexPage, [{
    key: "render",
    value: function render() {
      var style = {
        backgroundImage: "url(/static/assets/template/listed/images/hero_1.jpg)",
        backgroundPosition: "50% -61.5px"
      };
      {
        var catItem = this.props[0].categories.map(function (cat) {
          return __jsx("option", {
            key: cat.categories.id,
            value: cat.categories.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, cat.categories.name);
        });
      }
      var locItem = this.props[1].location_suggestions.map(function (cat) {
        return __jsx("option", {
          value: cat.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, cat.name);
      });
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        className: "site-blocks-cover overlay",
        style: style,
        "data-stellar-background-ratio": "0.5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center justify-content-center text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("div", {
        className: "row justify-content-center mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-8 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.props.data, "Find Nearby", __jsx("span", {
        className: "typed-words",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), __jsx("p", {
        "data-aos-delay": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Explore top-rated attractions, activities and more!"))), __jsx("div", {
        className: "form-search-wrap p-2",
        "data-aos-delay": "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("form", {
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-12 col-xl-4 no-sm-border border-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: "wrap-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("select", {
        className: "form-control",
        name: "",
        id: "",
        onChange: this.handlechange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, locItem), __jsx("span", {
        className: "icon icon-room",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }))), __jsx("div", {
        className: "col-lg-12 col-xl-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("div", {
        className: "select-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("span", {
        className: "icon-keyboard_arrow_down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })), __jsx("select", {
        className: "form-control",
        name: "",
        id: "",
        onChange: this.handlechange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, catItem))), __jsx("div", {
        className: "col-lg-12 col-xl-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("div", {
        className: "select-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("span", {
        className: "icon-keyboard_arrow_down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), __jsx("select", {
        className: "form-control",
        name: "",
        id: "",
        onChange: this.handlechange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }))), __jsx("div", {
        className: "col-lg-12 col-xl-2 ml-auto text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx("input", {
        type: "submit",
        className: "btn btn-primary",
        value: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }))))))))), this.state.collectionsUI && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("div", {
        className: "row justify-content-center mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-7 text-center border-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("h2", {
        className: "font-weight-light text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Most Visited Places")))), __jsx("div", {
        className: "row justify-content-center mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, this.createImages(this.state.val.collections))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var response1, response2, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://developers.zomato.com/api/v2.1/categories", {
                  headers: {
                    "user-key": "477646bb6cbda47c85e1f1fb90afb556",
                    Accept: "application/json"
                  }
                });

              case 2:
                response1 = _context2.sent;
                _context2.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://developers.zomato.com/api/v2.1/cities?city_ids=280%2C281%2C282%2C283%2C284%2C285%2C286%2C287%2C288%2C289%2C290", {
                  headers: {
                    "user-key": "477646bb6cbda47c85e1f1fb90afb556",
                    Accept: "application/json"
                  }
                });

              case 5:
                response2 = _context2.sent;
                _context2.next = 8;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([response1.json(), response2.json()]);

              case 8:
                result = _context2.sent;
                console.log("response array", result);
                return _context2.abrupt("return", result);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.923e840ab06e3507988f.hot-update.js.map