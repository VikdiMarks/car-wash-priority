"use strict";
exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 82943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10566);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function Footer({ textColor }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("px-10 pb-3 flex md:flex-col-reverse items-center justify-between absolute md:static md:py-8 bottom-0 left-0 right-0", {
            "text-white": textColor === "white",
            "text-black/40": textColor === "black"
        }, "max-[800px]:flex-col-reverse max-[800px]:gap-4"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "\xa9 Car Wash Priority 2023"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex md:flex-col items-center gap-12 max-[800px]:flex-col md:gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "hover:opacity-75",
                        href: "#",
                        children: "Поддержка"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "hover:opacity-75",
                        href: "/personal-data-processing",
                        children: "Правила обработки персональных данных"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 17998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ModalWindow)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./app/hooks/useOnClickOutside.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
function useOnClickOutside(ref, handler) {
    (0,react_.useEffect)(()=>{
        const listener = (e)=>{
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return ()=>{
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler
    ]);
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(30569);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(31691);
;// CONCATENATED MODULE: ./app/_components/ModalWindow.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ModalWindow({ trigger, setTrigger, title, children, classNameCustom }) {
    const windowBox = (0,react_.useRef)(null);
    useOnClickOutside(windowBox, ()=>setTrigger(false));
    (0,react_.useEffect)(()=>{
        if (trigger) {
            document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        } else {
            document.getElementsByTagName("html")[0].style.overflowY = "auto";
        }
    }, [
        trigger
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
        children: trigger && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-0 left-0 bottom-0 right-0 bg-black/25 flex-middle z-40 p-3",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    ref: windowBox,
                    className: "md:px-8 md:py-8 bg-white rounded-2xl px-36 py-14 flex-middle flex-col gap-7 max-w-[676px] " + classNameCustom,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-middle flex-col gap-2 max-w-[330px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "text-black-100 text-2xl font-semibold text-center",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-black/40 text-sm text-center",
                                    children: children[0]
                                })
                            ]
                        }),
                        children.slice(1)
                    ]
                })
            })
        })
    });
}


/***/ })

};
;