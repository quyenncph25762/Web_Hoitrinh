"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ea20990d2556\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmIxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImVhMjA5OTBkMjU1NlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/libs/Features/products/productSlice.ts":
/*!********************************************************!*\
  !*** ./src/app/libs/Features/products/productSlice.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listProductByCategoryClients: function() { return /* binding */ listProductByCategoryClients; },\n/* harmony export */   listProductsClient: function() { return /* binding */ listProductsClient; },\n/* harmony export */   productClientSliceReducer: function() { return /* binding */ productClientSliceReducer; },\n/* harmony export */   searchProductBynameClients: function() { return /* binding */ searchProductBynameClients; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialProductState = {\n    products: []\n};\nconst initialProductSearchState = {\n    nameTerm: \"\",\n    products: []\n};\nconst productClientSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"products\",\n    initialState: initialProductSearchState,\n    reducers: {\n        listProductsClient: (state, actions)=>{\n            state.products = actions.payload;\n        },\n        listProductByCategoryClients: (state, actions)=>{\n            state.products = state.products.filter((product)=>product.categoryId === actions.payload);\n        },\n        searchProductBynameClients: (state, actions)=>{\n            const nameSearch = actions.payload.nameTerm.trim().toLowerCase();\n            state.products = actions.payload.products.filter((product)=>product.productName && product.productName.trim().toLowerCase() === nameSearch);\n        }\n    }\n});\nconst { listProductsClient, listProductByCategoryClients, searchProductBynameClients } = productClientSlice.actions;\nconst productClientSliceReducer = productClientSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGlicy9GZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0U2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEQ7QUFHOUQsTUFBTUMsc0JBQXFDO0lBQ3ZDQyxVQUFVLEVBQUU7QUFDaEI7QUFDQSxNQUFNQyw0QkFBaUQ7SUFDbkRDLFVBQVU7SUFDVkYsVUFBVSxFQUFFO0FBQ2hCO0FBRUEsTUFBTUcscUJBQXFCTCw2REFBV0EsQ0FBQztJQUNuQ00sTUFBTTtJQUNOQyxjQUFjSjtJQUNkSyxVQUFXO1FBQ1BDLG9CQUFvQixDQUFDQyxPQUFzQkM7WUFDdkNELE1BQU1SLFFBQVEsR0FBR1MsUUFBUUMsT0FBTztRQUNwQztRQUNBQyw4QkFBOEIsQ0FBQ0gsT0FBc0JDO1lBQ2pERCxNQUFNUixRQUFRLEdBQUdRLE1BQU1SLFFBQVEsQ0FBQ1ksTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLFVBQVUsS0FBS0wsUUFBUUMsT0FBTztRQUM5RjtRQUNBSyw0QkFBNEIsQ0FBQ1AsT0FBNEJDO1lBQ3JELE1BQU1PLGFBQWFQLFFBQVFDLE9BQU8sQ0FBQ1IsUUFBUSxDQUFDZSxJQUFJLEdBQUdDLFdBQVc7WUFDOURWLE1BQU1SLFFBQVEsR0FBR1MsUUFBUUMsT0FBTyxDQUFDVixRQUFRLENBQUNZLE1BQU0sQ0FBQyxDQUFDQyxVQUFZQSxRQUFRTSxXQUFXLElBQUlOLFFBQVFNLFdBQVcsQ0FBQ0YsSUFBSSxHQUFHQyxXQUFXLE9BQU9GO1FBQ3RJO0lBQ0o7QUFDSjtBQUVPLE1BQU0sRUFBRVQsa0JBQWtCLEVBQUVJLDRCQUE0QixFQUFFSSwwQkFBMEIsRUFBRSxHQUFHWixtQkFBbUJNLE9BQU87QUFDbkgsTUFBTVcsNEJBQTRCakIsbUJBQW1Ca0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xpYnMvRmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdFNsaWNlLnRzPzJjMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCwgSVByb2R1Y3RTZWFyY2hTdGF0ZSwgSVByb2R1Y3RTdGF0ZSB9IGZyb20gXCIuL3Byb2R1Y3QuaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBpbml0aWFsUHJvZHVjdFN0YXRlOiBJUHJvZHVjdFN0YXRlID0ge1xyXG4gICAgcHJvZHVjdHM6IFtdXHJcbn1cclxuY29uc3QgaW5pdGlhbFByb2R1Y3RTZWFyY2hTdGF0ZTogSVByb2R1Y3RTZWFyY2hTdGF0ZSA9IHtcclxuICAgIG5hbWVUZXJtOiBcIlwiLFxyXG4gICAgcHJvZHVjdHM6IFtdXHJcbn1cclxuXHJcbmNvbnN0IHByb2R1Y3RDbGllbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFByb2R1Y3RTZWFyY2hTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiAoe1xyXG4gICAgICAgIGxpc3RQcm9kdWN0c0NsaWVudDogKHN0YXRlOiBJUHJvZHVjdFN0YXRlLCBhY3Rpb25zOiBQYXlsb2FkQWN0aW9uPElQcm9kdWN0W10+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3RzID0gYWN0aW9ucy5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXN0UHJvZHVjdEJ5Q2F0ZWdvcnlDbGllbnRzOiAoc3RhdGU6IElQcm9kdWN0U3RhdGUsIGFjdGlvbnM6IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yeUlkID09PSBhY3Rpb25zLnBheWxvYWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2hQcm9kdWN0QnluYW1lQ2xpZW50czogKHN0YXRlOiBJUHJvZHVjdFNlYXJjaFN0YXRlLCBhY3Rpb25zOiBQYXlsb2FkQWN0aW9uPElQcm9kdWN0U2VhcmNoU3RhdGU+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVTZWFyY2ggPSBhY3Rpb25zLnBheWxvYWQubmFtZVRlcm0udHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgc3RhdGUucHJvZHVjdHMgPSBhY3Rpb25zLnBheWxvYWQucHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnByb2R1Y3ROYW1lICYmIHByb2R1Y3QucHJvZHVjdE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IG5hbWVTZWFyY2gpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGxpc3RQcm9kdWN0c0NsaWVudCwgbGlzdFByb2R1Y3RCeUNhdGVnb3J5Q2xpZW50cywgc2VhcmNoUHJvZHVjdEJ5bmFtZUNsaWVudHMgfSA9IHByb2R1Y3RDbGllbnRTbGljZS5hY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0Q2xpZW50U2xpY2VSZWR1Y2VyID0gcHJvZHVjdENsaWVudFNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsUHJvZHVjdFN0YXRlIiwicHJvZHVjdHMiLCJpbml0aWFsUHJvZHVjdFNlYXJjaFN0YXRlIiwibmFtZVRlcm0iLCJwcm9kdWN0Q2xpZW50U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJsaXN0UHJvZHVjdHNDbGllbnQiLCJzdGF0ZSIsImFjdGlvbnMiLCJwYXlsb2FkIiwibGlzdFByb2R1Y3RCeUNhdGVnb3J5Q2xpZW50cyIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeUlkIiwic2VhcmNoUHJvZHVjdEJ5bmFtZUNsaWVudHMiLCJuYW1lU2VhcmNoIiwidHJpbSIsInRvTG93ZXJDYXNlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0Q2xpZW50U2xpY2VSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/libs/Features/products/productSlice.ts\n"));

/***/ })

});