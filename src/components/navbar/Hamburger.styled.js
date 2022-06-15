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
  font-size: 2rem;
  font-weight: 700;
  height: fit-content;
  background-color: rgba(255, 255, 255, 90%);
  text-align: center;
  padding-top: 200px;
  padding-bottom: 90px;
  padding-right: 40px;

  transition: all 0.5s ease;

  a {
    color: ${VARS.primaryFontDark};
  }

  @keyframes mobileMenu {
    0% {
      transform: translateY(-100px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export const HamburgerMenuIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;
