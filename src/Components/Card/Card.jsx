import React from 'react'
import "./Card.css";

const Card = ({ imgsrcTitle, imgsrcModel, imgsrcCover }) => {
  return (
    <div className="cardCustom ">
      <div className="wrapper">
        {/* <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
            class="cover-image"
           loading="lazy"  width="800" height="600" /> */}
        <img
          src={imgsrcCover}
          className="cover-image"
          alt="Project cover"
          loading="lazy"
          decoding="async"
         width="800" height="600" />
      </div>
      {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title"  loading="lazy"  width="800" height="600" /> */}
      {imgsrcTitle && (
        <img
          src={imgsrcTitle}
          className="title"
          alt="Project title"
          loading="lazy"
          decoding="async"
         width="800" height="600" />
      )}
      {/* <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
          class="character"
         loading="lazy"  width="800" height="600" /> */}
      <img
        src={imgsrcModel}
        className="character"
        alt="Project model"
        loading="lazy"
        decoding="async"
       width="800" height="600" />
    </div>
  );
};

export default Card
