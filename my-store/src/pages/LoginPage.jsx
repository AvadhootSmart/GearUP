import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authActions";
// import { GoogleLoginSuccess } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoginPage() {
  useGSAP(() => {
    gsap.from(".FormCard", {
      opacity: 0,
      y: 100,
      delay: 0.8,
      duration: 1,
    });
    gsap.from(".backText", {
      y: -100,
      opacity: 0,
      duration: 0.5,
    });
  });
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser({ username, password }));
      navigateTo("/");
    } catch (error) {
      toast.error("Login failed, please try again");
    }
  };
  return (
    <>
      <div className="relative  h-screen w-full bg-[#23232f]">
        <div className=" absolute left-1/2 top-1/2 z-0 h-auto w-full -translate-x-1/2 -translate-y-1/2  ">
          <h1 className="backText text-center font-[Montserrat] text-[30vh] uppercase tracking-widest text-[#72748e]">
            Login
          </h1>
        </div>
        <div className="relative z-10 flex h-screen w-full items-center justify-center">
          <div className="FormCard items-cente flex h-[70vh]  w-[35vw]  rounded-2xl border-2 backdrop-blur-lg ">
            <form
              onSubmit={handleLogin}
              className="flex h-full w-full flex-col items-center"
            >
              <h1 className="pt-14 font-[Poppins] text-4xl font-extrabold text-white">
                Login
              </h1>
              <input
                type="text"
                name="Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Enter your username"
                className="mt-12 h-12 w-[65%] rounded-md border-2 border-black p-2 font-[Poppins]"
              />
              <input
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-8 h-12 w-[65%] rounded-md border-2 border-black p-2 font-[Poppins]"
              />
              <button className="mt-10 w-[60%] rounded-2xl bg-[#676eff] font-[Poppins] text-2xl font-bold">
                Login
              </button>
              <div className="mt-8 flex gap-2 text-xl text-[#72748e]">
                <h3>New Here??</h3>
                <Link to="/Register" className="text-[#676eff] hover:text-[#313690]">
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

/*

*/
