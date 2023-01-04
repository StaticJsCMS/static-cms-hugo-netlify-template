import { useMediaAsset } from "@staticcms/core";
import React from "react";

const Product = ({ product, collection, field, entry }) => {
  const image = useMediaAsset(product.image, collection, field, entry);

  return (
    <div className="ph2-ns w-50-ns">
      <img src={image} alt="" className="center db mb3" style={{ width: "240px" }} />
      <p>{product.text}</p>
    </div>
  );
};

export default Product;
