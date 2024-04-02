import React from 'react'
import meriton5 from "../../assets/meritonwebp/meritonlogocropped.webp";
import Ameneties from "../FeaturesCompiler/FeaturesCompiler";
const MeritonAmeneties = () => {
        const ameneties = [
          "Roof Top Garden",
          "Serviced Apartments",
          "High Speed Elevators",
          "Luxurious Apartments",
          "Valet Parking",
          "Spacious Lobby",
          "CCTV Security",
          "Grand Reception",
        ];
        const salientFeatures = [
          "Located in bahira town Lahore",
          "Well planned layout",
          "Earthquake resistant",
          "Top quality oorings",
          "Aluminum Windows with Glass",
          "Imported Tiles in Baths and Kitchens",
          "24 hours electric service",
          "Wide parking",
          "Near Masjid and Park",
          "Telephone Line and hot/cold water Lines",
          "Imported electric fixtures and concealed electric cables",
          "24/7 Support"
        ];
  return (
    <section>
      <div className="container mx-auto space-y-16">
        <img src={meriton5} alt="Meriton Al-Rehmat Al Rehmat" />
        <Ameneties features={ameneties} heading={"Amenities"} />
        <Ameneties features={salientFeatures} heading={"Salient Features"} />
      </div>
    </section>
  );
}
export default MeritonAmeneties;;
