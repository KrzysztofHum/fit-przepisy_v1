import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Bold, Text } from "./Markdown";

export const query = graphql`
  {
    allContentfulDescription(filter: { title: { eq: "Fit Przepisy" } }) {
      nodes {
        description {
          raw
        }
        title
      }
    }
  }
`;

export default function Description() {
    const options = {
      renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
    };
  const {
    allContentfulDescription: { nodes: recipes },
  } = useStaticQuery(query);
  const {description, title} = recipes[0];
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div>{description && renderRichText(description, options)}</div>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.greyBackground};
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
