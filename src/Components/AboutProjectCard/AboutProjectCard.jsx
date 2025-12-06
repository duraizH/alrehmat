import React from 'react'

const AboutProjectCard = (props) => {
  return (
    <div className="md:col-span-1 lg:col-span-1 px-2 md:py-10">
      <h3 className="  text-[#CBA664] text-2xl mt-2  ">
      {props.heading}
      </h3>
      <p>
       {props.description}
      </p>
    </div>
  );
}
export default AboutProjectCard;
