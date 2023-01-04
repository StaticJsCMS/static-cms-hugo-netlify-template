import { useMediaAsset } from "@staticcms/core";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import React from "react";

const PostPreview = ({ entry, widgetFor, collection, field }) => {
  const image = useMediaAsset(entry.data.image, collection, field, entry);

  return (
    <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{entry.data.title}</h1>
      <div className="flex justify-between grey-3">
        <p>{format(parseISO(entry.data.date), "iii, MMM d, yyyy")}</p>
        <p>Read in x minutes</p>
      </div>
      <div className="cms mw6">
        <p>{entry.data.description}</p>
        {image && <img src={image} alt={entry.data.title} />}
        {widgetFor("body")}
      </div>
    </div>
  );
};

export default PostPreview;
