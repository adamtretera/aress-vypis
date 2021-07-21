import React from "react";
import { Table, Tr, Th, Td } from "./Table";
import Link from "next/link";

const TableData = ({ companies }) => {
	function copy(text) {
		var input = document.createElement("input");
		input.setAttribute("value", text);
		document.body.appendChild(input);
		input.select();
		var result = document.execCommand("copy");
		document.body.removeChild(input);
		return result;
	}
	return (
		<div className="overflow-x-auto	w-full">
			<Table>
				<thead className="whitespace-nowrap	">
					<Tr className="border-black border-2 dark:border-white bg-gray-200">
						<Th>IČO</Th>
						<Th>Název společnosti</Th>
						<Th>Datum vzniku</Th>
						<Th>Adresa</Th>
					</Tr>
				</thead>
				<tbody>
					{companies.map((company) => (
						<tr
							className="bg-white hover:bg-gray-200 transition ease-in duration-100 dark:bg-black"
							key={company.ICO}
						>
							<Td onClick={copy}>{company.ICO}</Td>
							<Td>{company.Obchodni_firma}</Td>
							<Td>{company.Datum_vzniku}</Td>
							<Td>
								{company.Identifikace.Adresa_ARES.Nazev_ulice}{" "}
								{company.Identifikace.Adresa_ARES.Cislo_domovni}
								{", "}
								{company.Identifikace.Adresa_ARES.Nazev_obce}
								{", "}
								{company.Identifikace.Adresa_ARES.PSC}
							</Td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TableData;
