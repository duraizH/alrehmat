import React from 'react'
import "./Card.css";

const Card = ({ imgsrcTitle, imgsrcModel, imgsrcCover }) => {
  return (

      <div class="cardCustom ">
        <div class="wrapper">
          {/* <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
            class="cover-image"
          /> */}
          <img src={imgsrcCover} class="cover-image" />
        </div>
        {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
        <img src={imgsrcTitle} class="title" />
        {/* <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
          class="character"
        /> */}
        <img src={imgsrcModel} class="character" />
      </div>

  );
};

export default Card