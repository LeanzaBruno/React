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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/styles.css */ \"(app-client)/./src/app/css/styles.css\");\n/* harmony import */ var _components_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TaskList */ \"(app-client)/./src/app/components/TaskList.jsx\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ \"(app-client)/./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    // Inicialmente, tasks es una lista de strings\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Estado para crear una nueva tarea\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function addTask() {\n        debugger;\n        setTasks(tasks.concat({\n            id: tasks.length,\n            description: newTask\n        }));\n        setNewTask(null);\n    }\n    function deleteTask(id) {\n        setTasks(tasks.filter((t)=>t.id != id));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"container h-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row input-group my-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Descripci\\xf3n de la nueva tarea\",\n                        className: \"col form-control\",\n                        value: newTask,\n                        onChange: (e)=>setNewTask(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 4\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        className: \"col-2 btn btn-primary\",\n                        value: \"Agregar tarea\",\n                        onClick: addTask\n                    }, void 0, false, {\n                        fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                        lineNumber: 28,\n                        columnNumber: 4\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                lineNumber: 26,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                list: tasks,\n                onDelete: deleteTask\n            }, void 0, false, {\n                fileName: \"/home/qwertz/React/test/src/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/qwertz/React/test/src/app/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"I6Ja6boGNThdl33TPQ1rJty9HWU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNnQztBQUNOO0FBQ21CO0FBQ2I7QUFFakIsU0FBU0c7O0lBQ3RCLDhDQUE4QztJQUM5QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxvQ0FBb0M7SUFDcEMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLFNBQVNRO1FBQ1YsUUFBUztRQUNUSCxTQUFVRCxNQUFNSyxPQUFPO1lBQUNDLElBQUlOLE1BQU1PO1lBQVFDLGFBQWFOO1FBQU87UUFDOURDLFdBQVc7SUFDVjtJQUVBLFNBQVNNLFdBQVdILEVBQUU7UUFDdkJMLFNBQVVELE1BQU1VLE9BQVFDLENBQUFBLElBQUtBLEVBQUVMLE1BQU1BO0lBQ3BDO0lBRUEscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVU7OzBCQUNsQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNkLDhEQUFDRTt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBZ0NKLFdBQVU7d0JBQW1CSyxPQUFPaEI7d0JBQVNpQixVQUFXQyxDQUFBQSxJQUFLakIsV0FBV2lCLEVBQUVDLE9BQU9IOzs7Ozs7a0NBQ2hKLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBU0gsV0FBVTt3QkFBd0JLLE9BQU07d0JBQWdCSSxTQUFTbEI7Ozs7Ozs7Ozs7OzswQkFHdkYsOERBQUNQLDREQUFRQTtnQkFBQzBCLE1BQU12QjtnQkFBT3dCLFVBQVVmOzs7Ozs7Ozs7Ozs7QUFHbkM7R0EzQndCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCBUYXNrTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvVGFza0xpc3QnO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gSW5pY2lhbG1lbnRlLCB0YXNrcyBlcyB1bmEgbGlzdGEgZGUgc3RyaW5nc1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyBFc3RhZG8gcGFyYSBjcmVhciB1bmEgbnVldmEgdGFyZWFcbiAgY29uc3QgW25ld1Rhc2ssIHNldE5ld1Rhc2tdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gYWRkVGFzaygpe1xuXHRkZWJ1Z2dlcjtcblx0c2V0VGFza3MoIHRhc2tzLmNvbmNhdCh7aWQ6IHRhc2tzLmxlbmd0aCwgZGVzY3JpcHRpb246IG5ld1Rhc2t9KSApO1xuXHRzZXROZXdUYXNrKG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhpZCl7XG5cdHNldFRhc2tzKCB0YXNrcy5maWx0ZXIoIHQgPT4gdC5pZCAhPSBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J2NvbnRhaW5lciBoLTEwMCc+XG5cdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBpbnB1dC1ncm91cCBteS0zJz5cblx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nRGVzY3JpcGNpw7NuIGRlIGxhIG51ZXZhIHRhcmVhJyBjbGFzc05hbWU9J2NvbCBmb3JtLWNvbnRyb2wnIHZhbHVlPXtuZXdUYXNrfSBvbkNoYW5nZT17IGUgPT4gc2V0TmV3VGFzayhlLnRhcmdldC52YWx1ZSkgfS8+XG5cdFx0XHQ8aW5wdXQgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2NvbC0yIGJ0biBidG4tcHJpbWFyeScgdmFsdWU9J0FncmVnYXIgdGFyZWEnIG9uQ2xpY2s9e2FkZFRhc2t9Lz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxUYXNrTGlzdCBsaXN0PXt0YXNrc30gb25EZWxldGU9e2RlbGV0ZVRhc2t9Lz5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhc2tMaXN0IiwiTW9kYWwiLCJIb21lIiwidGFza3MiLCJzZXRUYXNrcyIsIm5ld1Rhc2siLCJzZXROZXdUYXNrIiwiYWRkVGFzayIsImNvbmNhdCIsImlkIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZWxldGVUYXNrIiwiZmlsdGVyIiwidCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsImxpc3QiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});