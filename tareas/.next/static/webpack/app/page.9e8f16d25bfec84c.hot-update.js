"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/TaskList.jsx":
/*!*****************************************!*\
  !*** ./src/app/components/TaskList.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskItem */ \"(app-client)/./src/app/components/TaskItem.jsx\");\n\n\nfunction TaskList(param) {\n    let { list , deleteTask  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row my-3\",\n        children: list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"list-group\",\n            children: list.map((t)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    task: t.description,\n                    deleteTask: deleteTask\n                }, t.id, false, {\n                    fileName: \"/home/qwertz/React/test/src/app/components/TaskList.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 29\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/qwertz/React/test/src/app/components/TaskList.jsx\",\n            lineNumber: 7,\n            columnNumber: 11\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"col text-center\",\n            children: \"No hay tareas\"\n        }, void 0, false, {\n            fileName: \"/home/qwertz/React/test/src/app/components/TaskList.jsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/qwertz/React/test/src/app/components/TaskList.jsx\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n}\n_c = TaskList;\nvar _c;\n$RefreshReg$(_c, \"TaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL1Rhc2tMaXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBRW5CLFNBQVNDLFNBQVMsS0FBa0I7UUFBbEIsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUMsR0FBbEI7SUFDN0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pILEtBQUtJLFNBQVMsa0JBQ2IsOERBQUNDO1lBQUdGLFdBQVU7c0JBQ1hILEtBQUtNLElBQUtDLENBQUFBLGtCQUFLLDhEQUFDVCxpREFBUUE7b0JBQVlVLE1BQU1ELEVBQUVFO29CQUFhUixZQUFZQTttQkFBdkNNLEVBQUVHOzs7Ozs7Ozs7aUNBRWpDLDhEQUFDQztZQUFHUixXQUFVO3NCQUFrQjs7Ozs7Ozs7Ozs7QUFJNUM7S0FYd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXNrTGlzdC5qc3g/NjkzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFza0l0ZW0gZnJvbSAnLi9UYXNrSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tMaXN0KHtsaXN0LCBkZWxldGVUYXNrfSl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbXktMyc+XG4gICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyBcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCggdCA9PiA8VGFza0l0ZW0ga2V5PXt0LmlkfSB0YXNrPXt0LmRlc2NyaXB0aW9ufSBkZWxldGVUYXNrPXtkZWxldGVUYXNrfS8+KSB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA6IDxoMSBjbGFzc05hbWU9J2NvbCB0ZXh0LWNlbnRlcic+Tm8gaGF5IHRhcmVhczwvaDE+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlRhc2tJdGVtIiwiVGFza0xpc3QiLCJsaXN0IiwiZGVsZXRlVGFzayIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInVsIiwibWFwIiwidCIsInRhc2siLCJkZXNjcmlwdGlvbiIsImlkIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/TaskList.jsx\n"));

/***/ })

});