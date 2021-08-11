import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Bold, Text } from "./Markdown";

export default function Descrip({desc = []}) {
	  const options = {
      renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
    };
	return (
		<div>
			{desc.map((des) => {
				const {description, title, id} = des;
				return (
					<div key={id}>
					<h2>{title}</h2>
					 <div>{description && renderRichText(description, options)}</div>
					 </div>
				);
			})}
		</div>
	)
}
