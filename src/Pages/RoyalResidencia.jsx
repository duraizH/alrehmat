import { Suspense } from "react"
import { Helmet } from "react-helmet"
import ContactForm from "../Components/ContactForm/ContactForm"
import RoyalHero from "../Components/RoyalHero/RoyalHero"

const RoyalResidenciaPage = () => {
	//  useEffect(() => {
	//    ReactGA.pageview(window.location.pathname + window.location.search);
	//  }, []);
	return (
		<>
			<Helmet>
				<title>Royal Residencia Al-Rehmat</title>
				<meta name="description" content="Royal Residencia Rehmat Developers" />
			</Helmet>
			<Suspense
				fallback={
					<span className="loading loading-spinner text-warning"></span>
				}
			>
				<div className="flex flex-col min-h-[100dvh]  mx-auto bg-[#ECE3D4]">
					<RoyalHero />
					{/* <RoyalLuxury />
          <RoyalPlots />
          <RoyalAmeneties /> */}
					<ContactForm />
				</div>
			</Suspense>
		</>
	)
}

export default RoyalResidenciaPage
