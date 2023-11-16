import Table from "@/app/(pages)/(platform)/bills-and-acts/_components/Table";

export default function Acts({ data }) {
	return (
		<Table
			head={[
				{
					title: "Название",
				},
				{
					title: "Дата формирования",
					canBeSorted: true,
				},
				{
					title: "Дата подтверждения",
				},
				{
					title: "Статус",
				},
				{
					title: "Скачать",
				},
			]}
			content={data}
		/>
	);
}
