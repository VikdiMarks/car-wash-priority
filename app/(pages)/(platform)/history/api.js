import { axiosInstance } from "@/app/utils/axios-instance";
import { readCookie } from "@/app/utils/cookie";

export async function getHistory() {
	try {
		const res = await axiosInstance.get(
			`${process.env.host}/api/v2/organizations/${readCookie("organization_id")}/transactions`,
		);

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
