import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ImSpoonKnife } from "react-icons/im";
import { BsDropletFill } from "react-icons/bs";
import { GiFishEggs, GiSlicedBread } from "react-icons/gi";

import React from "react";
import styled from "styled-components";

export default function Recipe() {
  return (
    <Article>
      <div>
        <Link>
          <StaticImage
            src="../images/gulasz.jpg"
            alt="fit przepisy"
            layout="fullWidth"
            className="img"
          ></StaticImage>
        </Link>
      </div>
      <div>
        <Link>
          <h3>Gulasz po Węgiersku</h3>
        </Link>
      </div>
      <div>
        <p>
          Zapraszam na <string>niskokaloryczny gulasz</string> mozna go
          przygotować jako obiad z kaszą, ziemniakami bądź zjeść z chlebem.{" "}
        </p>
      </div>
      <Details>
        <DetailsItem>
          <ImSpoonKnife />
          <h6>Kalorie</h6>
          <p>1000</p>
        </DetailsItem>
        <DetailsItem>
          <GiFishEggs />
          <h6>Białko</h6>
          <p>1000</p>
        </DetailsItem>
        <DetailsItem>
          <GiSlicedBread />
          <h6>Węglowodany</h6>
          <p>1000</p>
        </DetailsItem>
        <DetailsItem>
          <BsDropletFill />
          <h6>Tłuszcze</h6>
          <p>25</p>
        </DetailsItem>
      </Details>
    </Article>
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
  flex-wrap: wrap;
`;
const DetailsItem = styled.div`
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
  }
`;
