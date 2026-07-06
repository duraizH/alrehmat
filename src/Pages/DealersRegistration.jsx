import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import DealerContactForm from "../Components/DealerContactForm/DealerContactForm";
import DealersDetails from "../Components/DealersDetails/DealersDetails";

const DealersRegistration = () => {
    //  useEffect(() => {
    //    ReactGA.pageview(window.location.pathname + window.location.search);
    //  }, []);
  return (
    <>
      <Helmet>
        <title>Dealers Registration | Al-Rehmat Developers</title>
        <meta
          name="description"
          content="Register as a dealer with Al-Rehmat Developers and partner with us to sell premium real estate properties in Pakistan."
        />
        <link rel="canonical" href="https://alrehmatdevelopers.com/registration" />
        <meta property="og:title" content="Dealers Registration | Al-Rehmat Developers" />
        <meta property="og:description" content="Register as a dealer with Al-Rehmat Developers and partner with us to sell premium real estate properties in Pakistan." />
        <meta property="og:url" content="https://alrehmatdevelopers.com/registration" />
      </Helmet>
      <DealersDetails />
      {/* <DealerContactForm /> */}
    </>
  );
};
export default DealersRegistration;
