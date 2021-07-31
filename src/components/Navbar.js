import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2, ImFacebook2 } from "react-icons/im";
import styled from "styled-components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <MidNav>
        <HamburgerBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={35} />
        </HamburgerBtn>
        <div>{isOpen ? "" : "Logo"}</div>
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
        <ul>
          Kategorie:
          <li>kat1</li>
          <li>kat2</li>
          <li>kat3</li>
        </ul>
        <ul>
          Tagi
          <li>tag1</li>
          <li>tag1</li>
          <li>tag1</li>
        </ul>
      </SideNav>
    </Nav>
  );
}

const Nav = styled.nav`
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
  transform: ${(props) => (props.isOpen ? "translateX(80vw)" : "none")};
  transition: ${({ theme }) => theme.animations.transition};
`;

const SocialMedia = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  transition: ${({ theme }) => theme.animations.transition};
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
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 100%;
  transition: ${({ theme }) => theme.animations.transition};
  width: 80%;
  ul {
    margin: 0;
  }
  li {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.primary2};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
  }
`;
