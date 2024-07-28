import React, { useEffect, useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { AddToCart } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroCard = ({
  category,
  productImg,
  price,
  discountPrice,
  name,
  _id,
}) => {
  const mainRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ".Image",
      {
        x: -10,
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 1, delay: 0.5 },
    );

    gsap.to(".categoryMask", {
      y: -100,
      duration: 0.5,
      delay: 0.2,
    }),
      gsap.to(".nameMask", {
        // x: -400,
        opacity: 0,
        duration: 0.9,
        delay: 1,
      }),
      gsap.fromTo(
        ".backText",
        {
          x: -1000,
          opacity: 0,
        },
        { x: -20, opacity: 0.25, duration: 1, delay: 1.2 },
      ),
      gsap.fromTo(
        ".prices",
        {
          // y: -100,
          opacity: 0,
        },
        { opacity: 1, duration: 0.5, delay: 1, stagger: 0.1 },
      );
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (user) {
    var Uid = user.user._id;
  }
  async function addToCart(productid, Uid) {
    if (user) {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/add-to-cart`,
        {
          productId: productid,
          userId: Uid,
        },
      );
      const productDets = response.data;
      dispatch(AddToCart(productDets.data.items));
      toast.success("Item Added to cart");
    } else {
      toast.error("Not Logged in, Please log in to add items to cart");
    }
  }
  return (
    <>
      <div ref={mainRef} className="mainWrapper relative h-[85vh] w-full">
        <div className="backText absolute top-[45%] z-0 -translate-x-7 -translate-y-1/2 select-none overflow-hidden font-[Montserrat] text-[18rem] font-extrabold uppercase tracking-wide text-[#72748e] opacity-15">
          <h1>{category}</h1>
        </div>
        <div className="front relative  z-10 flex h-[100%] w-full items-center justify-around font-[Poppins]">
          <div className="Section-L flex h-full max-w-[30%] flex-col justify-evenly">
            <div className="prodName px-20 text-left text-7xl font-bold tracking-wider text-white">
              <h2 className="">
                <div className="categoryMask absolute h-20 w-1/4 bg-[#23232f]"></div>
                <span className=" ">{category}</span>-
                <div className="nameMask absolute z-0 h-[35vh] w-[30%] bg-[#23232f]"></div>
                <span>{name}</span>
              </h2>
            </div>
            <div className="price flex gap-8 px-20 text-5xl">
              <p className="prices font-bold text-[#72748e] line-through">
                ${price}
              </p>
              <p className="prices font-bold text-[#676eff]">
                ${discountPrice}
              </p>
            </div>
            <div className="w-fit px-20">
              <button
                onClick={() => addToCart(_id, Uid)}
                className="prices flex items-center gap-4"
              >
                <div className="ATC-Btn text-6xl text-[#676eff]">
                  <CiCirclePlus />
                </div>
                <div className="Cart font-[Montserrat] text-lg uppercase text-white">
                  Add to Cart
                </div>
              </button>
            </div>
          </div>
          <div className="Image h-[90%] w-[45%]">
            <img
              src={productImg}
              alt="ProductImage"
              className="Image object-cover drop-shadow-[0_40px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
