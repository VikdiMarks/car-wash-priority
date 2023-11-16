"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import ZeroContent from "@/app/(pages)/(platform)/_components/ZeroContent";
import Bills from "@/app/(pages)/(platform)/bills-and-acts/_components/Bills";
import Acts from "@/app/(pages)/(platform)/bills-and-acts/_components/Acts";
import { getHistory } from "@/app/(pages)/(platform)/history/api";
import { getActs, getInvoices } from "@/app/(pages)/(platform)/bills-and-acts/api";

export default function BillsAndActs() {
	const [subpage, setSubpage] = useState("счета");
	const [isBillsContent, setIsBillsContent] = useState([]);
	const [isActsContent, setIsActsContent] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getInvoices();
				if (data) {
					setIsBillsContent(data.models);
				}
			} catch (error) {
				console.error("Ошибка при получении данных об организации", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getActs();
				if (data) {
					setIsActsContent(data.models);
				}
			} catch (error) {
				console.error("Ошибка при получении данных об организации", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className={"w-full h-full"}>
			<nav className={"text-black/40 text-sm flex gap-8 ml-2"}>
				<button
					className={clsx(
						"before:transition-all before:duration-300 relative hover:text-black-100 duration-300 before:absolute before:bottom-[-4px] before:h-0.5 before:bg-black-100 before:rounded-lg",
						subpage === "счета"
							? "cursor-default text-black-100 font-semibold before:w-full"
							: "before:w-0",
					)}
					onClick={() => setSubpage("счета")}>
					Счета
				</button>
				<button
					className={clsx(
						"before:transition-all before:duration-300 relative hover:text-black-100 duration-300 before:absolute before:bottom-[-4px] before:h-0.5 before:bg-black-100 before:rounded-lg",
						subpage === "акты" ? "cursor-default text-black-100 font-semibold before:w-full" : "before:w-0",
					)}
					onClick={() => setSubpage("акты")}>
					Акты
				</button>
			</nav>
			<div
				className={"mt-6 mb-2 bg-[#F7F9FB] rounded-lg w-full p-2 flex items-center gap-4 md:gap-3.5 flex-wrap"}>
				<div className={"relative grow md:w-full"}>
					<Image
						className={"absolute left-1.5 top-1/2 -translate-y-1/2"}
						width={16}
						height={16}
						src={"/img/icons/search.svg"}
						alt={"Поиск"}
					/>
					<input
						className={
							"focus:border-black/20 w-full border border-black/10 bg-white/80 rounded-lg text-sm px-4 py-1 pl-[26px] placeholder:text-black/20 text-black-100"
						}
						placeholder={"Поиск по водителю или месту"}
					/>
				</div>
				<div className={"relative w-[200px] md:w-full"}>
					<input
						className={
							"w-full border border-black/10 bg-white/80 rounded-lg text-sm px-4 py-1 pr-[44px] placeholder:text-black/20 text-black-100"
						}
						placeholder={"Статус"}
					/>
					<Image
						className={"absolute right-3 top-1/2 -translate-y-1/2"}
						width={16}
						height={16}
						src={"/img/icons/arrow-range.svg"}
						alt={"Тип операции"}
					/>
				</div>
			</div>
			{subpage === "счета" ? <Bills data={isBillsContent} /> : <Acts data={isActsContent} />}
		</section>
	);
}
