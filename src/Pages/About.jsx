import { useEffect } from "react";
import ReactGA from "react-ga4";
import Aboutbanners from "../Components/Aboutbanners/Aboutbanners"


const About = () => {
    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
  return (
       <Aboutbanners/>
    
  )
}
export default About;