"use client";

import { useEffect, useState } from "react";
import ZeroContent from "@/app/(pages)/(platform)/_components/ZeroContent";
import Image from "next/image";
import Table from "@/app/(pages)/(platform)/history/_components/Table";
import Draggable from "react-draggable";
import { getOrganizationData } from "@/app/(pages)/(platform)/platform";
import { getHistory } from "@/app/(pages)/(platform)/history/api";
import { DatePicker, Stack } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function History() {
	const [isHaveContent, setIsHaveContent] = useState(null);

	useEffect(() => {
		console.log("history");
		const fetchData = async () => {
			try {
				const data = await getHistory();
				if (data) {
					setIsHaveContent(data);
				}
			} catch (error) {
				console.error("Ошибка при получении данных об организации", error);
			}
		};

		fetchData();
	}, []);

	if (isHaveContent) {
		return (
			<section className={"flex flex-col gap-7"}>
				<div className={"bg-[#F7F9FB] rounded-lg w-full p-2 flex items-center gap-4 lg:gap-2 flex-wrap"}>
					<div className={"relative w-1/2 md:w-full"}>
						<Image
							className={"absolute left-1.5 top-1/2 -translate-y-1/2"}
							width={16}
							height={16}
							src={"/img/icons/search.svg"}
							alt={"Поиск"}
						/>
						<input
							className={
								"w-full border border-black/10 bg-white/80 rounded-lg text-sm px-4 py-1 pl-[26px] placeholder:text-black/20 text-black-100"
							}
							placeholder={"Поиск по водителю или месту"}
						/>
					</div>
					<div className={"relative grow md:w-full"}>
						<input
							className={
								"w-full border border-black/10 bg-white/80 rounded-lg text-sm px-4 py-1 pr-[44px] placeholder:text-black/20 text-black-100"
							}
							placeholder={"Тип операции"}
						/>
						<Image
							className={"absolute right-3 top-1/2 -translate-y-1/2"}
							width={16}
							height={16}
							src={"/img/icons/arrow-range.svg"}
							alt={"Тип операции"}
						/>
					</div>
					{/* TODO: поправить сьезжающие иконки календарей в инпутах (мобилы) */}
					<div className="flex items-center gap-2 md:w-full md:flex-col w-full">
						<div className={"relative max-w-[166px] md:w-full md:max-w-full"}>
							<DatePicker
								format="MM/dd/yyyy"
								className={
									"text-center w-full border border-black/10 bg-white/80 rounded-lg text-sm placeholder:text-black/20 text-black-100"
								}
								placeholder={"Дата от"}
							/>
						</div>
						<div className={"w-1 h-[1px] bg-black md:hidden"} />
						<div className={"relative max-w-[166px] md:w-full md:max-w-full"}>
							<DatePicker
								format="MM/dd/yyyy"
								className={
									"text-center w-full border border-black/10 bg-white/80 rounded-lg text-sm placeholder:text-black/20 text-black-100"
								}
								placeholder={"Дата до"}
							/>
						</div>
					</div>
				</div>
				<Table data={isHaveContent} />
			</section>
		);
	} else {
		return (
			<div className={"flex-middle min-h-screen"}>
				<ZeroContent text={"Тут будут отображаться операции по балансу организации"} />
			</div>
		);
	}
}
