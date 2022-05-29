import styled from "styled-components";
import { VARS } from "../constants";

export const HeaderContainer = styled.header`
  width: ${VARS.containerLg};
  margin: 0 auto;
  padding: 180px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 20px;
  position: relative;
`;

export const HeaderTitiles = styled.section`
  display: inline-block;

  h4 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  h1 {
    font-size: 4rem;
    color: ${VARS.primaryFontLight};
  }

  p {
    font-size: 1.2rem;
    color: ${VARS.secondaryFontMedium};
  }
`;

export const HeaderCTA = styled.div`
  margin-top: 38px;
  font-size: 1.3rem;

  a {
    margin-right: 20px;
    padding: 14px 10px;
    color: ${VARS.primaryFontDark};
    border-radius: 5px;
  }

  a:nth-child(1) {
    background-color: ${VARS.pinkBG};

    :hover {
      color: ${VARS.pinkBG};
      background-color: transparent;
      border: 2px solid ${VARS.pinkBG};
    }
  }

  a:nth-child(2) {
    color: ${VARS.pinkBG};
    border: 2px solid ${VARS.pinkBG};

    :hover {
      background-color: ${VARS.pinkBG};
      border: transparent;
      color: ${VARS.primaryFontDark};
    }
  }
`;

export const HeaderImg = styled.section`
  width: 300px;
  height: 300px;
  position: relative;

  img {
    width: 100%;
    border-radius: 10px;
  }

  ::after {
    content: "";
    width: 300px;
    height: 320px;
    background: linear-gradient(${VARS.pinkBG}, transparent);
    border-radius: 10px;
    position: absolute;
    transform: rotate(-30deg);
    top: 0;
    left: 0;
    z-index: -10;
  }
`;

export const HeaderSocial = styled.section`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 17rem;
  left: -8rem;

  a {
    color: ${VARS.secondaryFontMedium};

    :hover {
      color: ${VARS.pinkBG};
    }
  }

  ::after,
  ::before {
    content: "";
    width: 1px;
    height: 2rem;
    background: ${VARS.secondaryFontMedium};
  }
`;
