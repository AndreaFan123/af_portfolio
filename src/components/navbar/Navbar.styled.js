import styled from "styled-components";
import { VARS } from "../constants";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
  width: ${VARS.containerLg};
  margin: 0 auto;
  padding: 80px 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${VARS.btnPinkBG}; */

  h1 {
    font-size: 2rem;
    color: ${VARS.primaryFontDark};
  }
`;

export const NavLinks = styled.ul`
  display: flex;

  li,
  a {
    font-size: 1.3rem;
    color: ${VARS.primaryFontDark};
    padding: 10px;

    :active,
    :focus,
    :hover {
      color: ${VARS.btnPinkBG};
      background-color: ${VARS.btnDarkBG};
      /* width: fit-content; */
      transition: ${VARS.transitionEffect};
    }
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const MobileActive = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
  }
`;

export const MobileIcon = styled.div`
  z-index: 100;
  position: absolute;
  top: 69px;
  right: 97px;
  display: flex;
  align-items: center;
`;

export const MenuIcons = {
  color: `${VARS.primaryFontDark}`,
  fontSize: "1.7rem",
};
