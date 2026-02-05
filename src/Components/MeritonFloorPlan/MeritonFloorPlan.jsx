import FloorPlan from "../../assets/meritonwebp/11.webp"
const MeritonFloorPlan = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6"> 
        <img
          className="w-full rounded-lg"
          src={FloorPlan}
          alt="Floor Plan Meriton Apartment"
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
  );
}
export default MeritonFloorPlan;
