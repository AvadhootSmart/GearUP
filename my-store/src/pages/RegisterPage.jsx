import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function RegisterPage() {
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
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/register`,
        {
          username,
          name,
          email,
          password,
        },
      );

      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
        navigateTo("/");
      } else if (response.status === 201) {
        navigateTo("/Login");
        toast.info("User Already exists, please login");
      } else {
        toast.error("Something went wrong, please try again");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="relative  h-screen w-full bg-[#23232f]">
        <div className="absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="backText text-center font-[Montserrat] text-[30vh] uppercase tracking-wide text-[#72748e]">
            Register
          </h1>
        </div>
        <div className="relative z-10 flex h-screen w-full items-center justify-center">
          <div className="FormCard flex  w-[35vw] items-center rounded-2xl border-2 p-10 backdrop-blur-lg ">
            <form
              onSubmit={register}
              className="flex h-full w-full flex-col items-center justify-center gap-4"
            >
              <h1 className="font-[Poppins] text-4xl font-extrabold text-white">
                Create an Account
              </h1>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="username"
                  className="font-[Poppins] text-xl text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="Username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  className="block w-full rounded-lg border bg-gray-500 p-2.5 text-sm text-white  placeholder:text-gray-300 focus:border-[#676eff]"
                  placeholder="Enter your username"
                />
              </div>
              {/* Name */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-[Poppins] text-xl text-white"
                >
                  Name
                </label>

                <input
                  type="text"
                  name="Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Enter your name"
                  className="block w-full rounded-lg border bg-gray-500 p-2.5 text-sm text-white  placeholder:text-gray-300 focus:border-[#676eff]"
                />
              </div>
              {/* email */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-[Poppins] text-xl text-white"
                >
                  Email
                </label>

                <input
                  type="text"
                  name="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border bg-gray-500 p-2.5 text-sm text-white  placeholder:text-gray-300 focus:border-[#676eff]"
                />
              </div>
              {/* password */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-[Poppins] text-xl text-white"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full rounded-lg border bg-gray-500 p-2.5 text-sm text-white  placeholder:text-gray-300 focus:border-[#676eff]"
                />
              </div>

              <div className="flex items-center justify-between gap-2 w-full">
                <div className="flex gap-2 text-xl text-[#72748e]">
                  <h3>Have an account already??</h3>
                  <Link
                    to="/Login"
                    className="text-[#676eff] hover:text-[#313690]"
                  >
                    Log In
                  </Link>
                </div>
                <button className="self-end rounded-lg bg-[#676eff] px-3 py-1 font-[Poppins]  text-2xl">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
