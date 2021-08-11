import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Bold, Text } from "./Markdown";
import DefaultDescription from "./DefaultDescription";

export default function Description({ desc = [] }) {
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
      {desc.length >= 1 ? (
        <Wrapper>
          {desc.map((des) => {
            const { description, title, id } = des;
            return (
              <div key={id}>
                <h2>{title}</h2>
                <div>{description && renderRichText(description, options)}</div>
              </div>
            );
          })}
        </Wrapper>
      ) : (
        <DefaultDescription />
      )}
    </>
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
