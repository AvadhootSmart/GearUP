import React from "react";
import PaymentSuccessCard from "../components/PaymentSuccessCard";

function SuccessPage() {
  return (
    <>
      <div className="-mt-[15vh] flex h-screen w-full  items-center justify-center gap-10 bg-[#23232f]">
        <PaymentSuccessCard />
      </div>
    </>
  );
}

export default SuccessPage;
