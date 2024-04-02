import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "./EmblaCarouselLazyLoadImage";
import imageByIndex from "../../Data/data";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  const [emblaRed, emblaApi] = useEmblaCarousel(
    options,
    [Autoplay(autoplayOptions)],
    {
      loop: true,
    }
  );
  const [slidesInView, setSlidesInView] = useState([]);

  const updateSlidesInView = useCallback((emblaApi) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off("slidesInView", updateSlidesInView);
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateSlidesInView(emblaApi);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <div className="embla" style={{maxWidth:"1600px",height:"auto"}}>
      <div className="embla__viewport" ref={emblaRed}>
        <div className="embla__container">
          {slides.map((index) => (
            <LazyLoadImage
              key={index}
              index={index}
              imgSrc={imageByIndex(index)}
              inView={slidesInView.indexOf(index) > -1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
