"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 55498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Checkbox({ isCurrent, setIsCurrent, title, opinion, size, errorTitle, defaultState }) {
    const [isCurrentForTest, setIsCurrentForTest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!defaultState);
    if (size === "small") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-6 md:gap-3.5",
            children: [
                isCurrentForTest ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>setIsCurrentForTest(false),
                    className: "flex-middle cursor-pointer bg-black-100 border border-black-100 min-w-[14px] min-h-[14px] rounded-[3px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        width: 6,
                        height: 4,
                        src: "/img/icons/checkmark-for-checkbox.svg",
                        alt: "Галочка"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>setIsCurrentForTest(true),
                    className: "cursor-pointer bg-[#F7F9FB] border border-black/20 min-w-[14px] min-h-[14px] rounded-[3px]"
                }),
                title && opinion && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-black-100",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-black/40",
                            children: opinion
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-6 md:gap-3.5",
            children: [
                isCurrentForTest ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>{
                        setIsCurrentForTest(false);
                        setIsCurrent(false);
                    },
                    className: "flex-middle cursor-pointer bg-black-100 border border-black-100 min-w-[18px] min-h-[18px] rounded",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        width: 8,
                        height: 6,
                        src: "/img/icons/checkmark-for-checkbox.svg",
                        alt: "Галочка"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>{
                        setIsCurrentForTest(true);
                        setIsCurrent(true);
                    },
                    className: "cursor-pointer bg-[#F7F9FB] border border-black/20 min-w-[18px] min-h-[18px] rounded"
                }),
                title && opinion && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-black-100" + (errorTitle ? " text-red-600" : ""),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-black/40",
                            dangerouslySetInnerHTML: {
                                __html: opinion
                            }
                        })
                    ]
                })
            ]
        });
    }
}


/***/ })

};
;