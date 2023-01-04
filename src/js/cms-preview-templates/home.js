import { useMediaAsset } from "@staticcms/core";
import React from "react";

import Jumbotron from "./components/jumbotron";
import Product from "./components/product";

const HomePreview = ({ entry, collection, field }) => {
  const image = useMediaAsset(entry.data.image, collection, field, entry);

  return (
    <div>
      <Jumbotron image={image} title={entry.data.title} subtitle={entry.data.subtitle} />

      <div className="bg-grey-1 pv4">
        <div className="flex-l mhn1-l ph3 center mw7">
          <h2 className="f2 b lh-title mb2 w-40-l">{entry.data.blurb.heading}</h2>
          <p className="w-60-l mb0">{entry.data.blurb.text}</p>
        </div>
      </div>

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{entry.data.intro.heading}</h2>
          <p className="mb4 mw6">{entry.data.intro.text}</p>

          <div className="flex-ns mhn2-ns mb3">
            {(entry.data.products ?? []).map((product, index) => (
              <Product key={index} product={product} collection={collection} field={field} entry={entry} />
            ))}
          </div>

          <div className="tc">
            <a href="#" className="btn raise">
              See all products
            </a>
          </div>
        </div>
      </div>

      <div className="bg-grey-1 pv4">
        <div className="ph3 mw7 center">
          <div className="flex-l mhn2-l">
            <div className="w-40-l ph2-l">
              <h2 className="f2 b lh-title mb2">{entry.data.values.heading}</h2>

              <p>{entry.data.values.text}</p>
            </div>

            <div className="w-60-l ph2-l">
              <img src="/img/home-about-section.jpg" alt="" className="mb3" />
            </div>
          </div>

          <div className="tc">
            <a href="{{.buttonLink}}" className="btn raise">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePreview;
