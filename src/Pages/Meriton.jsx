import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import { Suspense } from "react";
import MeritonAmeneties from "../Components/MeritonAmeneties/MeritonAmeneties";
import MeritonFloorPlan from "../Components/MeritonFloorPlan/MeritonFloorPlan";
import MeritonFormula from "../Components/MeritonFormula/MeritonFormula";
import { MeritonInterior } from "../Components/MeritonInterior/MeritonInterior";
import MeritonOverView from "../Components/MeritonOverView/MeritonOverView";

import Loader from "../Components/Loader/Loader";

const Meriton = () => {
    //  useEffect(() => {
    //    ReactGA.pageview(window.location.pathname + window.location.search);
    //  }, []);
  return (
    <>
      <Helmet>
        <title>Meriton Project | Al-Rehmat Developers</title>
        <meta name="description" content="Discover Meriton, a premier real estate project by Al-Rehmat Developers offering luxury amenities, premium floor plans, and exceptional ROI." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/projects/meriton" />
        <meta property="og:title" content="Meriton Project | Al-Rehmat Developers" />
        <meta property="og:description" content="Discover Meriton, a premier real estate project by Al-Rehmat Developers offering luxury amenities, premium floor plans, and exceptional ROI." />
        <meta property="og:url" content="https://alrehmatdevelopers.com/projects/meriton" />
      </Helmet>
      <Suspense fallback={<Loader />}>
        <MeritonOverView />
        <MeritonAmeneties />
        <MeritonFormula />
        <MeritonFloorPlan />
        <MeritonInterior />
      </Suspense>
    </>
  );
};

export default Meriton;
