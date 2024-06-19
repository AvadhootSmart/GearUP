import React, { useEffect, useState } from "react";
import HeroProduct from "../components/HeroProduct";
import CategoriesCard from "../components/CategoriesCard";
import Featured from "../components/Featured";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [cardData, setcardData] = useState([{}]);
  const [featuredCards, setfeaturedCards] = useState([{}]);

  useEffect(() => {
    async function fetchHero() {
      const response = await axios.get("http://localhost:5000/HeroProducts");
      setcardData(response.data);
    }

    async function fetchFeatured() {
      const response = await axios.get("http://localhost:5000/Products");
      setfeaturedCards(response.data);
    }
    fetchHero();
    fetchFeatured();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-[#23232f]">
        <HeroProduct cards={cardData} />
      </div>
      <div className="min-h-screen w-full overflow-hidden bg-[#23232f] pb-40">
        <h1 className="w-full py-10 text-center font-[Poppins] text-5xl text-white ">
          Categories
        </h1>
        <div className=" flex h-screen w-[100vw] flex-wrap">
          <CategoriesCard
            image="/Keyboard.png"
            category="Keyboard"
            price="49"
          />
          <CategoriesCard image="/Mouse.png" category="Mouse" price="29" />
          <CategoriesCard image="/Headset.png" category="Headset" price="22" />
          <CategoriesCard image="/Headset.png" category="Headset" price="22" />
        </div>
      </div>
      <div className="Page3 min-h-screen w-full overflow-hidden bg-[#23232f] py-10">
        <div className="heading px-14 font-[Poppins] text-5xl font-bold text-white">
          <h1 className="-mb-14">Featured</h1>
        </div>
        <Featured featuredCards={featuredCards} />
        <ToastContainer/>
      </div>
    </>
  );
};

export default Home;
