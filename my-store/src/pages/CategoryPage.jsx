import React from "react";
import { useParams } from "react-router";
import CatProductCard from "../components/CatProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  // Sample product data

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-[#23232f]">
        <div className="backTxt absolute top-[45%] z-0 -translate-x-7 -translate-y-1/2 select-none overflow-hidden font-[Montserrat] text-[18rem] font-extrabold uppercase tracking-wide text-[#72748e] opacity-15">
          <h1>{category}</h1>
        </div>
        <div className="card relative z-10 flex h-full w-full justify-center items-center  flex-shrink text-white">
          <CatProductCard category={category} />
          <CatProductCard category={category} />
          <CatProductCard category={category} />
          <CatProductCard category={category} />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
