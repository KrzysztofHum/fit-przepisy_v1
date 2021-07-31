import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export default function produkt() {
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
        <h1>Tytuł</h1>
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

const Wrapper = styled.div``;
const Content = styled.div``;
