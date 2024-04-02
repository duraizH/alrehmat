import  { useEffect } from "react";
import gsap from "gsap";
import "./ShowCase.css"
import royal from "../../assets/residencia.webp"
import meriton from "../../assets/meriton.webp"
import { Link } from "react-router-dom";

const ProjectShowcase = () => {
  useEffect(() => {
    const runGsap = () => {
      
      const projects = document.querySelectorAll(".project");
      const images = document.querySelectorAll(".p_img");

      // Cursor
      const cursor = document.querySelector(".cursor__circle");
      const cursorText = cursor.querySelector(".cursor__text p");

      const moveCursor = (e) => {
        gsap.to(cursor, 0.3, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          ease: "power4.out",
          delay: 0.09,
        });
      };

      const activateCursor = (title) => {
        const width = Math.ceil(title.offsetWidth * 1.1);
        cursor.style.setProperty("--width", `${width}px`);
        cursor.classList.add("cursor__circle--active");
        cursorText.innerText = title.innerText;
      };

      gsap.set(images, {
        yPercent: 100,
      });

      window.requestAnimationFrame(() => {
        gsap.to(images, 0.3, {
          yPercent: 0,
          opacity: 1,
          delay: 0.5,
          stagger: 0.3,
          ease: "power4.inOut",
          clearProps: "transform",
        });
      });

      projects.forEach((currentProject) => {
        const title = currentProject.querySelector(".project__title");

        currentProject.addEventListener("mouseover", () => {
          currentProject.classList.add("project--hovered");
          activateCursor(title);
        });

        currentProject.addEventListener("mouseleave", () => {
          currentProject.classList.remove("project--hovered");
          cursor.classList.remove("cursor__circle--active");
          cursorText.innerText = "";
        });
      });

      document.body.addEventListener("mousemove", moveCursor);
    };

    if (document.readyState === "complete") {
      runGsap();
    } else {
      window.addEventListener("load", runGsap);
    }
  }, []);

  return (
    <>
      <div className="cursor">
        <div className="cursor__circle">
          <div className="cursor__text">
            <p />
          </div>
        </div>
      </div>

      <div className="projects ">
        <Link className="project">
          <figure className="project__image">
            <img
              className="p_img"
              src={royal}
              alt="Al Rehmat Royal Residencia"
            />
          </figure>
          <div className="project__details">
            <div className="project__title">
              <p className="text-[#CBA664]">Al-Rehmat Royal Residencia</p>
            </div>
            <div className="project__description">
              <p className=" text-black lg:text-xl sm:text-sm font-arvo">
                Al-Rehmat Royal Residencia is an excellent community that
                provides affordable living in the most ideal location, it lies a
                short 10-minute drive from Lahore District Court and a 2km drive
                from main Ravi Toll Plaza, Shahdara. Al-Rehmat Royal Residencia
                is an immaculate housing society that has been perfectly
                designed keeping in mind the changing seasons and techniques of
                optimum space utilization. The project is a gated community with
                round the clock security and unbelievable facilities that ensure
                complete peace of mind. There is a team of experienced
                architects, engineers and horticulture experts, whose services
                are always on offer for residents. Owners are also given the
                choice to design their own dream homes. Keeping in view the
                varying needs of valuable prospective residents and investors,
                the project features 3 Marla, 5 Marla and 8 Marla plots on an
                easy monthly instalment plan of 3 years. Along with this diverse
                range of plots that suits a host of client needs, beautifully
                designed and expertly constructed 3-marla and 5-marla houses are
                also available on a convenient 3-year instalment plan.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/projects/meriton"} className="project">
          <figure className="project__image">
            <img
              src={meriton}
              alt="Meriton Bahria Town Al-Rehmat"
              className="w-100 p_img"
            />
          </figure>
          <div className="project__details">
            <div className="project__title">
              <p>MERITON APARTMENTS</p>
            </div>
            <div className="project__description">
              <p className=" text-black lg:text-xl sm:text-sm font-arvo">
                MERITON APARTMENTS offers an unrivalled luxury
                commercial/residential experience within the beautiful location
                of bahira town Lahore . It is located on main 100 feet road Maj
                Aziz Bhatti avenue . At Meriton apartment meticulous attention
                to details have been paid to every aspect of the project. The
                exquisite interior design of each Shop/office/Apartment utilize
                all the available space in the most effective manner. It
                provides the perfect environment for comfortable living and
                business.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectShowcase;
