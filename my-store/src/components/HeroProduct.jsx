import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCard from "./HeroCard";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const HeroProduct = ({ cards }) => {
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
  };
  return (
    <>
      <Carousel
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 0, top: "40%" }}
            >
              <GrPrevious className="text-[#72748e] text-5xl mx-5 hover:scale-125 transition-all" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 0 }}
            >
              <GrNext className="text-[#72748e] text-5xl mx-5 hover:scale-125 transition-all" />
            </button>
          )
        }
      >
        {cards.map((card, index) => (
          <HeroCard key={index}{...card}/>
        ))}
      </Carousel>
    </>
  );
};

export default HeroProduct;
