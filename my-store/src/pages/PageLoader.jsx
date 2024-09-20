import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PageLoader = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".even",
            { y: 1000 },
            { y: 0, duration: 1, stagger: 0.2, ease: "power1" },
        );
        gsap.fromTo(
            ".odd",
            { y: -1000 },
            { y: 0, duration: 1, stagger: 0.2, ease: "power1" },
        );

        gsap.to(".wrapper", {
            y: "-100%",
            ease: "power1.inOut",
            delay: 1,
        });
    });
    return (
        <div className="wrapper z-1 absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-zinc-900 text-[10rem] font-bold text-white">
            <div className="flex h-[8.1rem] w-full items-center justify-center overflow-hidden  text-center">
                <div className="even -space-y-8 leading-none">
                    <h1>G</h1>
                    <h1>G</h1>
                    <h1>G</h1>
                    <h1>G</h1>
                    <h1>G</h1>
                </div>
                <div className="odd -space-y-8 leading-none">
                    <h1>E</h1>
                    <h1>E</h1>
                    <h1>E</h1>
                    <h1>E</h1>
                    <h1>E</h1>
                </div>
                <div className="even -space-y-8 leading-none">
                    <h1>A</h1>
                    <h1>A</h1>
                    <h1>A</h1>
                    <h1>A</h1>
                    <h1>A</h1>
                </div>
                <div className="odd -space-y-8 leading-none">
                    <h1>R</h1>
                    <h1>R</h1>
                    <h1>R</h1>
                    <h1>R</h1>
                    <h1>R</h1>
                </div>
                <div className="even -space-y-8 leading-none">
                    <h1>U</h1>
                    <h1>U</h1>
                    <h1>U</h1>
                    <h1>U</h1>
                    <h1>U</h1>
                </div>
                <div className="odd -space-y-8 leading-none">
                    <h1>P</h1>
                    <h1>P</h1>
                    <h1>P</h1>
                    <h1>P</h1>
                    <h1>P</h1>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
