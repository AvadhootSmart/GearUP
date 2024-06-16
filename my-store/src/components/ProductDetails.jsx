import React from "react";

function ProductDetails({ details }) {
  const { name, productImg } = details;
  return (
    <>
      <div className="flex justify-between p-14 h-screen">
        <div className="details min-w-[45vw] p-8">
          <div className="heading text-3xl text-white font-[Poppins] uppercase ">
            <h1>{name}</h1>
            <hr className="mt-7 border-t-4 rounded border-[#72748e]" />
          </div>
          <div className="content mt-10 text-[#d1d1db]">
            <ul className="list-disc flex flex-col gap-5 text-xl">
              <li>Ultra-lightweight design for fast and precise movements</li>
              <li>
                HERO sensor with 25,600 DPI sensitivity for exceptional accuracy
              </li>
              <li>
                Zero-additive PTFE feet for smooth gliding across any surface
              </li>
              <li>
                Ambidextrous shape with customizable side buttons for versatile
                use
              </li>
              <li>
                LIGHTSPEED wireless technology ensures lag-free performance
              </li>
              <li> 70-hour battery life for extended gaming sessions</li>
              <li>
                Mechanical button tensioning system for crisp and reliable
                clicks
              </li>
              <li>Onboard memory to save your preferred settings</li>
              <li>
                Sleek and minimalistic design with customizable RGB lighting
                Ideal for competitive gaming and esports professionals.
              </li>
            </ul>
          </div>
        </div>
        <div className="image w-[35vw] flex items-center">
          <img src={productImg} className=" object-cover h-[90%] w-full" />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
