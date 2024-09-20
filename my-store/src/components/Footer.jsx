import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router";

const Footer = () => {
    const location = useLocation();
    if (location.pathname === "/Login" || location.pathname === "/Register") {
        return null;
    }
    return (
        <>
            <div className="flex min-h-[40vh] w-full justify-between bg-[#111117] p-10 text-xl text-white">
                <div className="links flex gap-24 p-4">
                    <ul className="list flex flex-col gap-4 text-2xl">
                        <a href="/">
                            <FaGithub />
                        </a>
                        <a href="/">
                            <FaInstagram />
                        </a>
                        <a href="/">
                            <FaTwitter />
                        </a>
                    </ul>
                    <ul className="list flex flex-col gap-2">
                        <a href="/">Mouse</a>
                        <a href="/">Keyboards</a>
                        <a href="/">Headsets</a>
                        <a href="/">Mousepads</a>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <a href="">Register</a>
                        <a href="">Login</a>
                        <a href="">FAQs</a>
                        <a href="">About</a>
                    </ul>
                </div>
                <div className="about">
                    <p className="text-l max-w-[30vw] text-[#72748e]">
                        Test Card Details - 4000 0035 6000 0008
                        <br />
                        Any Valid Date, and random CVV number
                        <p>
                            Test Login Details: <br /> Username: Alex <br /> Password: Alex22
                        </p>
                    </p>
                </div>
            </div>
            <div className="copyright flex h-[10vh] items-center justify-center  border-y border-[#72748e] bg-[#111117] px-10 text-white">
                <p>Copyright&copy; 2023, All rights reserved </p>
            </div>
        </>
    );
};

export default Footer;
