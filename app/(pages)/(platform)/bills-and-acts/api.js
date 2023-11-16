import { axiosInstance } from "@/app/utils/axios-instance";
import { readCookie } from "@/app/utils/cookie";

export async function getInvoices() {
	try {
		const res = await axiosInstance.get(
			`${process.env.host}/api/v2/organizations/${readCookie("organization_id")}/invoices`,
		);

		if (res.status === 200) {
			return res.data;
		}
		console.error("Ошибка при получении invoices:", res.status);
		return false;
	} catch (error) {
		console.error("Ошибка при получении invoices:", error);
		return false;
	}
}

export async function getActs() {
	try {
		const res = await axiosInstance.get(
			`${process.env.host}/api/v2/organizations/${readCookie("organization_id")}/acts`,
		);

		if (res.status === 200) {
			return res.data;
		}
		console.error("Ошибка при получении invoices:", res.status);
		return false;
	} catch (error) {
		console.error("Ошибка при получении invoices:", error);
		return false;
	}
}