import axios from "axios";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AddToCart } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const FeaturedCard = ({ card }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.auth.cart);

  const { _id, productImg, name, price, company } = card;

  if (user) {
    var Uid = user.user._id;
  }
  async function addToCart(productid, Uid) {
    if (user) {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_DOMAIN}/add-to-cart`, {
        productId: productid,
        userId: Uid,
      });
      const productDets = response.data;
      dispatch(AddToCart(productDets.data.items));
      toast.success("Item Added to cart");
    } else {
      toast.error("Not Logged in, Please log in to add items to cart");
    }
  }

  return (
    <>
      {console.log(Uid)}
      <div className="prodcard flex flex-col items-center ">
        <Link to={`/product/${_id}`}>
          <img
            src={productImg}
            className="h-[35vh] w-[35vw] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.98)]"
          />
        </Link>
        <h1 className="font-[Montserrat]">{name}</h1>
        <h2 className="text-[#72748e] ">{company}</h2>
        <h1 className="font-[Montserrat] text-3xl text-[#676eff]">${price}</h1>
        <div className="browse my-2">
          <button onClick={() => addToCart(_id, Uid)}>
            <div className="flex items-center gap-2 font-[Montserrat]">
              <FiPlusCircle className="text-2xl text-[#676eff]" />
              <h1 className="text-l font-bold uppercase text-white">
                Add to Cart
              </h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
