import Aboutbanners from "../Components/Aboutbanners/Aboutbanners"
import { Helmet } from "react-helmet"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Al-Rehmat Developers</title>
        <meta name="description" content="Learn more about Al-Rehmat Developers, our history, mission, and the premium real estate projects we bring to life." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/about" />
        <meta property="og:title" content="About Us | Al-Rehmat Developers" />
        <meta property="og:description" content="Learn more about Al-Rehmat Developers, our history, mission, and the premium real estate projects we bring to life." />
        <meta property="og:url" content="https://alrehmatdevelopers.com/about" />
      </Helmet>
      <Aboutbanners/>
    </>
  )
}
export default About;