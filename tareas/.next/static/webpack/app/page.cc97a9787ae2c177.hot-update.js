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

/***/ "(app-client)/./src/app/components/TaskCreator.jsx":
/*!********************************************!*\
  !*** ./src/app/components/TaskCreator.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskCreator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction TaskCreator(param) {\n    let { onNewTask  } = param;\n    _s();\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row input-group my-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Descripci\\xf3n de la nueva tarea\",\n                className: \"col form-control\",\n                value: task,\n                onChange: (e)=>setTask(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/qwertz/React/test/src/app/components/TaskCreator.jsx\",\n                lineNumber: 8,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"col-2 btn btn-primary\",\n                value: \"Agregar tarea\"\n            }, void 0, false, {\n                fileName: \"/home/qwertz/React/test/src/app/components/TaskCreator.jsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/qwertz/React/test/src/app/components/TaskCreator.jsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, this);\n}\n_s(TaskCreator, \"cJE39Iugkv77Am2GUaY068Dantw=\");\n_c = TaskCreator;\nvar _c;\n$RefreshReg$(_c, \"TaskCreator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL1Rhc2tDcmVhdG9yLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0MsWUFBWSxLQUFXO1FBQVgsRUFBQ0MsVUFBUyxFQUFDLEdBQVg7O0lBQ2hDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQyxxQkFDRiw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUNLQyxhQUFZO2dCQUNaSCxXQUFVO2dCQUNWSSxPQUFRUDtnQkFDUlEsVUFBV0MsQ0FBQUEsSUFBS1IsUUFBUVEsRUFBRUMsT0FBT0g7Ozs7OzswQkFDbEQsOERBQUNJO2dCQUFPTixNQUFLO2dCQUNJRixXQUFVO2dCQUNWSSxPQUFNOzs7Ozs7Ozs7Ozs7QUFJMUI7R0FoQndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGFza0NyZWF0b3IuanN4P2E5YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza0NyZWF0b3Ioe29uTmV3VGFza30pe1xuICAgIGNvbnN0IFt0YXNrLCBzZXRUYXNrXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IGlucHV0LWdyb3VwIG15LTMnPlxuXHRcdFx0PGlucHV0IHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEZXNjcmlwY2nDs24gZGUgbGEgbnVldmEgdGFyZWEnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sIGZvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0YXNrIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldFRhc2soZS50YXJnZXQudmFsdWUpIH0vPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sLTIgYnRuIGJ0bi1wcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nQWdyZWdhciB0YXJlYSdcbiAgICAgICAgICAgICAgICAgICAgLz5cblx0XHQ8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUYXNrQ3JlYXRvciIsIm9uTmV3VGFzayIsInRhc2siLCJzZXRUYXNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/TaskCreator.jsx\n"));

/***/ })

});