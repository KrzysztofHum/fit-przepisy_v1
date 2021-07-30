import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";

export default function AllRecipes() {
  return (
    <Wrapper>
      <h1>Dania główne</h1>
      <Recipe />
      {/* Pagination */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`;
