import { useMediaAsset } from "@staticcms/core";
import React from "react";

const Blurb = ({ blurb, collection, field, entry }) => {
  const image = useMediaAsset(blurb.image, collection, field, entry);

  return (
    <div className="ph2-ns w-50-ns mb4">
      <img src={image} alt="" className="center db mb3" style={{ width: "240px" }} />
      <p>{blurb.text}</p>
    </div>
  );
};

export default Blurb;
