"use strict";
exports.id = 740;
exports.ids = [740];
exports.modules = {

/***/ 87740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DropdownUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6399);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21628);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50447);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32526);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66243);



function DropdownUI({ text, list, buttonClassName, menuClassName, itemClassName, callback, defaultValue }) {
    const [selectedKeys, setSelectedKeys] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Set([
        defaultValue ? defaultValue.text : text
    ]));
    const selectedValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>Array.from(selectedKeys).join(", ").replaceAll("_", " "), [
        selectedKeys
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        callback(selectedValue);
    }, [
        selectedKeys
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__/* .dropdown_default */ .F, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__/* .dropdown_trigger_default */ .S, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__/* .button_default */ .A, {
                    variant: "bordered",
                    className: buttonClassName,
                    children: selectedValue
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__/* .dropdown_menu_default */ .a, {
                "aria-label": "Single selection example",
                variant: "flat",
                disallowEmptySelection: true,
                selectionMode: "single",
                selectedKeys: selectedKeys,
                onSelectionChange: setSelectedKeys,
                className: menuClassName,
                children: list.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__/* .menu_item_base_default */ .W, {
                        className: itemClassName,
                        children: item.text
                    }, item.text))
            })
        ]
    });
}


/***/ })

};
;