import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  return (
    <Helmet htmlAttributes={{lang:"pl-PL"}}
      title={`Fit Przepisy | ${title}`}
      meta={[{ name: `description`, content: description }]}
    ></Helmet>
  );
};

export default SEO;
