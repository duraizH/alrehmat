
import { Link as ScrollLink } from "react-scroll";


const PlotCard = ({img,heading,description}) => {
  return (
    <div className="grid gap-4 p-6 sm:p-8 card   shadow-xl bg-[#D4C3AA] text-black">
      <img
        src={img}
        width="550"
        height="310"
        alt="Home Type 1"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{heading}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex justify-center">
          <ScrollLink
            style={{ backgroundColor: "#CBA664", color: "white" }}
            to="Contact-form"
            smooth={true}
            duration={500}
            className=" cursor-pointer  hover:animate-rotate-y animate-once animate-ease-in animate-fill-forwards  inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  duration-300"
          >
            Inquire
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default PlotCard