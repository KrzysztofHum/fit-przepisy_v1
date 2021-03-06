import * as React from "react";
import styled from "styled-components";
import AllRecipes from "../components/AllRecipes";
import Description from "../components/Description";
import Layout from "../components/Layout";
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title="" description='Fit przepisy, tanie i szybkie dietetyczne przepisy'/>
      <Main>
        <AllRecipes />
        <Description />
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  min-height: 77vh;
`;
