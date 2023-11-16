import clsx from "clsx";
import Image from "next/image";

export default function Item({ id, created_at, status_name }) {
	return (
		<div className={"flex w-full text-black-100"}>
			<div className={clsx("flex items-center py-2 text-black-100 gap-2")} style={{ flexBasis: "25%" }}>
				<Image width={24} height={24} src={"/img/icons/pdf.svg"} alt={"Иконка PDF"} />
				<p>{id}</p>
			</div>
			<div className={clsx("flex items-center py-2 text-black-100")} style={{ flexBasis: "25%" }}>
				<Image width={16} height={16} src={"/img/icons/calendar.svg"} alt={"Иконка календаря"} />
				<p>{created_at}</p>
			</div>
			<div className={clsx("flex items-center py-2 text-black-100 gap-2")} style={{ flexBasis: "25%" }}>
				<div
					className={clsx("w-[6px] h-[6px] rounded-full", {
						"bg-green--main": status_name === "Оплачен" || status_name === "Принят",
						"bg-red--secondary": status_name === "wait_pay",
						"bg-[#59A8D4]": status_name === "Ожидание",
					})}></div>
				<p
					className={clsx({
						"text-green--main": status_name === "Оплачен" || status_name === "Принят",
						"text-red--secondary": status_name === "wait_pay",
						"text-[#59A8D4]": status_name === "Ожидание",
					})}>
					{(() => {
						switch (status_name) {
							case "wait_pay":
								return "Не оплачен";
							default:
								return status_name;
						}
					})()}
				</p>
			</div>
			<div className={clsx("flex items-center py-2 text-black-100 gap-2")} style={{ flexBasis: "25%" }}>
				<Image
					className={"cursor-pointer mx-auto duration-300 hover:scale-125"}
					width={16}
					height={16}
					src={"/img/icons/download.svg"}
					alt={"Иконка загрузки"}
				/>
			</div>
		</div>
	);
}
