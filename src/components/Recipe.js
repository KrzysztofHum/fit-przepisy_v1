import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { ImSpoonKnife } from "react-icons/im";
import { BsDropletFill } from "react-icons/bs";
import { GiFishEggs, GiSlicedBread } from "react-icons/gi";
import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Bold, Text } from "./Markdown";
import slugify from "slugify";

export default function Recipe({ recipes = [] }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  return (
    <>
      {recipes.map((recipe) => {
        const { id, title, img, carbs, fat, kcal, description, categories, protein } =
          recipe;
        const tagSlug = slugify(title, { lower: true });
        const pathToImage = getImage(img);
        return (
          <Article key={id}>
            <div>
              <Links to={`/przepis-na-${categories[0]}/przepis-na-${tagSlug}`}>
                <GatsbyImage className="img" image={pathToImage} alt={title} />
              </Links>
            </div>
            <div>
              <Links to={`/przepis-na-${categories[0]}/przepis-na-${tagSlug}`}>
                <h3>{title}</h3>
              </Links>
            </div>
            <div>{description && renderRichText(description, options)}</div>
            <Details>
              <DetailsItem>
                <ImSpoonKnife />
                <h6>Kalorie</h6>
                <p>{kcal}</p>
              </DetailsItem>
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
            </Details>
          </Article>
        );
      })}
    </>
  );
}

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

const Details = styled.div`
  display: flex;
  justify-content: center;
`;
const DetailsItem = styled.div`
  color: ${({ theme }) => theme.colors.primary1};
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
  }
  h6 {
    color: black;
    font-weight: bold;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary2};
`;
