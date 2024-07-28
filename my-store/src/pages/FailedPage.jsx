import React from "react";
import PaymentFailCard from "../components/PaymentFailCard";
function FailedPage() {
  return (
    <>
      <div className="-mt-[15vh] flex h-screen w-full  items-center justify-center gap-10 bg-[#23232f]">
        <PaymentFailCard />
      </div>
    </>
  );
}

export default FailedPage;

