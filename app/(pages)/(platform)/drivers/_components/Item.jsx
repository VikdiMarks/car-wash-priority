"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

export default function Item({ phone, balance, races, deleteDriver, editDriver }) {
	const [balanceDriver, setBalanceDriver] = useState(balance);

	return (
		<div className={"flex w-full text-black-100"}>
			<div className="flex basis-1/4 items-center px-4 lg:px-1 py-2">{phone}</div>
			<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">
				<input
					className={clsx(
						"text-sm md:text-xs p-1 bg-white border border-black/10 rounded-lg w-full flex-middle text-center",
						{ "text-green--main": balanceDriver > 50, "text-red-600": balanceDriver < 50 },
					)}
					defaultValue={balanceDriver}
					onChange={e => setBalanceDriver(e.target.value)}
				/>
			</div>
			<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">{races}</div>
			<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2 justify-evenly">
				<Image
					className={"cursor-pointer duration-300 hover:scale-125"}
					width={20}
					height={20}
					src={"/img/icons/trash-can.svg"}
					alt={"Удалить"}
					onClick={deleteDriver}
				/>
			</div>
		</div>
	);
}
