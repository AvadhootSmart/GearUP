import React from "react";
import CatProductCard from "./CatProductCard";

function CatProductList({ products }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <CatProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CatProductList;
