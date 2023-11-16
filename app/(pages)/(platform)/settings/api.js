import { axiosInstance } from "@/app/utils/axios-instance";
import { readCookie } from "@/app/utils/cookie";

export async function editName(data) {
	try {
		const res = await axiosInstance.post(`${process.env.host}/api/v2/user/set-name`, data);

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

export async function editEmail(data) {
	try {
		const res = await axiosInstance.post(`${process.env.host}/api/v2/user/set-email`, data);

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
