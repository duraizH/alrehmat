import { Helmet } from "react-helmet";
import { Suspense } from "react";
import RoyalHero from "../Components/RoyalHero/RoyalHero";
import RoyalLuxury from "../Components/RoyalLuxury/RoyalLuxury";
import RoyalPlots from "../Components/RoyalPlots/RoyalPlots";
import RoyalAmeneties from "../Components/RoyalAmeneties/RoyalAmeneties";
import RoyalContact from "../Components/RoyalContact/RoyalContact";
import ContactForm from "../Components/ContactForm/ContactForm";

const RoyalResidenciaPage = () => {
  //  useEffect(() => {
  //    ReactGA.pageview(window.location.pathname + window.location.search);
  //  }, []);
  return (
    <>
      <Helmet>
        <title>Royal Residencia Al-Rehmat</title>
        <meta name="description" content="Royal Residencia Rehmat Developers" />
      </Helmet>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-warning"></span>
        }
      >
        <div className="flex flex-col min-h-[100dvh] container bg-[#ECE3D4]">
          <RoyalHero />
          <RoyalLuxury />
          <RoyalPlots />
          <RoyalAmeneties />
          <ContactForm />
        </div>
      </Suspense>
    </>
  );
};

export default RoyalResidenciaPage;
