import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { ToastContainer } from "react-toastify";

function ProductPage() {
  const [product, setproduct] = useState([{}]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/product/${id}`);
      setproduct(response.data);
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden bg-[#23232f]">
        <ProductCard productData={product} />
      </div>
      <div
        id="Details"
        className="dets h-screen w-full overflow-hidden bg-[#23232f]"
      >
        <ProductDetails details={product} />
        <ToastContainer />
      </div>
    </>
  );
}

export default ProductPage;
