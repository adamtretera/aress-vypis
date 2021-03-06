import axios from "axios";

export default async (req, res) => {
	const url = `https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_std.cgi?ico=27074358`;

	await axios
		.get(url, {
			"Content-Type": "application/xml; charset=utf-8",
		})
		.then(({ data }) => {
			var parser = require("fast-xml-parser");

			var options = {
				attributeNamePrefix: "@_",
				attrNodeName: "attr", //default is 'false'
				textNodeName: "#text",
				ignoreAttributes: true,
				ignoreNameSpace: true,
				allowBooleanAttributes: false,
				parseNodeValue: false,
				parseAttributeValue: false,
				trimValues: true,
				cdataTagName: "__cdata", //default is 'false'
				cdataPositionChar: "\\c",
				parseTrueNumberOnly: false,
				arrayMode: false, //"strict"
			};
			const data1 = parser.parse(data, options).Ares_odpovedi.Odpoved;

			res.status(200).json(data1);
		})
		.catch(({ err }) => {
			res.status(400).json({ err });
		});
};
