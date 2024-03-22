export function readCookie(name) {
	let breakMethod = false;

	setTimeout(
		() => {
			breakMethod = true;
		},
		3 * 60 * 3600,
	);

	if (typeof document !== "undefined" && !breakMethod) {
		const matches = document.cookie.match(
			new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
		);
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	return undefined;
}
