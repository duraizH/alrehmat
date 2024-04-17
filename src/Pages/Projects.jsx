// import ShowCase from "../Components/ShowCase/ShowCase";
import {al_rehmat_residencie_description} from "../Data/projectData.js"
import res from "../assets/residencia.webp";
import mer from "../assets/meriton.webp";
import ProjectShowCase from "../Components/projectShowCase/ProjectShowCase.jsx";
import Card from "../Components/Card/Card.jsx";
import meritonCover from "../assets/meritonCover.jpg"
import meritonModel from "../assets/meritonModel.png"
import meritonTitle from "../assets/meritonTitle.png"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects Al-Rehmat</title>
        <meta name="description" content="Projects Al Rehmat Developers" />
      </Helmet>
      <section className="my-20">
        {/* <ShowCase img1={res} img2={mer} /> */}

        <div className=" mx-auto grid container max-w-[1000px] justify-items-center align-baseline ">
          <Link to={`/projects/meriton`}>
            <Card imgsrcModel={meritonModel} imgsrcCover={meritonCover} />
          </Link>
          {/* <ProjectShowCase
            title={"Al Rehmat Royal Residencia"}
            description={al_rehmat_residencie_description}
            img={res}
          />
          <ProjectShowCase
            title={"Al Rehmat Royal Residencia"}
            description={al_rehmat_residencie_description}
            img={mer}
          /> */}
        </div>
      </section>
    </>
  );
}
export default Projects;