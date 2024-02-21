"use strict";
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 1210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TitleAndOpinion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TitleAndOpinion({ title, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-2 text-2xl leading-[150%] font-semibold text-black-100",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-black/40",
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 89023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VP: () => (/* binding */ verifyCode),
/* harmony export */   aH: () => (/* binding */ checkPhone),
/* harmony export */   cy: () => (/* binding */ saveOrganizationData),
/* harmony export */   oK: () => (/* binding */ sendAuthCode)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93258);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84090);




async function sendAuthCode(data) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post(`${"https://eco.null-it.com"}/api/v2/send-auth-code`, data);
        if (res.status === 200) {
            return true;
        }
        console.error("Ошибка при отправке send-auth-code:", res.status);
        return res.data;
    } catch (error) {
        console.error("Ошибка при отправке send-auth-code:", error);
        return error;
    }
}
async function verifyCode(data) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post(`${"https://eco.null-it.com"}/api/v2/login`, data);
        if (res.status === 200) {
            const tokenExpiryTime = new Date(res.data.data.expires_at).getTime();
            document.cookie = "bearer_token=" + res.data.data.bearer_token + "; path=/; samesite=lax; expires=" + new Date(tokenExpiryTime).toUTCString();
            return true;
        }
        return res.data;
    } catch (error) {
        console.error("Ошибка при авторизации:", error);
        return error.response.data;
    }
}
async function checkPhone(data) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post(`${"https://eco.null-it.com"}/api/v2/check-phone`, data);
        if (res.status === 200) {
            return res.data;
        }
        console.error("Ошибка при авторизации:", res.status);
        return res.data;
    } catch (error) {
        console.error("Ошибка при авторизации:", error);
        return error.response.data;
    }
}
async function saveOrganizationData() {
    try {
        const res = await _app_utils_axios_instance__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance */ .b.get(`/api/v2/organizations/`);
        if (res.status === 200) {
            document.cookie = "organization_id=" + res.data.data[0].id;
            return true;
        } else {
            alert(res.data.message);
            console.log("Неудачное заполнение данных:", res.status);
            return false;
        }
    } catch (error) {
        console.log("error", error);
        // alert(error.response.data.message);
        // console.log("Неудачное заполнение данных:", error);
        return false;
    }
}


/***/ })

};
;