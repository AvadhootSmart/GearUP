import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  AddToCart,
  RemoveFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../features/auth/authSlice";
import { loadStripe } from "@stripe/stripe-js";

import { IoMdAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";

function CartPage() {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.auth.cart);
  const { items } = Cart;

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const redirectPayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51Ol97KSGBJG4p2ppuqYC5J90tByTzHDyM61D7qxODXmYw2Fnc6kuuhVhdbO4062UqmQGb0xTIaM3EDh0z2ks9UoG000VH59fZp",
    );

    const body = {
      products: items,
    };

    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);  
    }
  };

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-[#23232f]">
        <div className="cart relative mb-20 flex min-h-[90vh] w-[60vw] flex-col gap-10 rounded-lg bg-zinc-600 py-10">
          {items.map((products) => (
            <div
              key={products._id}
              className="prod relative min-h-[30%] w-full bg-zinc-500"
            >
              <div className="backtxt  absolute font-[Montserrat] text-8xl uppercase tracking-tight text-zinc-600">
                {products.product.company}
              </div>
              <div className="front relative flex h-full w-full items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={`${products.product.productImg}`}
                    className="max-w-22 h-20 object-cover"
                  />
                  <div>
                    <h1 className="font-[Poppins] text-3xl font-extrabold tracking-wider text-white">
                      {products.product.name}
                    </h1>
                    <div className="flex gap-2 font-[Poppins]">
                      <h4 className="font-light line-through ">
                        ${products.product.price}
                      </h4>
                      <h4 className="font-bold">
                        ${products.product.discountPrice}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="btns flex items-center gap-8 pr-10 text-xl">
                  <div className="transition-all ease-in-out hover:scale-125">
                    <IoMdAddCircleOutline
                      onClick={() => handleIncreaseQuantity(products._id)}
                    />
                  </div>
                  <h1>{products.quantity}</h1>
                  <div className="transition-all ease-in-out hover:scale-125">
                    <IoRemoveCircleOutline
                      onClick={() => handleDecreaseQuantity(products._id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className=" total absolute bottom-0 mt-10 flex h-20 w-full items-center justify-around border-t-2 font-[Montserrat] text-3xl font-bold uppercase ">
            <h1>Your cart total = ${Cart.totalPrice}/- </h1>
            <div>
              <button
                className="w-[110%] rounded-full bg-[#676eff]"
                onClick={redirectPayment}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;

/*
Using state management, implement the add and remove cart methods and manipulate the quantity from the user state action payload

*/
