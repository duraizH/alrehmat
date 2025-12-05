import { Suspense } from "react"
import { Helmet } from "react-helmet"
import ContactForm from "../Components/ContactForm/ContactForm"
import RoyalHero from "../Components/RoyalHero/RoyalHero"

const RoyalResidenciaPage = () => {
	return (
		<>
			<Helmet>
				<title>Royal Residencia - Al-Rehmat Developers | Premium Housing Lahore</title>
				<meta name="description" content="Royal Residencia by Al-Rehmat Developers - Exclusive luxury housing community in Lahore. Experience premium residential living with modern amenities." />
				<meta property="og:title" content="Royal Residencia - Premium Housing by Al-Rehmat" />
				<meta property="og:description" content="Discover Royal Residencia - exclusive luxury housing community in Lahore." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://alrehmatdevelopers.com/projects/alrehmat-residencia" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Royal Residencia - Al-Rehmat Developers" />
				<meta name="twitter:description" content="Exclusive luxury housing community Royal Residencia in Lahore." />
				<link rel="canonical" href="https://alrehmatdevelopers.com/projects/alrehmat-residencia" />
			</Helmet>
			<Suspense
				fallback={
					<span className="loading loading-spinner text-warning"></span>
				}
			>
				<div className="flex flex-col min-h-[100dvh] mx-auto bg-[#ECE3D4]">
					<RoyalHero />
					<ContactForm />
				</div>
			</Suspense>
		</>
	)
}

export default RoyalResidenciaPage
