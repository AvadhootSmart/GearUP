import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FiPlusCircle } from "react-icons/fi";
import FeaturedCard from "./FeaturedCard";
const Featured = ({ featuredCards }) => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="backTxt absolute top-[45%] z-0 -translate-x-7 -translate-y-1/2 select-none overflow-hidden font-[Montserrat] text-[18rem] font-extrabold uppercase tracking-wide text-[#72748e] opacity-15">
          <h1>Featured</h1>
        </div>
        <div className="card relative z-10 flex h-full w-full flex-shrink items-center justify-center text-white">
          {featuredCards.map((card) => (
            <FeaturedCard key={card._id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
