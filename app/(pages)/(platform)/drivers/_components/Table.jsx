"use client";

import clsx from "clsx";
import Image from "next/image";
import Checkbox from "@/app/_components/Checkbox";
import Input from "@/app/_components/Input";
import randomstring from "randomstring";
import toast from "react-hot-toast";
import Button from "@/app/_components/Button";
import ModalWindow from "@/app/_components/ModalWindow";
import { useEffect, useState } from "react";
import Item from "@/app/(pages)/(platform)/drivers/_components/Item";
import { deleteDriver } from "@/app/(pages)/(platform)/drivers/drivers";

export default function Table({ drivers = [], updateDrivers }) {
	const [popups, setPopups] = useState({
		editDriver: false,
		deleteDriver: false,
	});

	const [popupEditDriverData, setPopupEditDriverData] = useState({
		telephone: "79204711666",
		password: "",
	});
	const [editDriverId, setEditDriverId] = useState(null);

	useEffect(() => {
		setPopupEditDriverData({ ...popupEditDriverData, password: randomstring.generate(9) });
	}, []);

	const handleDeleteUser = async () => {
		const res = await deleteDriver(editDriverId);

		await updateDrivers();
	};

	return (
		<>
			<div>
				<div className={"flex w-full border-b border-[#cccccc]"}>
					{["Номер телефона", "Баланс", "Заездов в день", "Действия"].map((title, index) => (
						<div
							className={clsx(`lg:text-center flex items-center gap-1.5 text-black/40 py-3 basis-1/4`, {
								"px-4 border-l-black-low-opacity-gradient justify-center": index !== 0,
							})}
							key={index}>
							{index === 0 && <Checkbox size={"small"} />}
							<p>{title}</p>
						</div>
					))}
				</div>
				{drivers.map(driver => (
					<Item
						phone={driver.phone}
						balance={driver.data.balance}
						races={driver.races}
						deleteDriver={() => {
							setPopups({ ...popups, deleteDriver: true });
							setEditDriverId(driver.id);
						}}
						editDriver={() => {
							setPopups({ ...popups, editDriver: true });
							setEditDriverId(driver.id);
						}}
						key={driver.phone}
					/>
				))}
			</div>
			<ModalWindow
				trigger={popups.editDriver}
				setTrigger={arg => setPopups({ ...popups, editDriver: arg })}
				title={"Редактирование водителя"}>
				<div className={"flex-middle flex-col gap-3"}>
					<span>
						Укажите номер телефона водителя, он необходим для доступа в приложение. Пароль сгенерирован
						автоматически.
					</span>
					<span>Передайте водителю данные для доступа.</span>
				</div>
				<Input
					label={"Номер телефона"}
					value={popupEditDriverData.telephone}
					setValue={text =>
						setPopupEditDriverData({ ...popupEditDriverData, phone: text.replace(/[\s-()+]/g, "") })
					}
					placeholder={"+7 (___) ___-__-__"}
					mask={"+7 (999) 999-99-99"}
					type={"mask-input"}
					getOnlyNumber
				/>
				<div className={"w-[388px] md:w-full"}>
					<Button type={"success"} clickHandler={() => setPopups({ ...popups, editDriver: false })}>
						Обновить
					</Button>
				</div>
			</ModalWindow>
			<ModalWindow
				trigger={popups.deleteDriver}
				setTrigger={arg => setPopups({ ...popups, deleteDriver: arg })}
				title={"Удаление аккаунта"}>
				<div className={"flex-middle flex-col gap-3"}>Вы уверены, что хотите удалить аккаунт:</div>
				<div className={"flex-middle text-lg text-black-100 font-semibold"}>+7 (920) 471 - 16 - 66</div>
				<div className={"w-[388px] md:w-full gap-4 flex flex-col"}>
					<Button
						type={"danger"}
						clickHandler={async () => {
							setPopups({ ...popups, deleteDriver: false });
							await handleDeleteUser();
						}}>
						Удалить
					</Button>
					<Button type={"secondary"} clickHandler={() => setPopups({ ...popups, deleteDriver: false })}>
						Отмена
					</Button>
				</div>
			</ModalWindow>
		</>
	);
}
