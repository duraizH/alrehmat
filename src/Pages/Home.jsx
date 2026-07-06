// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import Hero from '../Components/Hero/Hero';
import Work from '../Components/Work/Work';
import CTA from '../Components/CTA/CTA';
import ProjectsCarousal from '../Components/ProjectsCarousal/ProjectsCarousal';
import { Helmet } from 'react-helmet';

const Home = () => {
    //  useEffect(() => {
    //    ReactGA.pageview(window.location.pathname + window.location.search);
    //  }, []);
  return (
    <>
      <Helmet>
        <title>Home | Al-Rehmat Developers</title>
        <meta name="description" content="Welcome to Al-Rehmat Developers. We build premium residential and commercial projects including Meriton and Al-Rehmat Residencia, delivering excellence in real estate." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/" />
        <meta property="og:title" content="Home | Al-Rehmat Developers" />
        <meta property="og:description" content="Welcome to Al-Rehmat Developers. We build premium residential and commercial projects including Meriton and Al-Rehmat Residencia, delivering excellence in real estate." />
        <meta property="og:url" content="https://alrehmatdevelopers.com/" />
      </Helmet>
      <Hero />
      <Work />
      <ProjectsCarousal />
      <CTA />
    </>
  );
}

export default Home;
