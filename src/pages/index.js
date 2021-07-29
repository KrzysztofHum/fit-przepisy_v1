import * as React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <Main>
        <AllRecipes />
      </Main>
    </Layout>
  );
}


const Main = styled.main`
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
  min-height: 77vh;
`;