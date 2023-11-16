import Image from "next/image";

export default function Item({number, source, type, sum, address, date}) {
	return (
		<div className={"border-b border-black/5 flex w-full text-black-100"}>
			<div className={"flex items-center gap-1 basis-1/6 py-3"}>{number}</div>
			<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>{source}</div>
			<div className={"basis-1/6 px-4 lg:px-3 py-3 text-red--secondary flex items-center gap-[5px]"}>
				<div className="w-[6px] h-[6px] bg-red--secondary rounded-full"></div>
				<p>{type}</p>
			</div>
			<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
				{sum} <span className={"font-bold"}>₽</span>
			</div>
			<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3 text-purple--secondary"}>
				{address}
			</div>
			<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
				<Image width={16} height={16} src={"/img/icons/calendar.svg"} alt={"Иконка календаря"} />
				<p>{date}</p>
			</div>
		</div>
	)
}
