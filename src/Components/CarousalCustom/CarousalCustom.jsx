import EmblaCarousel from "../EmblaCarousal/EmblaCarousal";
import "../EmblaCarousal/Embla.css"

import images from "../../Data/data";

const options = {autoplay:true ,delay:3000};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CarouselCustom = () => {

  return <EmblaCarousel slides={SLIDES} options={options} />;

};

export default CarouselCustom;
