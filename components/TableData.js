import React from "react";
import { Table, Tr, Th, Td } from "./Table";
import Link from "next/link";

const TableData = ({ companies }) => {
	return (
		<Table>
			<thead>
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
						<Td>{company.ICO}</Td>
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
	);
};

export default TableData;
