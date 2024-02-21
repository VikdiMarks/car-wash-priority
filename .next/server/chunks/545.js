"use strict";
exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 52545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PaginationUI)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@nextui-org/use-pagination/dist/index.mjs + 1 modules
var dist = __webpack_require__(5595);
// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(68973);
// EXTERNAL MODULE: ./node_modules/@nextui-org/pagination/dist/chunk-BIN3WWJN.mjs + 10 modules
var chunk_BIN3WWJN = __webpack_require__(98641);
;// CONCATENATED MODULE: ./app/_components/ChevronIcon.jsx


const ChevronIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        fill: "none",
        focusable: "false",
        height: "1em",
        role: "presentation",
        viewBox: "0 0 24 24",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.5 19l-7-7 7-7",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5"
        })
    });

;// CONCATENATED MODULE: ./app/_components/Pagination.jsx




function PaginationUI({ switchPage, currentPage, totalPages }) {
    const renderItem = ({ ref, key, value, isActive, onNext, onPrevious, setPage, className })=>{
        (0,react_.useEffect)(()=>{
            console.log("currentPage", value);
        }, [
            value
        ]);
        if (value === dist/* PaginationItemType */.m.NEXT) {
            return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (0,chunk_SF6SJHAM.cn)(className, "bg-default-200/50 min-w-8 w-8 h-8"),
                onClick: ()=>{
                    onNext();
                    if (currentPage >= totalPages) return;
                    switchPage(currentPage + 1);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronIcon, {
                    className: "rotate-180"
                })
            }, key);
        }
        if (value === dist/* PaginationItemType */.m.PREV) {
            return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (0,chunk_SF6SJHAM.cn)(className, "bg-default-200/50 min-w-8 w-8 h-8"),
                onClick: ()=>{
                    onPrevious();
                    if (currentPage <= 1) return;
                    switchPage(currentPage - 1);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronIcon, {})
            }, key);
        }
        if (value === dist/* PaginationItemType */.m.DOTS) {
            return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (0,chunk_SF6SJHAM.cn)(className, "w-7 h-7"),
                children: "..."
            }, key);
        }
        // cursor is the default item
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            ref: ref,
            className: (0,chunk_SF6SJHAM.cn)(className, isActive && "bg-black bg-opacity-5 rounded-lg", "w-7 h-7 text-zinc-900 text-xs font-normal"),
            onClick: ()=>{
                setPage(value);
                switchPage(value);
            },
            children: value
        }, key);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(chunk_BIN3WWJN/* pagination_default */.g, {
        disableCursorAnimation: true,
        showControls: true,
        total: totalPages,
        initialPage: 1,
        className: "gap-2",
        radius: "full",
        renderItem: renderItem,
        variant: "light"
    });
}


/***/ })

};
;