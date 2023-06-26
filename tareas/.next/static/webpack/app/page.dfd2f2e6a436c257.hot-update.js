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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/styles.css */ \"(app-client)/./src/app/css/styles.css\");\n/* harmony import */ var _components_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TaskList */ \"(app-client)/./src/app/components/TaskList.jsx\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ \"(app-client)/./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    // Inicialmente, tasks es una lista de strings\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Estado para crear una nueva tarea\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function addTask() {\n        const newList = tasks.concat({\n            id: tasks.length,\n            description: newTask\n        });\n        setTasks(newList);\n        setNewTask(\"\");\n    }\n    function deleteTask(id) {\n        setTasks(tasks.filter((t)=>t.id != id));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"container h-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            list: tasks,\n            onDelete: deleteTask\n        }, void 0, false, {\n            fileName: \"/home/qwertz/React/test/src/app/page.js\",\n            lineNumber: 26,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/qwertz/React/test/src/app/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MMRu7H+sKP7rEuK8M8zT6HaT89w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNnQztBQUNOO0FBQ21CO0FBQ2I7QUFFakIsU0FBU0c7O0lBQ3RCLDhDQUE4QztJQUM5QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxvQ0FBb0M7SUFDcEMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLFNBQVNRO1FBQ1YsTUFBTUMsVUFBVUwsTUFBTU0sT0FBTztZQUFDQyxJQUFJUCxNQUFNUTtZQUFRQyxhQUFhUDtRQUFPO1FBQ3BFRCxTQUFVSTtRQUNWRixXQUFXO0lBQ1Y7SUFFQSxTQUFTTyxXQUFXSCxFQUFFO1FBQ3ZCTixTQUFVRCxNQUFNVyxPQUFRQyxDQUFBQSxJQUFLQSxFQUFFTCxNQUFNQTtJQUNwQztJQUVBLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFVO2tCQUNsQiw0RUFBQ2pCLDREQUFRQTtZQUFDa0IsTUFBTWY7WUFBT2dCLFVBQVVOOzs7Ozs7Ozs7OztBQUduQztHQXRCd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vY29tcG9uZW50cy9UYXNrTGlzdCc7XG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBJbmljaWFsbWVudGUsIHRhc2tzIGVzIHVuYSBsaXN0YSBkZSBzdHJpbmdzXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIEVzdGFkbyBwYXJhIGNyZWFyIHVuYSBudWV2YSB0YXJlYVxuICBjb25zdCBbbmV3VGFzaywgc2V0TmV3VGFza10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gYWRkVGFzaygpe1xuXHRjb25zdCBuZXdMaXN0ID0gdGFza3MuY29uY2F0KHtpZDogdGFza3MubGVuZ3RoLCBkZXNjcmlwdGlvbjogbmV3VGFza30pO1xuXHRzZXRUYXNrcyggbmV3TGlzdCApO1xuXHRzZXROZXdUYXNrKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soaWQpe1xuXHRzZXRUYXNrcyggdGFza3MuZmlsdGVyKCB0ID0+IHQuaWQgIT0gaWQpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgaC0xMDAnPlxuXHRcdDxUYXNrTGlzdCBsaXN0PXt0YXNrc30gb25EZWxldGU9e2RlbGV0ZVRhc2t9Lz5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhc2tMaXN0IiwiTW9kYWwiLCJIb21lIiwidGFza3MiLCJzZXRUYXNrcyIsIm5ld1Rhc2siLCJzZXROZXdUYXNrIiwiYWRkVGFzayIsIm5ld0xpc3QiLCJjb25jYXQiLCJpZCIsImxlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVsZXRlVGFzayIsImZpbHRlciIsInQiLCJtYWluIiwiY2xhc3NOYW1lIiwibGlzdCIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});