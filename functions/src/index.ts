const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

const getCompany = async (ico: string) => {
	const fetch = require("node-fetch");
	const url =
		"http://wwwinfo.mfcr.cz/cgi-bin/ares/darv_std.cgi?obchodni_firma=" + ico;
	console.log(url);

	const res = await fetch(url);
	console.log(ico);
	const xmlData = await res.text();
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

	if (parser.validate(xmlData) === true) {
		const data = parser.parse(xmlData, options).Ares_odpovedi.Odpoved;
		if (data.Pocet_zaznamu > 0) {
			return data.Zaznam;
		} else {
			return { error: "Nic jsme nenašli." };
		}
	} else {
		return { error: "nevalidní XML" };
	}
};

exports.ares = functions.https.onRequest(
	async (request: any, response: any) => {
		console.log(request, response);

		cors(request, response, async () => {
			const data = await getCompany(request.body);
			console.log(data);
			response.send(data);
		});
	}
);
//
