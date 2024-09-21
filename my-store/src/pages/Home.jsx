import React, { useEffect, useState } from "react";
import HeroProduct from "../components/HeroProduct";
import CategoriesCard from "../components/CategoriesCard";
import Featured from "../components/Featured";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoader from "./PageLoader";

const BACKEND_DOMAIN = "https://av-gaming-gear-be.vercel.app";

const Home = () => {
    const [cardData, setCardData] = useState([{}]);
    const [featuredCards, setFeaturedCards] = useState([{}]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [heroResponse, featuredResponse] = await Promise.all([
                    axios.get(`${BACKEND_DOMAIN}/HeroProducts`),
                    axios.get(`${BACKEND_DOMAIN}/Products`),
                ]);
                setCardData(heroResponse.data);
                setFeaturedCards(featuredResponse.data);
            } catch (error) {
                console.log("Error occurred while fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                <PageLoader />
                <div>
                    <div className="h-screen w-full bg-[#23232f]">
                        <HeroProduct cards={cardData} />
                    </div>
                    <div className="min-h-screen w-full overflow-hidden bg-[#23232f] pb-40">
                        <h1 className="w-full py-10 text-center font-[Poppins] text-5xl text-white">
                            Categories
                        </h1>
                        <div className="flex h-screen w-[100vw] flex-wrap">
                            <CategoriesCard
                                image="/Keyboard.png"
                                category="Keyboard"
                                price="49"
                            />
                            <CategoriesCard image="/Mouse.png" category="Mouse" price="29" />
                            <CategoriesCard
                                image="/Headset.png"
                                category="Headset"
                                price="22"
                            />
                            <CategoriesCard
                                image="/Headset.png"
                                category="Headset"
                                price="22"
                            />
                        </div>
                    </div>
                    <div className="Page3 min-h-screen w-full overflow-hidden bg-[#23232f] py-10">
                        <div className="heading px-14 font-[Poppins] text-5xl font-bold text-white">
                            <h1 className="-mb-14">Featured</h1>
                        </div>
                        <Featured featuredCards={featuredCards} />
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
