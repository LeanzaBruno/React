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

/***/ "(app-client)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/styles.css */ \"(app-client)/./src/app/css/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    // Inicialmente, tasks es una lista de strings\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"Ir a la psic\\xf3loga\",\n        \"Terminar de estudiar iso\"\n    ]);\n    // Estado para crear una nueva tarea\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function addTask() {\n        const newArray = tasks.concat(newTask);\n        setNewTask(\"\");\n        setTasks(newArray);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"container h-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row input-group my-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Nueva tarea\",\n                        className: \"col form-control\",\n                        value: newTask,\n                        onChange: (e)=>setNewTask(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                        lineNumber: 21,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        className: \"col-2 btn btn-primary\",\n                        value: \"Agregar tarea\",\n                        onClick: addTask\n                    }, void 0, false, {\n                        fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row my-3\",\n                children: tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-group\",\n                    children: tasks.map((t, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"list-group-item\",\n                            children: t\n                        }, index, false, {\n                            fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                            lineNumber: 28,\n                            columnNumber: 39\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"col text-center\",\n                    children: \"No hay tareas guardadas\"\n                }, void 0, false, {\n                    fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/qwertz/React/test/src/app/page.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VGhmnbtiH1mLfGBExeJnEH724Wo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0M7QUFDTjtBQUVYLFNBQVNDOztJQUN0Qiw4Q0FBOEM7SUFDOUMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO1FBQUM7UUFBcUI7S0FBMkI7SUFFcEYsb0NBQW9DO0lBQ3BDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2QyxTQUFTTTtRQUNWLE1BQU1DLFdBQVdMLE1BQU1NLE9BQU9KO1FBQzlCQyxXQUFXO1FBQ1hGLFNBQVNJO0lBQ1I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDbkIsOERBQUNFO3dCQUFNQyxNQUFLO3dCQUFPQyxhQUFZO3dCQUFjSixXQUFVO3dCQUFtQkssT0FBT1g7d0JBQVNZLFVBQVdDLENBQUFBLElBQUtaLFdBQVdZLEVBQUVDLE9BQU9IOzs7Ozs7a0NBQ3hILDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBU0gsV0FBVTt3QkFBd0JLLE9BQU07d0JBQWdCSSxTQUFTYjs7Ozs7Ozs7Ozs7OzBCQUd4Riw4REFBQ0s7Z0JBQUlELFdBQVU7MEJBQ1pSLE1BQU1rQixTQUFTLGtCQUNkLDhEQUFDQztvQkFBR1gsV0FBVTs4QkFDWFIsTUFBTW9CLElBQUssQ0FBQ0MsR0FBR0Msc0JBQVUsOERBQUNDOzRCQUFlZixXQUFVO3NDQUFtQmE7MkJBQXBDQzs7Ozs7Ozs7O3lDQUVuQyw4REFBQ0U7b0JBQUdoQixXQUFVOzhCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUM7R0E5QndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gSW5pY2lhbG1lbnRlLCB0YXNrcyBlcyB1bmEgbGlzdGEgZGUgc3RyaW5nc1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcIklyIGEgbGEgcHNpY8OzbG9nYVwiLCBcIlRlcm1pbmFyIGRlIGVzdHVkaWFyIGlzb1wiXSk7XG5cbiAgLy8gRXN0YWRvIHBhcmEgY3JlYXIgdW5hIG51ZXZhIHRhcmVhXG4gIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIGFkZFRhc2soKXtcblx0Y29uc3QgbmV3QXJyYXkgPSB0YXNrcy5jb25jYXQobmV3VGFzayk7XG5cdHNldE5ld1Rhc2soXCJcIik7XG5cdHNldFRhc2tzKG5ld0FycmF5KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGlucHV0LWdyb3VwIG15LTMnPlxuXHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nTnVldmEgdGFyZWEnIGNsYXNzTmFtZT0nY29sIGZvcm0tY29udHJvbCcgdmFsdWU9e25ld1Rhc2t9IG9uQ2hhbmdlPXsgZSA9PiBzZXROZXdUYXNrKGUudGFyZ2V0LnZhbHVlKSB9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdjb2wtMiBidG4gYnRuLXByaW1hcnknIHZhbHVlPSdBZ3JlZ2FyIHRhcmVhJyBvbkNsaWNrPXthZGRUYXNrfS8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBteS0zJz5cbiAgICAgICAge3Rhc2tzLmxlbmd0aCA+IDAgPyBcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cbiAgICAgICAgICAgIHt0YXNrcy5tYXAoICh0LCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz57dH08L2xpPil9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA6IDxoNSBjbGFzc05hbWU9J2NvbCB0ZXh0LWNlbnRlcic+Tm8gaGF5IHRhcmVhcyBndWFyZGFkYXM8L2g1PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJ0YXNrcyIsInNldFRhc2tzIiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJhZGRUYXNrIiwibmV3QXJyYXkiLCJjb25jYXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJsZW5ndGgiLCJ1bCIsIm1hcCIsInQiLCJpbmRleCIsImxpIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});