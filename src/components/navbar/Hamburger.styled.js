import styled from "styled-components";
import { VARS } from "../constants";

export const HamburgerMenuWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;
export const HamburgerMenu = styled.ul`
  position: absolute;
  z-index: 10;
  top: -81px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  font-size: 2rem;
  font-weight: 700;
  height: fit-content;
  background-color: rgba(255, 255, 255, 90%);
  text-align: center;
  padding-top: 200px;
  padding-bottom: 90px;
  padding-right: 40px;
  transition: all 0.5s ease-in;
  animation: mobileMenu 1s;

  a {
    color: ${VARS.primaryFontDark};
  }

  @keyframes mobileMenu {
    0% {
      top: -1000px;
    }

    50% {
      top: -70px;
    }

    100% {
      top: -81px;
    }
  }
`;

export const HamburgerMenuIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;
