"use strict";
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 38870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10566);



function Button({ type, children, icon, clickHandler, disabled = false }) {
    console.log("disabled", disabled);
    switch(type){
        case "medium-gray":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: clickHandler,
                    className: "duration-500 hover:opacity-75 rounded-lg px-2 py-1 text-sm text-black-100 bg-black/5",
                    disabled: disabled,
                    children: children
                });
            }
        case "medium-black":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: clickHandler,
                    className: "duration-500 hover:opacity-75 rounded-lg px-2 py-1 text-sm text-white bg-black-100",
                    disabled: disabled,
                    children: children
                });
            }
        case "success-secondary":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: clickHandler,
                className: "hover:bg-green--main hover:text-white duration-500 px-2 py-1 text-sm text-center w-full rounded-lg text-green--main border border-green--main",
                disabled: disabled,
                children: children
            });
        case "danger-secondary":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: clickHandler,
                className: "hover:bg-red--secondary hover:text-white duration-500 px-2 py-[13px] text-center w-full rounded-lg text-red--secondary border border-red--secondary",
                disabled: disabled,
                children: children
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: clickHandler,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("flex-middle gap-2 duration-300 hover:opacity-75  p-2 text-lg font-semibold text-center w-full rounded-lg", {
                    "text-white bg-green--main": type === "success",
                    "text-white bg-red--secondary": type === "danger",
                    "text-black-100 bg-black/5": type === "secondary"
                }, "max-[430px]:text-[16px]"),
                disabled: disabled,
                children: [
                    icon === "arrow-left" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        width: 20,
                        height: 20,
                        src: `/img/icons/${icon}.svg`,
                        alt: "Стрелка влево"
                    }),
                    children,
                    icon === "arrow-right" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        width: 20,
                        height: 20,
                        src: `/img/icons/${icon}.svg`,
                        alt: "Стрелка вправо"
                    })
                ]
            });
    }
}


/***/ }),

/***/ 96665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10566);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64663);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);




function Input({ disabled, value, setValue, type, label, placeholder, getOnlyNumber, invalidValue = "", dataFocus, mask }) {
    switch(type){
        // TODO: для одинарных инпутов сделать 1 значение вводимое и автоперевод на следующее
        case "one-number":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    tabIndex: dataFocus.split("-")[1],
                    "data-focus": dataFocus,
                    className: "focus:border-black/20 text-center w-[58px] h-[58px] flex-middle rounded-lg font-semibold text-2xl leading-[150%] border border-solid border-black/10 bg-white",
                    type: "number",
                    defaultValue: value,
                    onChange: (e)=>{
                        let elems = document.querySelectorAll('[data-focus^="focus-"]');
                        if (e.target.value === "") {
                            setValue(e.target.value);
                        } else {
                            setValue(e.target.value.at(-1));
                        }
                        if (elems.length > 0) {
                            let curInd = Number(e.target.getAttribute("data-focus").split("-")[1]) - 1;
                            elems[curInd === elems.length - 1 ? 0 : curInd + 1].focus();
                        }
                    }
                });
            }
        case "big-input:disabled":
            {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative w-[620px] lg:w-full",
                    children: [
                        label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-black/40 absolute top-4 left-5",
                            children: label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "bg-white h-[74px] rounded-lg px-5 pt-[38px] pb-4 border border-solid border-black/10 text-sm text-black/20 placeholder:text-black/20 w-full focus:border-black/20",
                            placeholder: placeholder,
                            disabled: true,
                            defaultValue: value
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "absolute bottom-4 right-5",
                            width: 16,
                            height: 16,
                            src: "/img/icons/checkmark.svg",
                            alt: "Подтверждено"
                        })
                    ]
                });
            }
        case "big-input":
            {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative w-[620px] lg:w-full",
                    children: [
                        label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-black/40 absolute top-4 left-5",
                            children: label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "bg-white h-[74px] rounded-lg px-5 pt-[38px] pb-4 border border-solid border-black/10 text-sm text-black-100 placeholder:text-black/20 w-full focus:border-black/20",
                            placeholder: placeholder,
                            onChange: (e)=>setValue(e.target.value),
                            defaultValue: value
                        })
                    ]
                });
            }
        case "mask-input":
            {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex flex-col gap-3",
                    children: [
                        label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm font-semibold text-black-100",
                            children: label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_input_mask__WEBPACK_IMPORTED_MODULE_2___default()), {
                            mask: mask,
                            maskChar: " ",
                            value: value,
                            onChange: (e)=>setValue(e.target.value),
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("text-sm text-black-100 placeholder:text-black/20 w-full rounded-lg px-4 py-2.5 border border-solid border-black/10 focus:border-black/20", {
                                "text-black/20": disabled
                            }),
                            disabled: !!disabled,
                            children: (inputProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: placeholder,
                                    ...inputProps
                                })
                        })
                    ]
                });
            }
        default:
            {
                console.log("invalidValue", invalidValue);
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex flex-col gap-3",
                    children: [
                        label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm font-semibold text-black-100",
                            children: label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: getOnlyNumber ? "number" : "text",
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("text-sm text-black-100 placeholder:text-black/20 w-full rounded-lg px-4 py-2.5 border border-solid border-black/10 focus:border-black/20", {
                                "text-black/20": disabled
                            }),
                            placeholder: placeholder,
                            value: value,
                            disabled: !!disabled,
                            onChange: (e)=>setValue(e.target.value),
                            style: {
                                borderColor: invalidValue ? "red" : "inherit"
                            }
                        }),
                        !!invalidValue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-sm",
                            style: {
                                color: "red"
                            },
                            children: invalidValue
                        })
                    ]
                });
            }
    }
}


/***/ }),

/***/ 84090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ axiosInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93258);
/* harmony import */ var _app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18396);


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: "https://eco.null-it.com"
});
axiosInstance.interceptors.request.use((config)=>{
    config.headers.Authorization = "Bearer " + (0,_app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .readCookie */ .v)("bearer_token");
    return config;
});



/***/ }),

/***/ 18396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ readCookie)
/* harmony export */ });
function readCookie(name) {
    if (typeof document !== "undefined") {
        const matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    return undefined;
}


/***/ })

};
;