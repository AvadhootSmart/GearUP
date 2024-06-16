import React from "react";
import { MdExpandMore } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import axios from "axios";
function ProductCard({ productData }) {
  const dispatch = useDispatch();

  const { _id, name, company, price, discountPrice, productImg } = productData;

  const user = useSelector((state) => state.auth.user);

  if (user) {
    var Uid = user.user._id;
  }

  async function addToCart(productid, Uid) {
    if (user) {
      const response = await axios.post(`http://localhost:5000/add-to-cart`, {
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
      <div className="relative h-[85vh] w-full">
        <div className="backText absolute top-[45%] z-0 -translate-x-7 -translate-y-1/2 select-none overflow-hidden font-[Montserrat] text-[18rem] font-extrabold uppercase tracking-wide text-[#72748e] opacity-15">
          <h1>{company}</h1>
        </div>
        <div className="front relative  z-10 flex h-[100%] w-full items-center justify-around font-[Poppins]">
          <div className="Section-L flex h-full max-w-[30%] flex-col justify-evenly">
            <div className="prodName px-20 text-left text-7xl font-bold text-white">
              <h2>{name}</h2>
            </div>
            <div className="price flex gap-8 px-20 text-5xl">
              <p className="font-bold text-[#72748e] line-through">${price}</p>
              <p className="font-bold text-[#676eff]">${discountPrice}</p>
            </div>
            <button
              onClick={() => addToCart(_id, Uid)}
              className="flex items-center gap-4 px-20"
            >
              <div className="text-6xl text-[#676eff]">
                <CiCirclePlus />
              </div>
              <div className="font-[Montserrat] text-lg uppercase text-white">
                Add to Cart
              </div>
            </button>
            <div>
              <a
                href="#Details"
                className="absolute bottom-1 left-1/2 -translate-x-1/2 text-8xl text-[#676eff] "
              >
                <MdExpandMore className="transition-all ease-in-out hover:scale-125" />
              </a>
            </div>
          </div>

          <div className="Image h-[90%] w-[45%]">
            <img
              src={productImg}
              alt=""
              className="object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
