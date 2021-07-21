import React from "react";
import { Table, Tr, Th, Td } from "./Table";

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
					<Td>Idetifikační číslo firmy</Td>
					<Td>Daňové identifikační číslo firmy</Td>

					<Td>Název firmy (živnostníka)</Td>
					<Td>Kdy tato společnost vznikla ?</Td>
					<Td>Sídlo firmy ve tvaru (adresa, město, PSČ)</Td>
				</tr>
			</tbody>
		</Table>
	);
};

export default HowTo;
