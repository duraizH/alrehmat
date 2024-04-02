
import CarousalCustom from "../CarousalCustom/CarousalCustom";
const ProjectsCarousal = () => {
  return (
    <div className="mt-12 CTA-container lg:mt-0 col-span-2 Project-container m-auto text-center">
      <h1 className="mb-12 mt-20 text-5xl font-bold leading-tight tracking-tight">
        <span className="text-[#CBA664]">OUR PROJECTS</span>
      </h1>
      <div
        className="flex justify-center mt-20"
        style={{ borderRadius: "24px", overflow: "hidden" }}
      >
        <CarousalCustom />
      </div>
    </div>
  );
}
export default ProjectsCarousal;

