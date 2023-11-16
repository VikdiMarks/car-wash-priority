"use client";

import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

import toast from "react-hot-toast";
import Checkbox from "@/app/_components/Checkbox";
import { useEffect, useState } from "react";
import { getContactData, getOrganizationData, getPayData } from "@/app/(pages)/(platform)/platform";
import { editEmail, editName } from "@/app/(pages)/(platform)/settings/api";

const repeatingStyles = {
	block: "rounded-2xl bg-[#F7F9FB] p-6 w-full gap-6 flex flex-col",
	title: "text-black-100 text-lg font-semibold",
};

export default function Settings() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [organizationInfo, setOrganizationInfo] = useState({});
	const [payInfo, setPayInfo] = useState({});
	const [contactInfo, setContactInfo] = useState({});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getOrganizationData();
				console.log("data", data);
				if (data) {
					setOrganizationInfo(data);
					setName(data.fio);
					setEmail(data.email);
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
				const data = await getPayData();
				console.log("data", data);
				if (data) {
					setPayInfo(data);
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
				const data = await getContactData();
				console.log("data", data);
				if (data) {
					setContactInfo(data);
				}
			} catch (error) {
				console.error("Ошибка при получении данных об организации", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className={"flex-middle flex-col gap-6"}>
			<div className={repeatingStyles.block}>
				<div className={"flex flex-wrap items-center justify-between gap-4"}>
					<h1 className={repeatingStyles.title}>Информация о компании</h1>
					<p className={"text-black/40"}>
						Для изменения данных организации обратитесь в{" "}
						<span className={"text-purple--main cursor-pointer"}>службу поддержки</span>
					</p>
				</div>
				<Input type={"big-input:disabled"} label={"ИНН"} value={organizationInfo?.inn} />
				<Input type={"big-input:disabled"} label={"ОГРН"} value={organizationInfo?.ogrn} />
				<Input type={"big-input:disabled"} label={"Наименование компании"} value={organizationInfo?.name} />
				<Input type={"big-input:disabled"} label={"Юридический адрес"} value={organizationInfo?.address} />
				<div className={"flex items-center"}>
					<h1 className={repeatingStyles.title}>Платежные данные</h1>
				</div>
				<Input type={"big-input:disabled"} label={"Расчётный счёт"} value={payInfo?.settlement_number} />
				<Input type={"big-input:disabled"} label={"Название банка"} value={payInfo?.name} />
				<Input type={"big-input:disabled"} label={"БИК"} value={payInfo?.bik} />
				<Input
					type={"big-input:disabled"}
					label={"Корреспондентский счёт"}
					value={payInfo?.correspondent_account}
				/>
			</div>
			<div className={repeatingStyles.block}>
				<div className={"flex items-center justify-between gap-4  flex-wrap"}>
					<h1 className={repeatingStyles.title}>Данные пользователя</h1>
					<div className="flex-middle gap-2">
						<Button type={"medium-gray"}>Отменить</Button>
						<Button
							clickHandler={async () => {
								console.log("name", name);
								console.log("email", email);
								const resName = await editName({ name: name });
								const resEmail = await editEmail({ email: email });

								if (resName && resEmail) {
									toast.success("Изменения сохранены");
								}
							}}
							type={"medium-black"}>
							{windowWidth <= 950 ? "Сохранить" : "Сохранить изменения"}
						</Button>
					</div>
				</div>
				<Input
					type={"big-input"}
					label={"ФИО"}
					value={contactInfo?.fio}
					setValue={value => {
						setName(value);
					}}
				/>
				<Input
					type={"big-input"}
					label={"E-mail"}
					value={contactInfo?.email}
					setValue={value => setEmail(value)}
				/>
				<div className={"flex items-center"}>
					<h1 className={repeatingStyles.title}>Настройки уведомлений</h1>
				</div>
				<Checkbox title={"Счета"} opinion={"Все выставленные счета будут приходить на почту"} />
				<div className={"w-full h-[1px] bg-black/10"} />
				<Checkbox title={"Акты"} opinion={"По итогам месяца акты выполненных работ"} />
				<div className={"w-full h-[1px] bg-black/10"} />
				<Checkbox title={"Напоминания"} opinion={"Мы будет присылать уведомления при окончании баланса"} />
			</div>
		</div>
	);
}
