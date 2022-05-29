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
`;
