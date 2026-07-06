import { Suspense } from "react"
import { Helmet } from "react-helmet"
import ContactForm from "../Components/ContactForm/ContactForm"
import RoyalHero from "../Components/RoyalHero/RoyalHero"
import Loader from "../Components/Loader/Loader"

const RoyalResidenciaPage = () => {
	//  useEffect(() => {
	//    ReactGA.pageview(window.location.pathname + window.location.search);
	//  }, []);
	return (
		<>
			<Helmet>
				<title>Al-Rehmat Residencia | Al-Rehmat Developers</title>
				<meta name="description" content="Experience luxurious living at Al-Rehmat Residencia, offering prime residential plots and exceptional amenities by Al-Rehmat Developers." />
				<link rel="canonical" href="https://alrehmatdevelopers.com/projects/alrehmat-residencia" />
				<meta property="og:title" content="Al-Rehmat Residencia | Al-Rehmat Developers" />
				<meta property="og:description" content="Experience luxurious living at Al-Rehmat Residencia, offering prime residential plots and exceptional amenities by Al-Rehmat Developers." />
				<meta property="og:url" content="https://alrehmatdevelopers.com/projects/alrehmat-residencia" />
			</Helmet>
			<Suspense fallback={<Loader />}>
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
