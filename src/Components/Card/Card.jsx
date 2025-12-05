import React from 'react'
import "./Card.css";

const Card = ({ imgsrcTitle, imgsrcModel, imgsrcCover }) => {
  return (
    <div className="cardCustom ">
      <div className="wrapper">
        <img src={imgsrcCover} className="cover-image" alt="Project cover" loading="lazy" />
      </div>
      {imgsrcTitle && <img src={imgsrcTitle} className="title" alt="Project title" loading="lazy" />}
      <img src={imgsrcModel} className="character" alt="Project model" loading="lazy" />
    </div>
  );
};

export default Card