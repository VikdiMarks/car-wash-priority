"use strict";
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 80228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ss: () => (/* binding */ createByCalc),
  D2: () => (/* binding */ getOrganizationData),
  cK: () => (/* binding */ getPayData),
  YD: () => (/* binding */ reg),
  CH: () => (/* binding */ reqContactData),
  pF: () => (/* binding */ reqPayData),
  a_: () => (/* binding */ setData),
  eq: () => (/* binding */ verifyTel)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./app/utils/axios-instance.js
var axios_instance = __webpack_require__(84090);
;// CONCATENATED MODULE: ./app/utils/readCookie.js
function readCookie(name) {
    const matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    console.log({
        operation: "readCookie",
        matches,
        name
    });
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

;// CONCATENATED MODULE: ./app/(pages)/auth/reg.js



async function reg(data) {
    try {
        const res = await axios/* default */.Z.post(`${"https://eco.null-it.com"}/api/v2/organizations/registration/create`, data);
        document.cookie = "organization_id=; expires=-1;";
        document.cookie = "phone=; expires=-1;";
        if (res.status === 200) {
            document.cookie = "organization_id=" + res.data.organization_id;
            document.cookie = "phone=" + data.phone;
            return true;
        }
        console.log("Произошла ошибка в запросе на авторизацию:", res.status);
        return false;
    } catch (error) {
        console.log("Произошла ошибка в запросе на авторизацию:", error);
        return error.response.data;
    }
}
async function verifyTel(data) {
    try {
        const res = await axios/* default */.Z.post(`${"https://eco.null-it.com"}/api/v2/organizations/registration/auth`, data);
        document.cookie = "bearer_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
        if (res.status === 200) {
            const tokenExpiryTime = new Date(res.data.auth.expires_at).getTime();
            document.cookie = "bearer_token=" + res.data.auth.bearer_token + "; path=/; samesite=lax; expires=" + new Date(tokenExpiryTime).toUTCString();
            return true;
        } else {
            console.log("Неудачная проверка номера:", res.status);
            return res;
        }
    } catch (error) {
        console.log("Неудачная проверка номера:", error);
        return error.response.data.errors;
    }
}
async function setData(data) {
    try {
        const res = await axios_instance/* axiosInstance */.b.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-data`, data);
        if (res.status === 200) {
            return true;
        } else {
            console.log("Неудачное заполнение данных:", res.status);
            return false;
        }
    } catch (error) {
        console.log("Неудачное заполнение данных:", error);
        return error.response.data.errors;
    }
}
async function reqPayData(data) {
    try {
        const res = await axios_instance/* axiosInstance */.b.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-pay-data`, data);
        if (res.status === 200) {
            return true;
        } else {
            console.log("Неудачное заполнение данных:", res.status);
            return false;
        }
    } catch (error) {
        console.log("Неудачное заполнение данных:", error);
        return error.response.data.errors;
    }
}
async function reqContactData(data) {
    try {
        const res = await axios_instance/* axiosInstance */.b.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-contact-data`, data);
        if (res.status === 200) {
            return true;
        } else {
            console.log("Неудачное заполнение данных:", res.status);
            return false;
        }
    } catch (error) {
        console.log("Неудачное заполнение данных:", error);
        return error.response.data.errors;
    }
}
async function getOrganizationData() {
    try {
        const res = await axios_instance/* axiosInstance */.b.get(`${"https://eco.null-it.com"}/api/v2/organizations/${readCookie("organization_id")}`);
        if (res.status === 200) {
            return res.data.data;
        } else {
            console.log("Неудачная проверка данных:", res.status);
            return false;
        }
    } catch (error) {
        console.log("Неудачная проверка данных:", error);
        return error.response.data.errors;
    }
}
async function getPayData() {
    try {
        const res = await axios_instance/* axiosInstance */.b.get(`${"https://eco.null-it.com"}/api/v2/organizations/${readCookie("organization_id")}/registration/get-pay-data`);
        if (res.status === 200) {
            return res.data;
        } else {
            console.log("get-pay-data:", res.status);
            return false;
        }
    } catch (error) {
        console.log("get-pay-data:", error);
        return error.response.data.errors;
    }
}
async function createByCalc(data) {
    try {
        const res = await axios_instance/* axiosInstance */.b.post(`/api/v2/organizations/${readCookie("organization_id")}/invoices/create-by-calc`, data);
        if (res.status === 200 || res.status === 201) {
            return res.data.organization_invoice;
        } else {
            console.log("Неудачное заполнение данных:", res.status);
            return false;
        }
    } catch (error) {
        console.log("Неудачное заполнение данных:", error);
        return error.response.data.errors;
    }
}


/***/ })

};
;