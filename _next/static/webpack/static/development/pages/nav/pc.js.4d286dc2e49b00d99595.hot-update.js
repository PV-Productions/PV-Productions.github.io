webpackHotUpdate("static\\development\\pages\\nav\\pc.js",{

/***/ "./components/navbar/PC.js":
/*!*********************************!*\
  !*** ./components/navbar/PC.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PC; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\NextProjects\\ICIPpro\\components\\navbar\\PC.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function PC() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      wWidth = _React$useState2[0],
      setwWidth = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setwWidth(window.innerWidth);
  });
  return __jsx("div", {
    className: "wrapper",
    style: {
      width: wWidth > 560 ? "80vw" : "100vw",
      "float": "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      height: "50vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "List of Programme Committees"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "David Kahaner,AIIP, Japan P Sreenivas Kumar, IITM, India Sajal K Das, UTA, USA Sharad Purohit, CDAC, India K Sivarajan, Tejas Networks, India Kentaro Toyama, Microsoft, India Vittal Rao, NSF, USA Ravikiran A, IEEE Region 10 B P Sinha, ISI, Kolkataka, India Rammohanrao Kotagiri, Australia Rajeev Shorey, General Motors, India Asok K Talukdar, IIIB, India Dinesh K Anvekar, Honeywell, India Bhanu Prasad, Florida, USA M Srinivas, Mentor Graphics, India Rajib Mall, IIT Kharagpur, India Bharat Jayaraman, UB, USA Bindhumadhav, IEEE Bangalore Section J Mohan Kumar, UTA, USA Y V S Laxmi, CDoT, India Tomio Hirata, Japan Takao Nishizeki, Japan G Shivakumar, IIT Mumbai,India P Raveendran, University of Malaya Chandrashekaran K, NITK, India Sneha Kasera, University of Utah Bhabani P Sinha, ISI, Kolkata, India Francis Lau, University of Hong Kong P Ramaswamy, University of Essex, UK Nalini V, University of Illinois, USA Suresh M, University of York, UK Teo Yong M,Nat. Uni. of Singapore G Santhosh Kumar, CUSAT, Cochin")));
}

_s(PC, "zTMnd1sNXDX7n5Z2WtXSK7xxBHo=");

_c = PC;

var _c;

$RefreshReg$(_c, "PC");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9QQy5qcyJdLCJuYW1lcyI6WyJQQyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ3V2lkdGgiLCJzZXR3V2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxFQUFULEdBQWM7QUFBQTs7QUFBQSx3QkFDQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FERDtBQUFBO0FBQUEsTUFDcEJDLE1BRG9CO0FBQUEsTUFDWkMsU0FEWTs7QUFFM0JILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkQsYUFBUyxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBVDtBQUNELEdBRkQ7QUFHQSxTQUNFO0FBQ0UsYUFBUyxFQUFDLFNBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFTCxNQUFNLEdBQUcsR0FBVCxHQUFlLE1BQWYsR0FBd0IsT0FBakM7QUFBMEMsZUFBTztBQUFqRCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLFNBQUssRUFBRTtBQUNMTSxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFLGNBRlg7QUFHTEMsY0FBUSxFQUFFLE1BSEw7QUFJTEMsWUFBTSxFQUFFO0FBSkgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaWdDQVRGLENBSkYsQ0FERjtBQW1DRDs7R0F4Q3VCWixFOztLQUFBQSxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxuYXZcXHBjLmpzLjRkMjg2ZGMyZTQ5YjAwZDk5NTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQQygpIHtcclxuICBjb25zdCBbd1dpZHRoLCBzZXR3V2lkdGhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldHdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwid3JhcHBlclwiXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiB3V2lkdGggPiA1NjAgPyBcIjgwdndcIiA6IFwiMTAwdndcIiwgZmxvYXQ6IFwicmlnaHRcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+TGlzdCBvZiBQcm9ncmFtbWUgQ29tbWl0dGVlczwvaDE+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBEYXZpZCBLYWhhbmVyLEFJSVAsIEphcGFuIFAgU3JlZW5pdmFzIEt1bWFyLCBJSVRNLCBJbmRpYSBTYWphbCBLIERhcyxcclxuICAgICAgICAgIFVUQSwgVVNBIFNoYXJhZCBQdXJvaGl0LCBDREFDLCBJbmRpYSBLIFNpdmFyYWphbiwgVGVqYXMgTmV0d29ya3MsXHJcbiAgICAgICAgICBJbmRpYSBLZW50YXJvIFRveWFtYSwgTWljcm9zb2Z0LCBJbmRpYSBWaXR0YWwgUmFvLCBOU0YsIFVTQSBSYXZpa2lyYW5cclxuICAgICAgICAgIEEsIElFRUUgUmVnaW9uIDEwIEIgUCBTaW5oYSwgSVNJLCBLb2xrYXRha2EsIEluZGlhIFJhbW1vaGFucmFvXHJcbiAgICAgICAgICBLb3RhZ2lyaSwgQXVzdHJhbGlhIFJhamVldiBTaG9yZXksIEdlbmVyYWwgTW90b3JzLCBJbmRpYSBBc29rIEtcclxuICAgICAgICAgIFRhbHVrZGFyLCBJSUlCLCBJbmRpYSBEaW5lc2ggSyBBbnZla2FyLCBIb25leXdlbGwsIEluZGlhIEJoYW51IFByYXNhZCxcclxuICAgICAgICAgIEZsb3JpZGEsIFVTQSBNIFNyaW5pdmFzLCBNZW50b3IgR3JhcGhpY3MsIEluZGlhIFJhamliIE1hbGwsIElJVFxyXG4gICAgICAgICAgS2hhcmFncHVyLCBJbmRpYSBCaGFyYXQgSmF5YXJhbWFuLCBVQiwgVVNBIEJpbmRodW1hZGhhdiwgSUVFRVxyXG4gICAgICAgICAgQmFuZ2Fsb3JlIFNlY3Rpb24gSiBNb2hhbiBLdW1hciwgVVRBLCBVU0EgWSBWIFMgTGF4bWksIENEb1QsIEluZGlhXHJcbiAgICAgICAgICBUb21pbyBIaXJhdGEsIEphcGFuIFRha2FvIE5pc2hpemVraSwgSmFwYW4gRyBTaGl2YWt1bWFyLCBJSVRcclxuICAgICAgICAgIE11bWJhaSxJbmRpYSBQIFJhdmVlbmRyYW4sIFVuaXZlcnNpdHkgb2YgTWFsYXlhIENoYW5kcmFzaGVrYXJhbiBLLFxyXG4gICAgICAgICAgTklUSywgSW5kaWEgU25laGEgS2FzZXJhLCBVbml2ZXJzaXR5IG9mIFV0YWggQmhhYmFuaSBQIFNpbmhhLCBJU0ksXHJcbiAgICAgICAgICBLb2xrYXRhLCBJbmRpYSBGcmFuY2lzIExhdSwgVW5pdmVyc2l0eSBvZiBIb25nIEtvbmcgUCBSYW1hc3dhbXksXHJcbiAgICAgICAgICBVbml2ZXJzaXR5IG9mIEVzc2V4LCBVSyBOYWxpbmkgViwgVW5pdmVyc2l0eSBvZiBJbGxpbm9pcywgVVNBIFN1cmVzaFxyXG4gICAgICAgICAgTSwgVW5pdmVyc2l0eSBvZiBZb3JrLCBVSyBUZW8gWW9uZyBNLE5hdC4gVW5pLiBvZiBTaW5nYXBvcmUgRyBTYW50aG9zaFxyXG4gICAgICAgICAgS3VtYXIsIENVU0FULCBDb2NoaW5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9