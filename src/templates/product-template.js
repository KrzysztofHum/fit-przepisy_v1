import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export default function produkt(data, pageContext) {
  console.log(data);
  console.log(pageContext);
  return (
    <Wrapper>
      <div>
        <StaticImage
          src="./images/gulasz.jpg"
          alt="fit przepisy"
          layout="fullWidth"
          className="img"
        ></StaticImage>
      </div>
      <div>Kategorie</div>
      <Content>
        <h1>{pageContext}</h1>
        <div>
          <div>Opis</div>
          <div>Składniki</div>
          <div>Instrukcja</div>
        </div>
      </Content>
      <div>Tagi</div>
      <div>Zobacz podobne przepisy</div>
    </Wrapper>
  );
}

export const query = graphql`
  query GetRecipeByTitle($title: String) {
    allContentfulProducts(
      filter: { title: { eq: $title } }
    ) {
      nodes {
        kcal
        protein
        fat
        id
        img {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        carbs
        title
        categories
        instruction
        ingredients
        serving
        tags
      }
    }
  }
`;

const Wrapper = styled.div``;
const Content = styled.div``;
