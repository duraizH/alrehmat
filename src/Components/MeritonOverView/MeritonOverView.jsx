import React from 'react'
import meriton1 from "../../assets/meritonwebp/meritoncropped.webp"
import meriton2 from "../../assets/meritonwebp/2.webp";
import meriton3 from "../../assets/meritonwebp/4.webp";
import meriton4 from "../../assets/meritonwebp/6.webp";
import meriton5 from "../../assets/meritonwebp/meritonlogocropped.webp";
import AboutProjectCard from '../AboutProjectCard/AboutProjectCard';

const MeritonOverView = () => {
  return (
    <section>
      <div>
        <img src={meriton1} alt="Meriton Apartments Al-Rehmat Developers" />
        <img src={meriton2} alt="Meriton Apartments Al-Rehmat Developers" />
        <img src={meriton3} alt="Meriton Apartments Al-Rehmat Developers" />
        <img src={meriton4} alt="Meriton Apartments Al-Rehmat Developers" />
        <img src={meriton5} alt="Meriton Apartments Al-Rehmat Developers" />
        <div className="container mx-auto lg:px-32 md:px-10 px-4 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-6">
            <div className=" lg:col-span-3 md:col-span-6">
              <h1 className="  text-[#CBA664] text-4xl my-4  ">
                About the Project
              </h1>
              <p>
                MERITON HEIGHTS, developed by AL-REHMAT DEVELOPERS, seems to
                offer a promising living experience in Lahore, catering to those
                who seek luxury and convenience. Here&apos;s a summary of the
                key features and advantages of this project:
              </p>
            </div>
            <AboutProjectCard
              heading={"Central Location"}
              description={
                "The project's central location is significant selling point, providing residents with easy access to main attractions and ameneties in Lahore. This includes proximity to shopping malls, restaurants, cafes, and other entertainment options."
              }
            />
            <AboutProjectCard
              heading={"Access to Public Transportation:"}
              description={
                "     Living in a central neighborhood ensures that residents have access to public transportation, making it convenient to navigate the city."
              }
            />
            <AboutProjectCard
              heading={"Modern and Elegant Living:"}
              description={
                "MERITON HEIGHTS offers modern and elegant living spaces designed to meet the needs and preferences of urban dwellers. The spacious and contemporary design is complemented by separate kitchen and lounge areas, adding to the luxurious feel of the apartments."
              }
            />
            <AboutProjectCard
              heading={"LDA Approved Project:"}
              description={
                "The fact that MERITON HEIGHTS is an LDA (Lahore Development Authority) approved project is a testament to its quality and reliability. This approval can provide potential buyers with confidence in the project&apos;s legitimacy and adherence to regulatory standards."
              }
            />

            <AboutProjectCard
              heading={"Apartment Variety:"}
              description={
                "The project offers a range of apartment types, including commercial, studio, one-bedroom, and two-bedroom units. This variety ensures that there are options to suit different lifestyles and needs."
              }
            />
            <AboutProjectCard
              heading={"Flexible Payment Plans:"}
              description={
                "The availability of an easy installment plan for these apartments is a great advantage. It allows potential residents to secure their ideal living space without the need to make a full upfront payment, making the apartments more accessible to a wider range of people."
              }
            />
            <AboutProjectCard
              heading={"Opportunity for Fresh Starts:"}
              description={
                "The flexible payment plans and modern living spaces can be particularly appealing to those looking for a fresh start or a new beginning in a comfortable and convenient environment."
              }
            />

            <div className="lg:col-span-2 md:col-span-3 px-2 pt-20 md:pt-20">
              <p>
                Overall, MERITON HEIGHTS appears to offer a combination of
                luxury, convenience, and accessibility, making it an attractive
                option for those seeking upscale living in Lahore. However,
                individuals interested in this project should conduct thorough
                research and consider their personal preferences and financial
                situtaion before making a decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MeritonOverView;