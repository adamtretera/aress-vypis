import React from "react";
import { Table, Tr, Th, Td } from "./Table";
import { BiBuildingHouse } from "react-icons/bi";

const HowTo = () => {
	return (
		<Table>
			<thead>
				<Tr className="border-black border-2 dark:border-white bg-gray-200">
					<Th>IČO</Th>
					<Th>DIČ</Th>
					<Th>Název firmy</Th>
					<Th>Datum vzniku</Th>
					<Th>Adresa</Th>
				</Tr>
			</thead>
			<tbody>
				<tr className="bg-white hover:bg-gray-200 transition ease-in duration-100 dark:bg-black">
					<Td colSpan="5">
						Hledejte na aresu podle IČO nebo názvu společnosti
					</Td>
				</tr>
			</tbody>
		</Table>
	);
};

export default HowTo;
