import React from "react";
import { Link } from "react-router-dom";

const PaymentFailCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#23232f]">
      <div className="max-w-lg rounded-lg bg-[#72748e] p-6 shadow-lg">
        <div className="text-center font-[Poppins]">
          <img
            src={`/failure.svg`}
            alt="Payment Successful"
            className="mx-auto h-16 w-16"
          />
          <h2 className="mt-4 text-3xl font-bold">Payment Failed!</h2>
          <p className="mb-8 mt-2 text-gray-800 text-xl">
            Something went wrong with your payment, Please try again...
          </p>
          <Link
            className="rounded bg-[#676eff] px-4 py-2 text-white text-xl transition hover:bg-purple-700"
            to={"/"}
          >
            Continue to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailCard;