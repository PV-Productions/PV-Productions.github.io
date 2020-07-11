webpackHotUpdate("static\\development\\pages\\nav\\committees.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\NextProjects\\ICIPpro\\components\\Navbar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Navbar() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      wWidth = _React$useState2[0],
      setwWidth = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setwWidth(window.innerWidth);
  });
  return __jsx("div", {
    style: {
      width: wWidth > 560 ? "80vw" : "100vw",
      "float": "right",
      position: "fixed",
      zIndex: 999,
      top: 0,
      marginLeft: "auto",
      right: 0
    },
    className: "jsx-1338454150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "jsx-1338454150" + " " + "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/logo2.png",
    alt: "logo",
    className: "jsx-1338454150" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("ul", {
    id: "js-menu",
    className: "jsx-1338454150" + " " + "main-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-1338454150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1338454150" + " " + "nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "Home"))), __jsx("li", {
    className: "jsx-1338454150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/nav/committees",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1338454150" + " " + "nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "Committees"))), __jsx("li", {
    className: "jsx-1338454150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/nav/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1338454150" + " " + "nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, wWidth > 560 ? "Contact Us" : "Contact"))), __jsx("li", {
    className: "jsx-1338454150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "http://icipbangalore.org/",
    target: "_blank",
    className: "jsx-1338454150" + " " + "nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Archives")), __jsx("li", {
    className: "jsx-1338454150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/nav/sponsors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1338454150" + " " + "nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Sponsors")))), __jsx("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0
    },
    className: "jsx-1338454150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1338454150" + " " + "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1338454150" + " " + "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1338454150" + " " + "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1338454150",
    __self: this
  }, ".navbar.jsx-1338454150{font-size:11.5px;background-color:rgba(250,250,250,0.8);color:black;padding-bottom:10px;box-shadow:2px 2px 20px 5px lightgray;height:12vh;border-bottom:2px solid rgb(178,34,34);}.main-nav.jsx-1338454150{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:30px;margin-top:-55px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-weight:600;font-family:\"Montserrat\",sans-serif;}.nav-links.jsx-1338454150,.logo.jsx-1338454150{-webkit-text-decoration:none;text-decoration:none;color:black;}.main-nav.jsx-1338454150 li.jsx-1338454150{text-align:center;padding:10px;}.main-nav.jsx-1338454150 li.jsx-1338454150:nth-child(4){display:none;}.logo.jsx-1338454150{width:150px;height:130px;margin-top:-35px;}.navbar-toggle.jsx-1338454150{position:absolute;top:10px;right:20px;cursor:pointer;color:rgba(0,0,0,1);font-size:24px;}.active.jsx-1338454150{display:block;}.menu.jsx-1338454150{width:30px;height:4px;background-color:black;margin:6px 10px;}@media screen and (min-width:768px){.navbar.jsx-1338454150{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:0;height:10vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px;}.main-nav.jsx-1338454150{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:30px;margin-top:10px;font-weight:300;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-family:\"Montserrat\",sans-serif;}.main-nav.jsx-1338454150 li.jsx-1338454150{margin:0;padding:0px;}.main-nav.jsx-1338454150 li.jsx-1338454150:nth-child(4){display:block;}.nav-links.jsx-1338454150{margin-left:40px;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.logo.jsx-1338454150{margin-top:0;width:200px;height:150px;}.navbar-toggle.jsx-1338454150{display:none;}.menu.jsx-1338454150{display:none;}.logo.jsx-1338454150:hover,.nav-links.jsx-1338454150:hover{color:rgba(0,0,0,0.7);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxOZXh0UHJvamVjdHNcXElDSVBwcm9cXGNvbXBvbmVudHNcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRVMsQUFHOEIsQUFVSSxBQWFBLEFBS0gsQUFLTCxBQUlELEFBT00sQUFTSixBQUdILEFBUUksQUFTQSxBQVVKLEFBSUssQUFJRyxBQUtKLEFBTUEsQUFHQSxBQUtZLFNBMUJiLEVBM0JILENBbkJFLENBSmYsQUErRGdCLEFBTWQsQUFHQSxDQXBERixBQWtDRSxHQXZGMEMsQUEyRlIsQ0E5RHJCLEFBZUosR0FsQ0ksQUEwRWIsQ0EzQnVCLEFBcURXLEdBdkVqQixBQTBERixFQXBESixJQWZiLE9BZ0JpQixBQW9EZixJQTFERixHQWtCa0IsS0FuQ0osR0F3QlcsR0E5Q1gsS0EwRGQsQ0FuQ0EsTUF0QnNCLEtBOENMLENBZ0JpQixBQVNaLGNBdEVrQixBQThDeEMsQ0EyQ0UsR0FsQmtCLEVBcUNsQixDQXBHa0IsYUFnRUEsS0EvREQsV0FnRUksRUF4RVQsSUFTTyxRQVJzQix1Q0FDM0MsWUEyRHFCLElBWVEsTUEvRFIsT0FvREwsWUFDTyx3RUFXa0IsRUEvRGhCLG1CQXFETixlQUNqQixBQVVBLGlFQS9EZ0IsZ0JBQ3FCLG9DQUN2QyIsImZpbGUiOiJDOlxcTmV4dFByb2plY3RzXFxJQ0lQcHJvXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbd1dpZHRoLCBzZXR3V2lkdGhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldHdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IHdXaWR0aCA+IDU2MCA/IFwiODB2d1wiIDogXCIxMDB2d1wiLFxyXG4gICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICB6SW5kZXg6IDk5OSxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nbzIucG5nXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW5hdlwiIGlkPVwianMtbWVudVwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmF2L2NvbW1pdHRlZXNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5Db21taXR0ZWVzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL25hdi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICB7d1dpZHRoID4gNTYwID8gXCJDb250YWN0IFVzXCIgOiBcIkNvbnRhY3RcIn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2ljaXBiYW5nYWxvcmUub3JnL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFyY2hpdmVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmF2L3Nwb25zb3JzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+U3BvbnNvcnM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMCwgcmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCA1cHggbGlnaHRncmF5O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEydmg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTc4LCAzNCwgMzQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLW5hdiB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTVweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LWxpbmtzLFxyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1uYXYgbGkge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4tbmF2IGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYWluLW5hdiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYWluLW5hdiBsaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbi1uYXYgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ286aG92ZXIsXHJcbiAgICAgICAgICAgIC5uYXYtbGlua3M6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\NextProjects\\\\ICIPpro\\\\components\\\\Navbar.js */"));
}

_s(Navbar, "zTMnd1sNXDX7n5Z2WtXSK7xxBHo=");

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwid1dpZHRoIiwic2V0d1dpZHRoIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpZHRoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0b3AiLCJtYXJnaW5MZWZ0IiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSx3QkFDSEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FERztBQUFBO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFNBRGdCOztBQUUvQkgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ3BCRCxhQUFTLENBQUNFLE1BQU0sQ0FBQ0MsVUFBUixDQUFUO0FBQ0QsR0FGRDtBQUlBLFNBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFTCxNQUFNLEdBQUcsR0FBVCxHQUFlLE1BQWYsR0FBd0IsT0FEMUI7QUFFTCxlQUFPLE9BRkY7QUFHTE0sY0FBUSxFQUFFLE9BSEw7QUFJTEMsWUFBTSxFQUFFLEdBSkg7QUFLTEMsU0FBRyxFQUFFLENBTEE7QUFNTEMsZ0JBQVUsRUFBRSxNQU5QO0FBT0xDLFdBQUssRUFBRTtBQVBGLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLE9BQUcsRUFBQyxNQUExQjtBQUFBLHdDQUEyQyxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUF5QixNQUFFLEVBQUMsU0FBNUI7QUFBQSx3Q0FBYyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWEsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYSxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixDQU5GLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixNQUFNLEdBQUcsR0FBVCxHQUFlLFlBQWYsR0FBOEIsU0FEakMsQ0FERixDQURGLENBWEYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFFRSxRQUFJLEVBQUMsMkJBRlA7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUFBLHdDQUNZLFdBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQWxCRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWEsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsQ0EzQkYsQ0FGRixFQW1DRTtBQUFLLFNBQUssRUFBRTtBQUFFTSxjQUFRLEVBQUUsVUFBWjtBQUF3QkUsU0FBRyxFQUFFLENBQTdCO0FBQWdDRSxXQUFLLEVBQUU7QUFBdkMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FuQ0YsQ0FYRjtBQUFBO0FBQUE7QUFBQSwwb1VBREY7QUErS0Q7O0dBckx1QmIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbmF2XFxjb21taXR0ZWVzLmpzLjBiMGNmNjM1ZjFhZDZlODMzOWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbd1dpZHRoLCBzZXR3V2lkdGhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldHdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IHdXaWR0aCA+IDU2MCA/IFwiODB2d1wiIDogXCIxMDB2d1wiLFxyXG4gICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICB6SW5kZXg6IDk5OSxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nbzIucG5nXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW5hdlwiIGlkPVwianMtbWVudVwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmF2L2NvbW1pdHRlZXNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5Db21taXR0ZWVzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL25hdi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICB7d1dpZHRoID4gNTYwID8gXCJDb250YWN0IFVzXCIgOiBcIkNvbnRhY3RcIn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2ljaXBiYW5nYWxvcmUub3JnL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFyY2hpdmVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmF2L3Nwb25zb3JzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+U3BvbnNvcnM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMCwgcmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCA1cHggbGlnaHRncmF5O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEydmg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTc4LCAzNCwgMzQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLW5hdiB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTVweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LWxpbmtzLFxyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1uYXYgbGkge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4tbmF2IGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYWluLW5hdiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYWluLW5hdiBsaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbi1uYXYgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ286aG92ZXIsXHJcbiAgICAgICAgICAgIC5uYXYtbGlua3M6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9