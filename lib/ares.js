export async function getFirms() {
	// Fetch data from external API
	const res = await fetch(
		`https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_std.cgi?ico=27074358`
	);
	console.log(res.text());
	return await res.text();
}
