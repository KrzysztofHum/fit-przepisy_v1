import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Recipe from "../components/Recipe";

export default function TagTemplate({data,  pageContext }) {

  const recipes = data.allContentfulProducts.nodes

  return (
    <Layout>
      <h2>{pageContext.tag}</h2>
      <div>
        <Recipe recipes={recipes} />
      </div>
    </Layout>
  );
}

export const query = graphql`
query GetRecipeByTag($tag: String)  {
	allContentfulProducts(
	  sort: { fields: title, order: ASC }
	  filter: { tags: { eq: $tag} } 
	) {
	  nodes {
		carbs
		fat
		id
		kcal
		protein
		description {
		  raw
		}
		title
		img {
		  gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
		}
	  }
	}
  }
`;
