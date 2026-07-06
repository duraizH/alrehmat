// import int1 from "../../assets/meritonwebp/13.webp"
// import int2 from "../../assets/meritonwebp/14.webp"
// import int3 from "../../assets/meritonwebp/15.webp";
// import int4 from "../../assets/meritonwebp/16.webp";
// import int5 from "../../assets/meritonwebp/17.webp";
import m1 from "../../assets/meritonwebp2/m1.webp";
import m2 from "../../assets/meritonwebp2/m2.webp";
import m3 from "../../assets/meritonwebp2/m3.webp";
import m4 from "../../assets/meritonwebp2/m4.webp";
import m5 from "../../assets/meritonwebp2/m5.webp";
import m6 from "../../assets/meritonwebp2/m6.webp";
import m7 from "../../assets/meritonwebp2/m7.webp";
import m8 from "../../assets/meritonwebp2/m8.webp";
import m9 from "../../assets/meritonwebp2/m9.webp";
import m10 from "../../assets/meritonwebp2/m10.webp";
import m11 from "../../assets/meritonwebp2/m11.webp";
import m12 from "../../assets/meritonwebp2/m12.webp";
import m13 from "../../assets/meritonwebp2/m13.webp";
import m14 from "../../assets/meritonwebp2/m14.webp";

export const MeritonInterior = () => {
  const interiorImages = [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m11,
    m12,
    m13,
    m14,
  ];

  return (
    <>
      <div className="grid gap-4 px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-10 md:grid-cols-2 lg:grid-cols-3">
        {interiorImages.map((img, index) => (
          <img
            key={img}
            className="w-full rounded-lg object-cover"
            src={img}
            alt="Meriton Interior Al-Rehmat"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
           width="800" height="600" />
        ))}
        {/* <img className="w-full" src={int2} alt="Meriton Interior Al-Rehmat"  loading="lazy"  width="800" height="600" />
        <img className="w-full" src={int3} alt="Meriton Interior Al-Rehmat"  loading="lazy"  width="800" height="600" />
        <img className="w-full" src={int4} alt="Meriton Interior Al-Rehmat"  loading="lazy"  width="800" height="600" />
        <img className="w-full" src={int5} alt="Meriton Interior Al-Rehmat"  loading="lazy"  width="800" height="600" /> */}
      </div>
    </>
  );
}
