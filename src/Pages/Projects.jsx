import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import meritonCover from "../assets/meritonCover.jpg"
import meritonModel from "../assets/meritonModel.png"
import Card from "../Components/Card/Card.jsx"

const cardRoyal = "/royal/royalImages/cardRoyal.png"
const cardRoyalBg = "/royal/royalImages/cardRoyalBg.png"

const Projects = () => {
	return (
		<>
			<Helmet>
				<title>Our Projects - Al-Rehmat Developers | Meriton & Royal Residencia</title>
				<meta name="description" content="Explore Al-Rehmat Developers' luxury housing projects: Meriton and Royal Residencia - premium residential communities in Lahore, Pakistan with modern amenities." />
				<meta property="og:title" content="Our Projects - Al-Rehmat Developers" />
				<meta property="og:description" content="Discover luxury housing projects by Al-Rehmat Developers in Lahore." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://alrehmatdevelopers.com/projects" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Our Projects - Al-Rehmat Developers" />
				<meta name="twitter:description" content="Explore premium residential projects: Meriton and Royal Residencia." />
				<link rel="canonical" href="https://alrehmatdevelopers.com/projects" />
			</Helmet>
			<section className="my-20 px-4">
				<div className="mx-auto grid container grid-cols-1 md:grid-cols-2 max-w-[1000px] justify-items-center align-baseline gap-8">
					<div className="w-full flex justify-center">
						<Link to={`/projects/meriton`}>
							<Card imgsrcModel={meritonModel} imgsrcCover={meritonCover} />
						</Link>
					</div>
					<div className="w-full flex justify-center">
						<Link to={`/projects/alrehmat-residencia`}>
							<Card imgsrcModel={cardRoyal} imgsrcCover={cardRoyalBg} />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
export default Projects
