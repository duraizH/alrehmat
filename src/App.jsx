import { useEffect, Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Loader from "./Components/Loader/Loader"
import ReactGA from "react-ga4"
import { Helmet } from "react-helmet"
import { WhatsAppWidget } from "react-whatsapp-widget"
import "react-whatsapp-widget/dist/index.css"

const About = lazy(() => import("./Pages/About"))
const Contact = lazy(() => import("./Pages/Contact"))
const DealersRegistration = lazy(() => import("./Pages/DealersRegistration"))
const Home = lazy(() => import("./Pages/Home"))
const Meriton = lazy(() => import("./Pages/Meriton"))
const Projects = lazy(() => import("./Pages/Projects"))
const RoyalResidenciaPage = lazy(() => import("./Pages/RoyalResidencia"))

const TRACKING_ID = "G-111B6N0MNE"
ReactGA.initialize(TRACKING_ID)

function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

function App() {
	// useEffect(() => {
	//   ReactGA.pageview(window.location.pathname + window.location.search);
	// }, []);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Al Rehmat Developers</title>
				<meta
					name="google-site-verification"
					content="ZaamaPju4b_YQslADdx5QhirEtNsrkxE8IGpPmEEHpE"
				/>
				<link rel="canonical" href="https://alrehmatdevelopers.com/" />
			</Helmet>
			<BrowserRouter>
				<Navbar />
				<ScrollToTop />
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/registration" element={<DealersRegistration />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/projects/meriton" element={<Meriton />} />
						<Route
							path="/projects/alrehmat-residencia"
							element={<RoyalResidenciaPage />}
						/>
						<Route path="*" element={<Home />} />
					</Routes>
				</Suspense>
				<Footer />
			</BrowserRouter>
			<WhatsAppWidget
				style={{ zIndex: "99999999999", position: "relative" }}
				inputPlaceHolder={"Type your message"}
				companyName={"Al-Rehmat"}
				message={
					"Welcome to Al-Rehmat Developers,\n Please type your query and our agent will respond to you soon.\n Thank you."
				}
				phoneNumber="+923010000762"
			/>
		</>
	)
}

export default App
