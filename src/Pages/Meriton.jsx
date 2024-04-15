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
        <title>Meriton Al-Rehmat</title>
        <meta name="description" content="Meriton Al Rehmat Developers" />
      </Helmet>
      <MeritonOverView />
      <MeritonAmeneties />
      <MeritonFormula />
      <MeritonFloorPlan />
      <MeritonInterior />
    </>
  );
}

export default Meriton;