webpackHotUpdate("static\\development\\pages\\explore.js",{

/***/ "./pages/explore.jsx":
/*!***************************!*\
  !*** ./pages/explore.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_simple_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-simple-sidenav */ "./node_modules/react-simple-sidenav/dist/simple-sidenav.js");
/* harmony import */ var react_simple_sidenav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_sidenav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "F:\\newtemplate\\pages\\explore.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var renderRestaurantInfo = function renderRestaurantInfo(props) {
  console.log("TRAILS", props.result.restaurants[0].restaurant); //   if(this.props.trails.trails){
  // //     const trail= props.result.restaurants.map(t => {
  // //       return(
  // //           <div className="card" style={{width: 30 + 'rem' }}>
  // //             <img className="card-img-top" src={t.featured_image} />
  // //               <div className="card-body">
  // //                 <h1 className="card-title">{t.name}</h1>
  // //                   <h2 className="card-text">{t.location.address} </h2>
  // //                     <h4 className="card-text">{t.timings} </h4>
  // // <ul className="list-group list-group-flush">
  // //             <li className="list-group-item">Cusines: {t.cuisines}</li>
  // //             <li className="list-group-item">currency: {t.currency} miles</li>
  // //             <li className="list-group-item">has_online_delivery {t.has_online_delivery} ft, Descent: {t.has_online_delivery} ft</li>
  // //             <li className="list-group-item">price_range: {t.price_range}, {t.price_range} </li>
  // //
  // //             </ul>
  // //             </div>
  // //         </div>
  // //       )
  // //     })

  return __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "hello");
};

renderRestaurantInfo.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, url, res, result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            url = "https://developers.zomato.com/api/v2.1/search?collection_id=".concat(query.cid);
            _context.next = 4;
            return fetch(url, {
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
            return _context.abrupt("return", {
              result: result
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (renderRestaurantInfo);

/***/ })

})
//# sourceMappingURL=explore.js.efd82cdb5d41af6918c5.hot-update.js.map