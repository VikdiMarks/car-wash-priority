import axios from "axios";
import { redirect } from "next/navigation";
import { axiosInstance } from "@/app/utils/axios-instance";
import { readCookie } from "@/app/utils/cookie";

export async function sendAuthCode(data) {
	try {
		const res = await axios.post(`${process.env.host}/api/v2/send-auth-code`, data);

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

export async function verifyCode(data) {
	try {
		const res = await axios.post(`${process.env.host}/api/v2/login`, data);

		if (res.status === 200) {
			const tokenExpiryTime = new Date(res.data.data.expires_at).getTime();

			document.cookie =
				"bearer_token=" +
				res.data.data.bearer_token +
				"; path=/; samesite=lax; expires=" +
				new Date(tokenExpiryTime).toUTCString();

			return true;
		}
		return res.data;
	} catch (error) {
		console.error("Ошибка при авторизации:", error);
		return error.response.data;
	}
}

export async function checkPhone(data) {
	try {
		const res = await axios.post(`${process.env.host}/api/v2/check-phone`, data);

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

export async function saveOrganizationData() {
	try {
		const res = await axiosInstance.get(`/api/v2/organizations/`);

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
