import Hero from '../Components/Hero/Hero';
import Work from '../Components/Work/Work';
import CTA from '../Components/CTA/CTA';
import ProjectsCarousal from '../Components/ProjectsCarousal/ProjectsCarousal';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Al-Rehmat Developers - Luxury Housing Projects in Lahore</title>
        <meta name="description" content="Al-Rehmat Developers specializes in premium luxury housing and residential projects including Meriton and Royal Residencia in Lahore, Pakistan." />
        <meta property="og:title" content="Al-Rehmat Developers - Luxury Housing Projects" />
        <meta property="og:description" content="Discover premium luxury housing projects by Al-Rehmat Developers in Lahore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alrehmatdevelopers.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Al-Rehmat Developers" />
        <meta name="twitter:description" content="Premium luxury housing projects in Lahore, Pakistan." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/" />
      </Helmet>
      <Hero />
      <Work />
      <ProjectsCarousal />
      <CTA />
    </>
  );
}

export default Home;
