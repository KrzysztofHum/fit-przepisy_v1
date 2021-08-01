import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Recipe from "../components/Recipe";
import styled from "styled-components";

export default function CategoryTemplate({ data, pageContext }) {
  const recipes = data.allContentfulProducts.nodes;

  return (
    <Layout>
      <Wrapper>
        <h1>Jak zrobić fit {pageContext.category} ?</h1>
        <div>
          <Recipe recipes={recipes} />
        </div>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query GetRecipeByCategory($category: String) {
    allContentfulProducts(
      sort: { fields: title, order: ASC }
      filter: { categories: { eq: $category } }
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
