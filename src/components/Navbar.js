import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2, ImFacebook2 } from "react-icons/im";
import styled from "styled-components";
import setupCategories from "../utils/setupCategories";
import setupTags from "../utils/setupTags";

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        id
        tags
        categories
      }
    }
  }
`;

export default function Navbar() {
  const {
    allContentfulProducts: { nodes: data },
  } = useStaticQuery(query);
  const newCategories = setupCategories(data);
  const newTags = setupTags(data);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <MidNav>
        <HamburgerBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={35} />
        </HamburgerBtn>
        <div>Logo</div>
        <SocialMedia isOpen={isOpen}>
          <div>
            <ImYoutube2 size={25} />
          </div>
          <div>
            <ImFacebook2 size={25} />
          </div>
        </SocialMedia>
      </MidNav>
      <SideNav isOpen={isOpen}>
        <HamburgerBtn1 isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={35} />
        </HamburgerBtn1>
        <ul>
          Kategorie:
          {newCategories.map((category, index) => {
            const [text, value] = category;
            return (
              <li key={index}>
                <Links to={`/przepis-na-${text}`}>
                  {text} ({value})
                </Links>
              </li>
            );
          })}
        </ul>
        <ul>
          Tagi
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <li key={index}>
                <Links to={`/przepis-na-${text}`}>
                  {text} ({value})
                </Links>
              </li>
            );
          })}
        </ul>
      </SideNav>
    </Nav>
  );
}

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1120px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  @media (min-width: 992px) {
    height: 6rem;
  }
`;

const MidNav = styled.div`
  padding: 1rem 1rem 0;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.primary1};
`;

const HamburgerBtn = styled.div`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary1};
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 1rem;
  }
`;

const SideNav = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 100%;
  transition: ${({ theme }) => theme.animations.transition};
  width: 80%;
  max-width: 300px;
  ul {
    font-weight: bold;
    margin: 0;
  }
  li {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.primary2};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary2};
`;

const HamburgerBtn1 = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary1};
  transition: ${({ theme }) => theme.animations.transition};
`;
