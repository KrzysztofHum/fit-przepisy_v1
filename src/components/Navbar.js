import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2, ImFacebook2 } from "react-icons/im";

export default function Navbar() {
  return (
    <Nav>
      <div>
        <div>
          <GiHamburgerMenu />
        </div>
        <div>Logo</div>
        <div>
          <ImYoutube2 />
          <ImFacebook2 />
        </div>
      </div>
      <SideNav>
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
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 992px) {
    height: 6rem;
  }
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
`;
