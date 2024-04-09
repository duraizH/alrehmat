// import ShowCase from "../Components/ShowCase/ShowCase";
import {al_rehmat_residencie_description} from "../Data/projectData.js"
import res from "../assets/residencia.webp";
import mer from "../assets/meriton.webp";
import ProjectShowCase from "../Components/projectShowCase/ProjectShowCase.jsx";

const Projects = () => {
  return (
    <>
      <section className="my-20">
        {/* <ShowCase img1={res} img2={mer} /> */}
        <div className=" mx-auto grid grid-cols-2 container max-w-[1600px] grid- ">
          <ProjectShowCase
            title={"Al Rehmat Royal Residencia"}
            description={al_rehmat_residencie_description}
            img={res}
          />
          <ProjectShowCase
            title={"Al Rehmat Royal Residencia"}
            description={al_rehmat_residencie_description}
            img={mer}
          />
        </div>
      </section>
    </>
  );
}
export default Projects;