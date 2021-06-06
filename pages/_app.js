import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="m-auto max-w-3xl text-center grid place-items-start mt-10">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
