import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import cardRoyal from "../../public/royal/royalImages/cardRoyal.png"
import cardRoyalBg from "../../public/royal/royalImages/cardRoyalBg.png"
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
			<section className="my-12 sm:my-20">
				<div className="mx-auto grid container grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] justify-items-center align-baseline px-4 sm:px-6">
					<div className="col-span-1 w-full flex justify-center">
						<Link to={`/projects/meriton`}>
							<Card imgsrcModel={meritonModel} imgsrcCover={meritonCover} />
						</Link>
					</div>
					<div className="col-span-1 w-full flex justify-center">
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
