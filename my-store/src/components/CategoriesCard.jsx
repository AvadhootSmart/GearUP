import React from "react";
import { FiMinusCircle } from "react-icons/fi";

const CategoriesCard = ({image, category, price}) => {
  return (
    <>
      <div className="w-1/2 h-1/2 border-4 border-[#72748e] overflow-hidden relative shadow-2xl">
        <div className="back absolute top-[60%] -translate-y-1/2 -translate-x-7 font-[Montserrat] text-9xl text-[#72748e] opacity-15 select-none font-extrabold z-0">
          <h1 className="uppercase">{category}</h1>
        </div>
        <div className="front h-full w-full flex justify-between">
          <div className="txt font-[Poppins] p-8 flex flex-col gap-20">
            <div className="price">
              <h3 className="text-[#72748e] text-l">Starting From</h3>
              <h3 className="text-[#676eff] text-3xl font-bold font-[Montserrat]">${price},-</h3>
            </div>
            <div className="class">
              <h1 className="font-extrabold text-white text-3xl">{category}</h1>
              <div className="browse my-10">
                <a href="/">
                  <div className="flex items-center gap-2 font-[Montserrat]">
                    <FiMinusCircle className="text-[#676eff] text-4xl" />
                    <h1 className="uppercase text-white text-xl font-bold">
                      Browse
                    </h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="Image translate-x-20">
            <img src={image} className="h-full w-full object-cover scale-150 drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
