import { useMediaAsset } from "@staticcms/core";
import React from "react";

import Blurb from "./components/blurb";
import Jumbotron from "./components/jumbotron";

const ProductsPreview = ({ entry, collection, field }) => {
  const image = useMediaAsset(entry.data.image, collection, field, entry);
  const mainImage1 = useMediaAsset(entry.data.main.image1.image, collection, field, entry);
  const mainImage2 = useMediaAsset(entry.data.main.image2.image, collection, field, entry);
  const mainImage3 = useMediaAsset(entry.data.main.image3.image, collection, field, entry);
  const fullImage = useMediaAsset(entry.data.full_image, collection, field, entry);

  return (
    <div>
      <Jumbotron image={image} title={entry.data.title} />

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{entry.data.intro.heading}</h2>
          <p className="mb4 mw6">{entry.data.intro.description}</p>

          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.data.intro.blurbs ?? []).map((blurb, index) => (
              <Blurb key={index} blurb={blurb} collection={collection} field={field} entry={entry} />
            ))}
          </div>
        </div>
      </div>

      <div className="mw7 center">
        <div className="mw6 ph3 mb3">
          <h3 className="f3 b lh-title mb2">{entry.data.main.heading}</h3>
          <p>{entry.data.main.description}</p>
        </div>
      </div>

      <div className="mw7 center ph3 pv4">
        <div className="flex flex-wrap mhn1">
          <div className="w-100 w-50-ns ph1-ns">
            <img src={mainImage1} />
          </div>

          <div className="w-100 w-50-ns ph1-ns">
            <img src={mainImage2} />
          </div>

          <div className="w-100 ph1-ns">
            <img src={mainImage3} />
          </div>
        </div>
      </div>

      <div className="pb4">
        {(entry.data.testimonials ?? []).map((testimonial, index) => (
          <div className="center mb3 ph3" key={index}>
            <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
              <p className="f4 mb0">“{testimonial.quote}”</p>
              <cite className="tr db grey-3">{testimonial.author}</cite>
            </blockquote>
          </div>
        ))}
      </div>

      <img src={fullImage} alt="" className="db w-100" />

      <div className="bg-off-white pv4 ph3">
        <div className="mw7 center">
          <h2 className="f2 b lh-title mb3">{entry.data.pricing.heading}</h2>
          <p className="mw6">{entry.data.pricing.description}</p>

          <div className="flex-ns mhn2-ns mw7">
            {(entry.data.pricing.plans ?? []).map((plan, index) => (
              <div className="w-33-ns ph2" key={index}>
                <div className="ph2">
                  <h3 className="b f5 grey-3 tc lh-title mb3">{plan.plan}</h3>
                  <p className="primary f1 b tc lh-title center">
                    <span className="f4">$</span>
                    {plan.price}
                  </p>
                  - <p className="b">{plan.description}</p>
                  <ul>
                    {(plan.items || []).map((item, index) => (
                      <li key={index}>
                        <p className={index + 1 !== plan.items.size ? "pb2 mb2 divider-grey" : null}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPreview;
