import React from 'react'
import meritonbuilding from "../../assets/meritonwebp/meritonbuilding.webp"
import meriton5 from "../../assets/meritonwebp/meritonlogocropped2.webp";

const MeritonFormula = () => {
  return (
    <>
      <div className="grid xl:grid-cols-12 container mx-auto my-20 ">
        <div className="xl:col-span-7 px-10 md:col-span-12">
        
          <img  className="w-full" src={meritonbuilding} alt="Meriton Building Al Rehmat" />
      
        </div>
        <div className="xl:col-span-5 md:col-span-12 ">
          <img className="w-full" src={meriton5} alt="" />
          <div className="text-center px-20 space-y-6">
            <h1 className="  text-[#CBA664] text-4xl my-4  ">
              Winning Formula <br /> Meriton Apartments
            </h1>
            <p>
              Our apartments are designed to make life easier, more comfortable
              and more convenient, both inside and out. To complement a healthy,
              active lifestyle, Meriton offers a significant suite of
              resort-style facilities across our range of developments.
            </p>
            <p>
              This winning formula provides peace of mind when buying a Meriton
              apartment. Customers know exactly what is included because we
              consistently deliver a high level of amenity at every single
              Meriton development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MeritonFormula;