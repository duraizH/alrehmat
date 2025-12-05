import { Helmet } from "react-helmet";
import DealersDetails from "../Components/DealersDetails/DealersDetails";

const DealersRegistration = () => {
  return (
    <>
      <Helmet>
        <title>Dealer Registration - Al-Rehmat Developers | Partner With Us</title>
        <meta
          name="description"
          content="Become a dealer partner with Al-Rehmat Developers. Join our network of dealers for premium housing projects in Lahore. Register now for exclusive opportunities."
        />
        <meta property="og:title" content="Dealer Registration - Al-Rehmat Developers" />
        <meta property="og:description" content="Register as a dealer partner with Al-Rehmat Developers for premium housing projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alrehmatdevelopers.com/registration" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dealer Registration - Al-Rehmat Developers" />
        <meta name="twitter:description" content="Become a dealer partner with Al-Rehmat Developers." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/registration" />
      </Helmet>
      <DealersDetails />
    </>
  );
};
export default DealersRegistration;
