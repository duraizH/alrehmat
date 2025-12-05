import { Suspense } from "react";
import { Helmet } from "react-helmet";
import MeritonAmeneties from "../Components/MeritonAmeneties/MeritonAmeneties";
import MeritonFloorPlan from "../Components/MeritonFloorPlan/MeritonFloorPlan";
import MeritonFormula from "../Components/MeritonFormula/MeritonFormula";
import { MeritonInterior } from "../Components/MeritonInterior/MeritonInterior";
import MeritonOverView from "../Components/MeritonOverView/MeritonOverView";

const Meriton = () => {
  return (
    <>
      <Helmet>
        <title>Meriton - Al-Rehmat Developers | Luxury Housing Project Lahore</title>
        <meta name="description" content="Meriton by Al-Rehmat Developers - Premium luxury housing project in Lahore. Featuring modern amenities, spacious floor plans, and prime location." />
        <meta property="og:title" content="Meriton - Luxury Housing by Al-Rehmat" />
        <meta property="og:description" content="Discover Meriton - premium luxury housing project with modern amenities in Lahore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alrehmatdevelopers.com/projects/meriton" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meriton - Al-Rehmat Developers" />
        <meta name="twitter:description" content="Premium luxury housing project Meriton in Lahore, Pakistan." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/projects/meriton" />
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
