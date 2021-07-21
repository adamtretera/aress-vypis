import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="m-auto max-w-3/4 text-center">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
