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
        <img src={imgsrcCover} className="cover-image" />
      </div>
      {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
      <img src={imgsrcTitle} className="title" />
      {/* <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
          class="character"
        /> */}
      <img src={imgsrcModel} className="character" />
    </div>
  );
};

export default Card