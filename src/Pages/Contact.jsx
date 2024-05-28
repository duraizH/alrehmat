
import { useEffect } from "react";
import ReactGA from "react-ga4";
import ContactForm from '../Components/ContactForm/ContactForm'

 const Contact = () => {
      // useEffect(() => {
      //   ReactGA.pageview(window.location.pathname + window.location.search);
      // }, []);
  return (
    <>
    <ContactForm/>
    </>
  )
}
export default Contact;