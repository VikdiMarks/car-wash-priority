exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 21527:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89298))

/***/ }),

/***/ 9048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ZeroContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function ZeroContent({ text }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-middle flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 100,
                height: 100,
                src: "/img/pictures/zero-content.png",
                alt: "Тут пусто"
            }),
            text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-black/40 text-center",
                children: text
            })
        ]
    });
}


/***/ }),

/***/ 28811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ getUsers),
/* harmony export */   s: () => (/* binding */ getHistory)
/* harmony export */ });
/* harmony import */ var _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84090);
/* harmony import */ var _app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18396);


async function getHistory(page = 1, perPage = 15) {
    try {
        const res = await _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(`${"https://eco.null-it.com"}/api/v2/organizations/${(0,_app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .readCookie */ .v)("organization_id")}/transactions?per_page=${perPage}&page=${page}`);
        if (res.status === 200) {
            return res.data;
        }
        console.error("Ошибка при получении history:", res.status);
        return false;
    } catch (error) {
        console.error("Ошибка при получении history:", error);
        return false;
    }
}
async function getUsers() {
    try {
        const res = await _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(`${"https://eco.null-it.com"}/api/v2/organizations/${(0,_app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .readCookie */ .v)("organization_id")}/users`);
        if (res.status === 200) {
            return res.data;
        }
        console.error("Ошибка при получении users:", res.status);
        return false;
    } catch (error) {
        console.error("Ошибка при получении users:", error);
        return false;
    }
}


/***/ }),

/***/ 89298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/(pages)/(platform)/_components/ZeroContent.jsx
var ZeroContent = __webpack_require__(9048);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(10566);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./app/utils/utils.js
var utils = __webpack_require__(74058);
;// CONCATENATED MODULE: ./app/(pages)/(platform)/_components/Operation.jsx



function Operation({ type, value, user, date }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex gap-2 p-1 w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 24,
                        height: 24,
                        src: `/img/icons/${type}.svg`,
                        alt: type === "refill" ? "Пополнение" : "Списание"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-black/10 w-[1px] h-[14px] mb-0.5"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-sm text-black-100",
                        children: [
                            (type === "debit" ? "- " : "+ ") + value,
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-bold",
                                children: "₽"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-black/40",
                        children: user ? (0,utils/* formatPhoneNumber */.u)(user.phone) : ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-black/20",
                        children: (0,utils/* formatDate */.p)(date)
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/_components/Button.jsx
var Button = __webpack_require__(38870);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./app/(pages)/(platform)/_components/MenuItem.jsx




function MenuItem({ text, path, icon }) {
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,clsx/* default */.Z)("md:w-full rounded-lg flex items-center gap-3 p-3 md:p-3 md:px-5 lg:p-1.5 text-sm text-black-100 hover:bg-black/5 duration-300", {
            "bg-black/5 text-green--main font-semibold": pathname === path,
            "cursor-pointer": pathname !== path
        }),
        onClick: ()=>router.push(path),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (0,clsx/* default */.Z)({
                    "filter-svg-to-green": pathname === path
                }),
                width: 24,
                height: 24,
                src: `/img/icons/${icon}.svg`,
                alt: "Главная"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: text
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/_components/ModalWindow.jsx + 1 modules
var ModalWindow = __webpack_require__(17998);
// EXTERNAL MODULE: ./app/_components/Input.jsx
var Input = __webpack_require__(96665);
// EXTERNAL MODULE: ./app/(pages)/(platform)/platform.js
var platform = __webpack_require__(62107);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(9598);
// EXTERNAL MODULE: ./app/utils/cookie.js
var cookie = __webpack_require__(18396);
;// CONCATENATED MODULE: ./app/utils/withAuth.js





const withAuth = (WrappedComponent)=>{
    return (props)=>{
        (0,react_.useEffect)(()=>{
            const bearer_token = (0,cookie/* readCookie */.v)("bearer_token");
            let isAuthenticated = false;
            if (bearer_token) {
                isAuthenticated = true;
            }
            if (!isAuthenticated) {
                (0,navigation.redirect)("/auth");
            }
        }, []);
        return /*#__PURE__*/ jsx_runtime_.jsx(WrappedComponent, {
            ...props
        });
    };
};
/* harmony default export */ const utils_withAuth = (withAuth);

// EXTERNAL MODULE: ./app/(pages)/auth/_components/Footer.jsx
var Footer = __webpack_require__(82943);
// EXTERNAL MODULE: ./app/(pages)/(platform)/history/api.js
var api = __webpack_require__(28811);
;// CONCATENATED MODULE: ./app/(pages)/(platform)/layout.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 














function PlatformLayout({ children }) {
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const [isHaveContent, setIsHaveContent] = (0,react_.useState)(false);
    const [history, setHistory] = (0,react_.useState)([]);
    const [users, setUsers] = (0,react_.useState)([]);
    const [windowWidth, setWindowWidth] = (0,react_.useState)(0);
    const [organizationInfo, setOrganizationInfo] = (0,react_.useState)({});
    const [invoices, setInvoices] = (0,react_.useState)({});
    (0,react_.useEffect)(()=>{
        setWindowWidth(window.innerWidth);
    }, []);
    (0,react_.useEffect)(()=>{
        setIsHaveContent(window.location.href.split("#")[1] === "fill");
    }, []);
    (0,react_.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const data = await (0,platform/* getOrganizationData */.D2)();
                // console.log("data", data);
                if (data) {
                    setOrganizationInfo(data);
                }
            } catch (error) {
                console.error("Ошибка при получении данных об организации", error);
            }
        };
        fetchData();
    }, []);
    (0,react_.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const data = await (0,api/* getHistory */.s)(1, 999);
                if (data) {
                    setHistory(data.models);
                }
            } catch (error) {
                console.error("Ошибка при получении данных об организации", error);
            }
        };
        fetchData();
    }, []);
    (0,react_.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const data = await (0,api/* getUsers */.R)();
                if (data) {
                    console.log("users", data);
                    setUsers(data.data);
                }
            } catch (error) {
                console.error("Ошибка при получении данных об организации", error);
            }
        };
        fetchData();
        if (history) {
            const result = history.map((transaction)=>{
                transaction.user = users.find((user)=>user.id === transaction.user_id);
                return transaction;
            });
        }
    }, [
        history
    ]);
    const [showModalRefill, setShowModalRefill] = (0,react_.useState)(false);
    const [menuOpen, setMenuOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (0,clsx/* default */.Z)("flex w-screen min-h-screen max-h-screen bg-white md:flex-col md:max-h-full md:items-center"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        className: (0,clsx/* default */.Z)("w-full hidden justify-between items-center p-4 md:flex", {
                            "fixed z-50 top-0 left-0 right-0": menuOpen,
                            "relative z-50": !menuOpen
                        }),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "w-[35px] h-[30px] relative focus:outline-none p-2.5 bg-zinc-100 rounded",
                                onClick: ()=>setMenuOpen(!menuOpen),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (0,clsx/* default */.Z)("block absolute h-[2px] w-5 bg-black bg-current transform transition duration-500 ease-in-out rounded", {
                                                "rotate-45": menuOpen,
                                                "-translate-y-1.5": !menuOpen
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (0,clsx/* default */.Z)("block absolute h-[2px] w-5 bg-black transform transition duration-500 ease-in-out rounded", {
                                                "opacity-0": menuOpen
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (0,clsx/* default */.Z)("block absolute h-[2px] w-5 bg-black transform  transition duration-500 ease-in-out rounded", {
                                                "-rotate-45": menuOpen,
                                                " translate-y-1.5": !menuOpen
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: "34",
                                height: "42",
                                src: "/img/logo.svg",
                                alt: "Лого"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "block opacity-60 text-zinc-900 text-[10px] font-semibold leading-tight",
                                        children: "Баланс"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-zinc-900 text-2xl font-semibold leading-9",
                                                children: organizationInfo?.balance
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                width: 24,
                                                height: 24,
                                                src: "/img/icons/currency-rub.svg",
                                                alt: "Знак рубля"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                        className: (0,clsx/* default */.Z)("md:border-none overflow-hidden w-[252px] min-w-[252px] p-4 pt-6 lg:p-2 border-r border-solid border-black/10 md:w-full md:fixed md:min-h-screen md:max-h-screen top-0 left-0 md:bg-white z-30 md:justify-center transition-all duration-300 md:overflow-y-auto md:pt-28", {
                            "translate-x-0": menuOpen,
                            "md:-translate-x-full": !menuOpen
                        }),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col justify-between gap-[10px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "md:px-20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "md:py-4 text-center text-white text-sm font-semibold w-full py-2.5 px-2 bg-green--main rounded-2xl",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "\xab",
                                                    organizationInfo?.name,
                                                    "\xbb"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-[#E5ECF6] py-[22px] px-6 w-full mt-4 rounded-2xl text-black-100 font-semibold md:hidden",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-sm flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Баланс"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            width: 24,
                                                            height: 24,
                                                            src: "/img/icons/currency-rub.svg",
                                                            alt: "Знак рубля"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-2xl mt-2 mb-6",
                                                    children: organizationInfo?.balance
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "md:block mt-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        type: "success-secondary",
                                                        clickHandler: ()=>setShowModalRefill(true),
                                                        children: "Пополнить"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col gap-1 md:mb-1 md:mt-4 md:items-center md:px-20",
                                    onClick: ()=>setMenuOpen(false),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                            text: "Главная",
                                            icon: "statistic",
                                            path: "/home"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                            text: "Водители",
                                            icon: "car",
                                            path: "/drivers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                            text: "История",
                                            icon: "box",
                                            path: "/history"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                            text: "Счета и акты",
                                            icon: "document",
                                            path: "/bills-and-acts"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                            text: "Настройки",
                                            icon: "passport",
                                            path: "/settings"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-3 w-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                type: "danger-secondary",
                                                clickHandler: ()=>{
                                                    document.cookie = "bearer_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
                                                    document.cookie = "phone=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
                                                    document.cookie = "organization_id=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
                                                    router.push("/auth");
                                                },
                                                children: "Выйти"
                                            })
                                        })
                                    ]
                                }),
                                windowWidth > 768 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative flex-middle flex-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute top-0 h-[1px] left-[-16px] right-[-16px] bg-black/10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "my-4",
                                            width: 36,
                                            height: 42,
                                            src: "/img/logo.svg",
                                            alt: "Логотип"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-black/40 text-center",
                                            children: "\xa9 Car Wash Priority 2023"
                                        })
                                    ]
                                }),
                                windowWidth < 768 && /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full grow p-6 pb-4 lg:p-3 flex flex-col overflow-y-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grow",
                                children: children
                            }),
                            windowWidth > 768 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex gap-12 text-black/40 mt-12 lg:flex-col lg:gap-3 lg:items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:opacity-75 ml-auto lg:ml-0",
                                        href: "#",
                                        children: "Поддержка"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:opacity-75",
                                        href: "#",
                                        children: "Политика конфиденциальности"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:opacity-75",
                                        href: "/personal-data-processing",
                                        children: "Правила обработки персональных данных"
                                    })
                                ]
                            })
                        ]
                    }),
                    pathname !== "/history" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                        className: (0,clsx/* default */.Z)("md:hidden md:block md:pb-5 md:mt-6 md:w-full md:border-t md:border-black/10 min-w-[252px] lg:px-2 relative w-[280px] border-l border-solid border-black/10 px-6 py-[72px] overflow-y-hidden", {
                            "": !isHaveContent,
                            "flex flex-col gap-2 md:items-center": isHaveContent
                        }),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "text-black-100 text-sm font-semibold text-center absolute top-6 left-0 right-0 ",
                                children: "История операций"
                            }),
                            history ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full flex flex-col gap-2 items-center justify-items-start h-full overflow-y-auto",
                                children: history.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Operation, {
                                        type: item.type === "waste" ? "debit" : "refill",
                                        value: item.value,
                                        user: item.user,
                                        date: item.created_at
                                    }, item.id))
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(ZeroContent/* default */.Z, {
                                text: "Тут будут отображаться операции по балансу организации"
                            })
                        ]
                    }),
                    windowWidth <= 768 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative flex-middle flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute top-0 h-[1px] left-[-16px] right-[-16px] bg-black/10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "my-4",
                                        width: 36,
                                        height: 42,
                                        src: "/img/logo.svg",
                                        alt: "Логотип"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-black/40 text-center",
                                        children: "\xa9 Car Wash Priority 2023"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pb-4 flex gap-12 text-black/40 mt-6 lg:flex-col lg:gap-3 lg:items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:opacity-75 ml-auto lg:ml-0",
                                        href: "#",
                                        children: "Поддержка"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:opacity-75",
                                        href: "#",
                                        children: "Политика конфиденциальности"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:opacity-75",
                                        href: "/personal-data-processing",
                                        children: "Правила обработки персональных данных"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalWindow/* default */.Z, {
                trigger: showModalRefill,
                setTrigger: (arg)=>setShowModalRefill(arg),
                title: "Пополнить баланс",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-middle flex-col gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Укажите сумму пополнения."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Счет будет отправлен на почту и появится на странице счетов"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                        label: "Сумма пополнения",
                        setValue: (sum)=>setInvoices({
                                sum: sum
                            })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[388px] md:w-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            type: "success",
                            clickHandler: async ()=>{
                                const res = await (0,platform/* createInvoices */.Jp)(invoices);
                                if (res) {
                                    setShowModalRefill(false);
                                    setInvoices({});
                                }
                            },
                            children: "Получить счет на оплату"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const layout = (utils_withAuth(PlatformLayout));


/***/ }),

/***/ 62107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D2: () => (/* binding */ getOrganizationData),
/* harmony export */   Jp: () => (/* binding */ createInvoices),
/* harmony export */   cK: () => (/* binding */ getPayData)
/* harmony export */ });
/* unused harmony export getContactData */
/* harmony import */ var _app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18396);
/* harmony import */ var _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84090);



async function getOrganizationData() {
    try {
        const res = await _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(`${"https://eco.null-it.com"}/api/v2/organizations/${(0,_app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .readCookie */ .v)("organization_id")}`);
        if (res.status === 200) {
            return res.data.data;
        }
        console.error("Ошибка при получении данных об организации:", res.status);
        return false;
    } catch (error) {
        console.error("Ошибка при получении данных об организации:", error);
        return false;
    }
}
async function getPayData() {
    try {
        const res = await _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.get(`${"https://eco.null-it.com"}/api/v2/organizations/${(0,_app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .readCookie */ .v)("organization_id")}/registration/get-pay-data`);
        if (res.status === 200) {
            return res.data.organization_pay_data;
        }
        console.error("Ошибка при отправке get-pay-data:", res.status);
        return false;
    } catch (error) {
        console.error("Ошибка при отправке get-pay-data:", error);
        return false;
    }
}
async function getContactData() {
    try {
        const res = await axiosInstance.get(`${"https://eco.null-it.com"}/api/v2/organizations/${readCookie("organization_id")}/registration/get-contact-data`);
        if (res.status === 200) {
            return res.data.organization_contact_data;
        }
        console.error("Ошибка при отправке get-pay-data:", res.status);
        return false;
    } catch (error) {
        console.error("Ошибка при отправке get-pay-data:", error);
        return false;
    }
}
async function createInvoices(data) {
    try {
        const res = await _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .b.post(`${"https://eco.null-it.com"}/api/v2/organizations/${(0,_app_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .readCookie */ .v)("organization_id")}/invoices/create`, data);
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
        console.log("res", res);
        alert(res);
        return false;
    } catch (error) {
        alert(error.response.data.message);
        return false;
    }
}


/***/ }),

/***/ 74058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ formatDate),
/* harmony export */   u: () => (/* binding */ formatPhoneNumber)
/* harmony export */ });
function formatPhoneNumber(number) {
    const cleanNumber = number.replace(/\D/g, "");
    if (cleanNumber.length !== 11) {
        console.error("Incorrect phone number format");
        return number;
    }
    return `+${cleanNumber.slice(0, 1)} (${cleanNumber.slice(1, 4)}) ${cleanNumber.slice(4, 7)}-${cleanNumber.slice(7, 9)}-${cleanNumber.slice(9)}`;
}
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}


/***/ }),

/***/ 31178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\projects\car-wash-priority\app\(pages)\(platform)\layout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;