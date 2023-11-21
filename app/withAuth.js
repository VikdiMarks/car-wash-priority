// withAuth.js

import { useRouter } from "next/router";
import { useEffect } from "react";
import { readCookie } from "@/app/utils/cookie";

const withAuth = WrappedComponent => {
	return props => {
		const router = useRouter();

		useEffect(() => {
			const bearer_token = readCookie("bearer_token");
			let isAuthenticated = false;

			if (bearer_token) {
				isAuthenticated = true;
			}

			if (!isAuthenticated) {
				router.push("/auth");
			}
		}, []);
		return <WrappedComponent {...props} />;
	};
};

export default withAuth;
