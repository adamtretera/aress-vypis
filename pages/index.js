import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TableData from "../components/TableData";
import HowTo from "../components/HowTo";
export default function Home() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [companyInfo, setCompanyInfo] = useState({});
	const [search, setSearch] = useState();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const onSubmit = async (form) => {
		setIsLoading(true);
		setCompanyInfo(useSWR(["/api/companies/" + form.spolecnost], fetcher));
		setLoading(false);
	};

	return (
		<div>
			<Head>
				<title>Ares data</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className=" min-h-screen">
				<div>
					<h1 className="text-6xl pt-6 font-bold ">Ares výpis z rejstříku</h1>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex justify-center py-8  "
					>
						<input
							className="border-2 py-2  w-1/2 px-3 border-black"
							{...register("spolecnost", { required: true })}
						/>
						{errors.exampleRequired && <span>Toto pole je povinné.</span>}
						{isLoading ? (
							<button
								type="submit"
								className="border-2 flex items-center  border-black mx-4 px-3"
								disabled
							>
								<svg
									className="animate-spin h-5 w-5 mr-3 ..."
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
								</svg>
								Načítání
							</button>
						) : (
							<button
								type="submit"
								className="border-2 flex items-center  border-black mx-4 px-3"
							>
								Vyhledat podle názvu
							</button>
						)}
					</form>
				</div>
			</main>

			<footer></footer>
		</div>
	);
}
