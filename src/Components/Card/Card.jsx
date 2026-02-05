import React from 'react'
import "./Card.css";

const Card = ({ imgsrcTitle, imgsrcModel, imgsrcCover }) => {
  return (
    <div className="cardCustom ">
      <div className="wrapper">
        {/* <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
            class="cover-image"
          /> */}
        <img
          src={imgsrcCover}
          className="cover-image"
          alt="Project cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
      {imgsrcTitle && (
        <img
          src={imgsrcTitle}
          className="title"
          alt="Project title"
          loading="lazy"
          decoding="async"
        />
      )}
      {/* <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
          class="character"
        /> */}
      <img
        src={imgsrcModel}
        className="character"
        alt="Project model"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Card
