import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import { Suspense } from "react";
import MeritonAmeneties from "../Components/MeritonAmeneties/MeritonAmeneties";
import MeritonFloorPlan from "../Components/MeritonFloorPlan/MeritonFloorPlan";
import MeritonFormula from "../Components/MeritonFormula/MeritonFormula";
import { MeritonInterior } from "../Components/MeritonInterior/MeritonInterior";
import MeritonOverView from "../Components/MeritonOverView/MeritonOverView";

const Meriton = () => {
     useEffect(() => {
       ReactGA.pageview(window.location.pathname + window.location.search);
     }, []);
  return (
    <>
      <Helmet>
        <title>Meriton Al-Rehmat</title>
        <meta name="description" content="Meriton Al Rehmat Developers" />
      </Helmet>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-warning"></span>
        }
      >
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
