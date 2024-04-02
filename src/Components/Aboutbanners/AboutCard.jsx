import React from 'react'

const AboutCard = (props) => {
  return (
    <div className="card w-full glass">
      <figure>
        <img className="w-full" src={props.img} alt="construction experience" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#CBA664]">{props.heading}</h2>
        <p className="lg:text-xl sm:text-sm font-arvo">{props.description}</p>
      </div>
    </div>
  );
}
export default AboutCard;