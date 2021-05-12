const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

const getCompany = async (ico: string) => {
	const fetch = require("node-fetch");
	const res = await fetch(
		`https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_std.cgi?ico=27074358`
	);
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
		console.log(parser.parse(xmlData, options).Ares_odpovedi.Odpoved.Zaznam);
		return parser.parse(xmlData, options).Ares_odpovedi.Odpoved.Zaznam;
	} else {
		return { error: "nevalidní XML" };
	}
};

exports.ares = functions.https.onRequest(
	async (request: any, response: any) => {
		cors(request, response, async () => {
			const data = await getCompany(response.body);
			console.log(data);
			response.send(data);
		});
	}
);
//
