import { Helmet } from 'react-helmet';
import Aboutbanners from "../Components/Aboutbanners/Aboutbanners"


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Al-Rehmat Developers - Real Estate Experts in Lahore</title>
        <meta name="description" content="Learn about Al-Rehmat Developers. Discover our vision, values, and experience in creating premium luxury housing projects and residential communities in Lahore, Pakistan." />
        <meta property="og:title" content="About Al-Rehmat Developers" />
        <meta property="og:description" content="Discover Al-Rehmat Developers - Leaders in luxury residential real estate projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alrehmatdevelopers.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Al-Rehmat Developers" />
        <meta name="twitter:description" content="Learn about our real estate expertise and luxury housing projects." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/about" />
      </Helmet>
      <Aboutbanners/>
    </>
  )
}
export default About;