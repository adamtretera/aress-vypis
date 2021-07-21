import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="m-auto max-w-3/4 text-center">
				<Component {...pageProps} />
			</div>
			<footer className="">
				<Footer />
			</footer>
		</>
	);
}

export default MyApp;
