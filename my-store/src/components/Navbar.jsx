import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "flowbite-react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".LeftLinks", {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power1",
    });
    gsap.from(".rightLinks", {
      y: -50,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      stagger: 0.2,
      ease: "power1",
    });
  });
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.auth.cart);

  if (location.pathname === "/Login" || location.pathname === "/Register") {
    return null;
  }

  return (
    <div className="flex h-[15vh] w-full items-center justify-between bg-[#23232f] p-12 font-[Poppins] text-white">
      <div className="left flex">
        <Link to="/">
          <img
            src="/Logo.png"
            alt="logo"
            className="LeftLinks h-16 w-16 object-cover"
          />
        </Link>
        <ul className=" mx-16 flex items-center gap-14">
          <Link className="LeftLinks" to={`/products/Mouse`}>
            Mouse
          </Link>
          <Link className="LeftLinks" to={`/products/Keyboard`}>
            Keyboard
          </Link>
          <Link className="LeftLinks" to={`/products/Headset`}>
            Headset
          </Link>
          <Link className="LeftLinks" to={`/products/Mousepad`}>
            Mousepad
          </Link>
        </ul>
      </div>
      <div className="Right flex">
        <div className="Profile mx-16 flex items-center gap-5">
          {user ? (
            <h1>{user.user.username}</h1>
          ) : (
            <Link to="/Login" className="rightLinks">
              <Button color={'purple'}>Login</Button>
            </Link>
            //className="rightLinks border-3 border-white rounded-3xl p-2"
          )}
        </div>
        <div className="cart mt-16 flex flex-grow flex-col gap-10">
          <Link className="rightLinks" to="/Cart">
            <div className="text-3xl text-[#676eff]">
              <FaShoppingCart />
            </div>
          </Link>

          <div>
            {user ? (
              <p className="rightLinks rotate-90 font-[Poppins] text-lg uppercase">
                ${cart.totalPrice}
              </p>
            ) : (
              <p className="rightLinks rotate-90 font-[Poppins] text-lg uppercase">
                $0
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
