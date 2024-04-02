// import ShowCase from "../Components/ShowCase/ShowCase";
import {al_rehmat_residencie_description} from "../Data/projectData.js"
import res from "../assets/residencia.webp";
import mer from "../assets/meriton.webp";
import ProjectShowCase from "../Components/projectShowCase/projectShowCase";

const Projects = () => {
  return (
    <>
      <section className="my-20">
        {/* <ShowCase img1={res} img2={mer} /> */}
        <div className="flex m-auto max-w-[1600px] sm:flex-wrap lg:flex-nowrap">
          <ProjectShowCase
            title={"Al Rehmat Royal Residencia"}
            description={al_rehmat_residencie_description}
            img={res}
          />
          <ProjectShowCase
            title={"Al Rehmat Royal Residencia"}
            description={al_rehmat_residencie_description}
            img={res}
          />
        </div>
      </section>
    </>
  );
}
export default Projects;