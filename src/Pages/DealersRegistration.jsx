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
        <title>Dealers Registration Al-Rehmat</title>
        <meta
          name="description"
          content="Dealers Registration Al Rehmat Developers"
        />
      </Helmet>
      <DealersDetails />
      {/* <DealerContactForm /> */}
    </>
  );
};
export default DealersRegistration;
