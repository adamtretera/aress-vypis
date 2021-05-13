import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="m-auto max-w-3xl text-center mt-96">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
