import React from 'react'

const AboutCard = ({ img, alt, heading, description, priority = false, width = 800, height = 600 }) => {
  return (
    <div className="card w-full glass">
      <figure>
        <img
          className="w-full"
          src={img}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          width={width}
          height={height}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#CBA664]">{heading}</h2>
        <p className="text-sm sm:text-base lg:text-xl font-arvo text-black">{description}</p>
      </div>
    </div>
  );
}
export default AboutCard;
