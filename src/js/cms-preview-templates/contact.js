import { useMediaAsset } from "@staticcms/core";
import React from "react";

const ContactEntry = ({ heading, text }) => (
  <div>
    <h4 className="f4 b lh-title mb2 primary">{heading}</h4>
    <p>{text}</p>
  </div>
);

const ContactEntries = ({ data }) =>
  data && data.length > 0 ? (
    <div className="flex-ns mb3">
      {data.map(({ heading, text }) => (
        <ContactEntry heading={heading} text={text} />
      ))}
    </div>
  ) : (
    ""
  );

const ContactPreview = ({ entry, widgetFor, collection, field }) => {
  const entryContactEntries = entry.data.contact_entries;
  const contactEntries = entryContactEntries ?? [];
  const logo = useMediaAsset(entry.data.logo, collection, field, entry);

  return (
    <div className="ph3 bg-off-white">
      <img src={logo} alt="" className="db w4 center pv4" />
      <div className="center mw6 pv3">
        {widgetFor("body")}
        <ContactEntries data={contactEntries} />
      </div>
    </div>
  );
};

export default ContactPreview;
