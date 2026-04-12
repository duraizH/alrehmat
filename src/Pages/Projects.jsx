import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
// public assets must be referenced by URL at runtime (served from project root)
const cardRoyal = "/royal/royalImages/cardRoyal.png";
const cardRoyalBg = "/royal/royalImages/cardRoyalBg.png";
import meritonCover from "../assets/meritonCover.jpg"
import meritonModel from "../assets/meritonModel.png"
import Card from "../Components/Card/Card.jsx"

const Projects = () => {
	//  useEffect(() => {
	//    ReactGA.pageview(window.location.pathname + window.location.search);
	//  }, []);
	return (
		<>
			<Helmet>
				<title>Projects Al-Rehmat</title>
				<meta name="description" content="Projects Al Rehmat Developers" />
			</Helmet>
			<section className="w-full min-h-[60vh] md:min-h-[calc(100vh-80px)] flex items-center justify-center bg-white px-4 sm:px-6 py-8">
				<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 max-w-[1200px] gap-4 sm:gap-6 md:gap-8 justify-items-center w-full">
					<div className=" col-span-1">
						<Link to={`/projects/meriton`}>
							<Card imgsrcModel={meritonModel} imgsrcCover={meritonCover} />
						</Link>
					</div>
					<div className=" col-span-1">
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
