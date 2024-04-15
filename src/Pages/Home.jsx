// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../Components/Hero/Hero';
import Work from '../Components/Work/Work';
import CTA from '../Components/CTA/CTA';
import ProjectsCarousal from '../Components/ProjectsCarousal/ProjectsCarousal';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Al-Rehmat</title>
        <meta name="description" content="Home Al Rehmat Developers" />
      </Helmet>
      <Hero />
      <Work />
      <ProjectsCarousal />
      <CTA />
    </>
  );
}

export default Home;
