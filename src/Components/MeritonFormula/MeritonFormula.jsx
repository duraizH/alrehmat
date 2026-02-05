import React from 'react'
import meritonbuilding from "../../assets/meritonwebp/meritonbuilding.webp"
import meriton5 from "../../assets/meritonwebp/meritonlogocropped2.webp";

const MeritonFormula = () => {
  return (
    <>
      <div className="grid gap-8 xl:grid-cols-12 container mx-auto my-12 sm:my-20 px-4 sm:px-6">
        <div className="xl:col-span-7 md:col-span-12">
        
          <img
            className="w-full rounded-lg"
            src={meritonbuilding}
            alt="Meriton Building Al Rehmat"
            loading="lazy"
            decoding="async"
          />
      
        </div>
        <div className="xl:col-span-5 md:col-span-12 ">
          <img
            className="w-full max-w-[220px] mx-auto"
            src={meriton5}
            alt="Meriton Apartments"
            loading="lazy"
            decoding="async"
          />
          <div className="text-center px-4 sm:px-8 lg:px-10 space-y-6">
            <h1 className="text-[#CBA664] text-2xl sm:text-3xl lg:text-4xl my-4">
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
