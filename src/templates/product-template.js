import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Bold, Text } from "../components/Markdown";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { ImSpoonKnife } from "react-icons/im";
import { BsDropletFill, BsPeople } from "react-icons/bs";
import { GiFishEggs, GiSlicedBread } from "react-icons/gi";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export default function produkt({ data }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  const {
    carbs,
    categories,
    fat,
    id,
    img,
    description,
    ingredients,
    instruction,
    kcal,
    protein,
    serving,
    tags,
    title,
  } = data.allContentfulProducts.nodes[0];
  console.log(data.allContentfulProducts.nodes[0]);
  const pathToImage = getImage(img);
  return (
    <Layout>
      <Wrapper>
        <h1>Jak zrobić fit {title} ?</h1>
        <Article>
          <div>
            <GatsbyImage className="img" image={pathToImage} alt={title} />
          </div>
          <Categories>
            <ul>
              {categories.map((category, index) => {
                return (
                  <li key={index}>
                    <Link to={`/przepis-na-${category}`}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </Categories>
          <Details>
            <DetailsItem>
              <GiFishEggs />
              <h6>Białko</h6>
              <p>{protein}</p>
            </DetailsItem>
            <DetailsItem>
              <GiSlicedBread />
              <h6>Węglowodany</h6>
              <p>{carbs}</p>
            </DetailsItem>
            <DetailsItem>
              <BsDropletFill />
              <h6>Tłuszcze</h6>
              <p>{fat}</p>
            </DetailsItem>
            <DetailsItem>
              <ImSpoonKnife />
              <h6>Kalorie</h6>
              <p>{kcal}</p>
            </DetailsItem>
            <DetailsItem>
              <BsPeople />
              <h6>Porcje</h6>
              <p>{serving}</p>
            </DetailsItem>
          </Details>
          <Content>
            <h2>{title}</h2>
            <div>
              <div>{description && renderRichText(description, options)}</div>
              <MidContent>
                <Ingredients>
                  <h4>Składniki</h4>
                  <ul>
                    {ingredients.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </Ingredients>
                <Instruction>
                  <h4>Instrukcja</h4>
                  <ul>
                    {instruction.map((item, index) => {
                      return (
                        <li key={index}>
                          <InstructionHeader>
                            <p>Krok {index + 1}</p>
                            <div></div>
                          </InstructionHeader>
                          <p>{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                </Instruction>
              </MidContent>
            </div>
          </Content>
        </Article>
        <Tags>
          <ul>
            {tags.map((tag, index) => {
              return (
                <li key={index}>
                  <Links to={`/przepis-na-${tag}`}>{tag}</Links>
                </li>
              );
            })}
          </ul>
        </Tags>
        <div>Zobacz podobne przepisy</div>
      </Wrapper>
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

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  h1 {
    margin: 0.5rem;
    text-align: center;
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
      padding-left: 0.5rem;
      color: ${({ theme }) => theme.colors.primary1};
      a {
        color: ${({ theme }) => theme.colors.primary1};
        transition: ${({ theme }) => theme.animations.transition};
        &:hover {
          color: black;
        }
      }

      &:before {
        content: "/";
        display: inline-block;
        padding-right: 0.5rem;
        color: #616a72;
      }
    }
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;
const DetailsItem = styled.div`
  color: ${({ theme }) => theme.colors.primary1};
  padding: 0 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  p {
    margin: 0;
  }
  h6 {
    color: black;
    font-weight: bold;
  }
`;
const Content = styled.div`
  h2 {
    text-align: center;
    ${({ theme }) => theme.colors.primary1}
  }
`;
const MidContent = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 35% 60%;
    column-gap: 5%;
    align-items: start;
  }
`;

const Ingredients = styled.div`
  h4 {
    margin: 0 0 0 2rem;
    color: ${({ theme }) => theme.colors.primary1};
  }
  display: grid;
  margin: 1rem;
  ul {
    margin-top: 0;
  }
  li {
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary1};
    padding: 0.75rem 0;
  }
`;

const Instruction = styled.div`
  margin: 1rem;
  padding-bottom: 1rem;
  h4 {
    margin: 0 0 0 2rem;
    color: ${({ theme }) => theme.colors.primary1};
  }
  li > p {
    margin: 0 0 1rem;
    padding-left: 0.25rem;
  }
`;

const InstructionHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: center;
  p {
    text-transform: uppercase;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary1};
    margin: 0;
  }
  div {
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary1};
  }
`;

const Tags = styled.div`
  margin: 2rem 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin-top: 1rem;
  }
`;

const Links = styled(Link)`
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primary2};
  text-decoration: none;
  color: white;
  transition: ${({ theme }) => theme.animations.transition2};
  &:hover {
    color: black;
    background-color: #eff5e8;
  }
`;
