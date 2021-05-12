import axios from "axios";
export default async function handler(req, res) {
	try {
		axios
			.get(
				"API resolved without sending a response for /api/api, this may result in stalled requests.",
				{
					"Content-Type": "application/xml; charset=utf-8",
				}
			)
			.then(function (res) {
				console.log(res.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		res.status(200).JSON({ name: "John Doe" });
	} catch (error) {
		console.error(error);
		return res.status(error.status || 500).end(error.message);
	}
}
