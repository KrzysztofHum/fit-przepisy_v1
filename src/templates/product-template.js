import { graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export default function produkt({ data }) {
  const {
    carbs,
    categories,
    fat,
    id,
    img,
    description,
    ingreddients,
    instruction,
    kcal,
    protein,
    sercing,
    tags,
    title,
  } = data.allContentfulProducts.nodes[0];
  console.log(data.allContentfulProducts.nodes[0]);
  const pathToImage = getImage(img);
  return (
    <Layout>
      <Article>
        <div>
          <GatsbyImage className="img" image={pathToImage} alt={title} />
        </div>
        <Categories>
          <ul>
            {categories.map((category, index) => {
              return <li key={index}>{category}</li>;
            })}
          </ul>
        </Categories>
        <Content>
          <h1>{title}</h1>
          <div>
            <div>Opis</div>
            <div>Składniki</div>
            <div>Instrukcja</div>
          </div>
        </Content>
      </Article>
      <div>Tagi</div>
      <div>Zobacz podobne przepisy</div>
    </Layout>
  );
}

export const query = graphql`
  query GetRecipeByTitle($title: String) {
    allContentfulProducts(filter: { title: { eq: $title } }) {
      nodes {
        kcal
        protein
        fat
        id
        img {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        description {
          raw
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

const Article = styled.article`
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow};
  .img {
    border-radius: 1rem;
  }
  p {
    margin: 1rem;
  }
  h3 {
    text-align: center;
  }
`;
const Categories = styled.div`
  ul {
    padding: 0 0.5rem;
    margin: 0.5rem;
    background-color: #eff5e8;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadows.shadow};
    display: flex;
    li {
      color: ${({ theme }) => theme.colors.primary1};
      padding-left: 0.5rem;
      &:before {
        content: "/";
        display: inline-block;
        padding-right: 0.5rem;
        color: #616a72;
      }
    }
  }
`;
const Content = styled.div``;
