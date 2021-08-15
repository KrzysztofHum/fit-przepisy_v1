import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Recipe from "../components/Recipe";
import styled from "styled-components";
import Description from "../components/Description";
import SEO from "../components/SEO";

export default function TagTemplate({ data, pageContext }) {
  const recipes = data.allContentfulProducts.nodes;
  const desc = data.allContentfulDescription.nodes;

  return (
    <Layout>
      <SEO
        title={`Fit ${pageContext.tag}`}
        description={`${pageContext.tag} - najlepsze fit przepisy, tanie i szybkie dietetyczne przepisy na ${pageContext.tag}`}
      />

      <Wrapper>
        <h1>{pageContext.tag} - najlepsze fit przepisy</h1>
        <div>
          <Recipe recipes={recipes} />
        </div>
        <div>
          <Description desc={desc} />
        </div>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulProducts(
      sort: { fields: title, order: ASC }
      filter: { tags: { eq: $tag } }
    ) {
      nodes {
        carbs
        fat
        id
        categories
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
    allContentfulDescription(filter: { title: { eq: $tag } }) {
      nodes {
        id
        title
        description {
          raw
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  h1 {
    margin: 0.5rem;
    text-align: center;
  }
`;
