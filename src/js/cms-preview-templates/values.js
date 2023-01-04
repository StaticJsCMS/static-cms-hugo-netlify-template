import { useMediaAsset } from "@staticcms/core";
import React from "react";

import Jumbotron from "./components/jumbotron";

const MediaBlock = ({ heading, text, imageUrl, reverse }) => {
  const imageContainerClassName = reverse ? "ph3-m w-50-m" : "ph3-m w-50-m order-last-m";
  return (
    <div className="flex-m mhn3-m mb4">
      <div className={imageContainerClassName}>
        <img src={imageUrl} alt="" className="db mb2" />
      </div>
      <div className="ph3-m w-50-m">
        <h3 className="f3 b lh-title mb1">{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const ValuesPreview = ({ entry, collection, field }) => {
  const image = useMediaAsset(entry.data.image, collection, field, entry);

  const entryValues = entry.data.values;
  const values = entryValues ?? [];

  return (
    <div>
      <Jumbotron image={image} title={entry.data.title} />
      <div className="bg-off-white pv4">
        <div className="mw7 center ph3 pt4">
          {values.map(({ text, heading, imageUrl }, i) => (
            <MediaBlock key={i} text={text} heading={heading} imageUrl={imageUrl} reverse={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesPreview;
