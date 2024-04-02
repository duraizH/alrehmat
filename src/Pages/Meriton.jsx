import MeritonAmeneties from "../Components/MeritonAmeneties/MeritonAmeneties";
import MeritonFloorPlan from "../Components/MeritonFloorPlan/MeritonFloorPlan";
import MeritonFormula from "../Components/MeritonFormula/MeritonFormula";
import { MeritonInterior } from "../Components/MeritonInterior/MeritonInterior";
import MeritonOverView from "../Components/MeritonOverView/MeritonOverView";


const Meriton = () => {
  return (
    <>
 <MeritonOverView/>
 <MeritonAmeneties/>
 <MeritonFormula/>
 <MeritonFloorPlan/>
 <MeritonInterior/>
    </>
  )
}

export default Meriton;