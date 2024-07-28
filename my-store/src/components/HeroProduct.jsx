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
      {console.log(cards)}
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
              <GrPrevious className="mx-5 text-5xl text-[#72748e] transition-all hover:scale-125" />
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
              <GrNext className="mx-5 text-5xl text-[#72748e] transition-all hover:scale-125" />
            </button>
          )
        }
      >
        {cards.map((card, index) => (
          <HeroCard key={index} {...card} />
        ))}
      </Carousel>
    </>
  );
};

export default HeroProduct;
