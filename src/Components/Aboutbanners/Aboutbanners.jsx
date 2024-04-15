import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PageTitle } from "../PageTitle/PageTitle";
import { contactData } from "../PageTitle/contact-data";
import experience from "../../assets/experience.webp"
import safety from "../../assets/community.webp"
import client from "../../assets/client.webp";
import AboutCard from './AboutCard';
import { Helmet } from 'react-helmet';

const Aboutbanners = () => {
  return (
    <>
      <Helmet>
        <title>About Al-Rehmat</title>
        <meta name="description" content="About Al Rehmat Developers" />
      </Helmet>
      <section className="relative bg-white ">
        <div className="container mx-auto">
          <div className="container text-center mx-auto">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              <br />
              <span className=" text-[#CBA664] ">Why Choose Us</span>
            </h1>
          </div>
          <PageTitle heading="Al-Rehmat BRINGS A UNIQUE APPROACH TO PROPERTY DEVELOPMENT">
            Al-Rehmat developers is pioneering its way through the modern
            lifestyle needs by developing and building iconic, design driven
            multi-residential and land development projects for 20 years. With
            an unparalleled track record, Al-Rehmat is invested commercially and
            intellectually in the projects we develop and build on behalf of our
            community and culture. Our reputation is built on our resolute
            commitment to quality, consistent delivery and a vision of long term
            success. This attitude permeates how we act as a business, how we
            develop and build our projects and what we demand of ourselves and
            others. Our projects are located in some of Lahore finest locations
            and we are constantly looking to the future for the ideas and
            opportunities that will underpin truly iconic and spirited outcomes.
            <p>
              Steeped in quality, beauty and unparallel project delivery, we
              celebrate the new and the next and understand that being
              extraordinary is about being unique, without comparison or equal.
              We welcome you into our world and know that our developed
              residences will certainly leave a trace, a lasting impression for
              you to return to and enjoy time and time again.
            </p>
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16">
            <AboutCard
              img={experience}
              heading={"Protecting our People"}
              description={
                "Our people are the lifeblood of Al-Rehmat. As such we have a deeply ingrained safety culture to educate, promote and regulate occupational health and safety processes throughout our enterprise. We believe a safe site is paramount to creating efficient teams, and have developed a unique and innovative safety initiative to empower our teams and optimize our workforce."
              }
            />
            <AboutCard
              img={safety}
              heading={"Building Communities with excellence"}
              description={
                "Our team is composed of specialists in construction, business, finance, design and property development who work together to deliver full scale construction services. We believe in the value of leadership and we recruit innovative individuals to develop and nurture the very best in the industry."
              }
            />
            <AboutCard
              img={client}
              heading={"Client Care"}
              description={
                "At Al-Rehmat, we believe that delivering a project on time and upmost quality in development work is only the beginning of what it takes to get the job done. Our client care processes ensure that each individual plot or residence handover is completed with the best service possible. We know good communication is the key to building strong relationships for our project stakeholders. We encourage our clients to communicate with us."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Aboutbanners;
