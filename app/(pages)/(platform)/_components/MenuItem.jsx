import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MenuItem({ id, text, path, icon, active, switchLoadingPage }) {
	const router = useRouter();

	return (
		<div
			className={clsx(
				"md:w-full rounded-lg flex items-center gap-3 p-3 md:p-3 md:px-5 lg:p-1.5 text-sm text-black-100 hover:bg-black/5 duration-300",
				{
					"bg-black/5 text-green--main font-semibold": active,
					"cursor-pointer": !active,
				},
			)}
			onClick={() => {
				switchLoadingPage(id, path);
				router.push(path);
			}}>
			<Image
				className={clsx({
					"filter-svg-to-green": active,
				})}
				width={24}
				height={24}
				src={`/img/icons/${icon}.svg`}
				alt="Главная"
			/>
			<p>{text}</p>
		</div>
	);
}
