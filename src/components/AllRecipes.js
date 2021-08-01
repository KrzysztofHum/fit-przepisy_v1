import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        carbs
        fat
        id
        kcal
        protein
        categories
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

export default function AllRecipes() {
  const {
    allContentfulProducts: { nodes: recipes },
  } = useStaticQuery(query);
  return (
    <Wrapper>
      <h1>Dania główne</h1>
      <Recipe recipes={recipes} />
      {/* Pagination */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`;
