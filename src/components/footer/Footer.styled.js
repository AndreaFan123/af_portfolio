import styled from "styled-components";
import { VARS } from "../constants";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 180px;
  background-color: ${VARS.pinkBG};
  @media screen and (max-width: 745px) {
    height: fit-content;
  }
`;

export const FooterInfoWrapper = styled.div`
  width: ${VARS.containerLg};
  height: fit-content;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 745px) {
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

export const FooterInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${VARS.primaryFontDark};
  position: relative;

  h3 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 745px) {
    span {
      position: absolute;
      bottom: -165px;
    }
  }

  @media screen and (max-width: 430px) {
    span {
      font-size: 0.7rem;
    }
  }
`;

export const FooterInfoRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 745px) {
    width: 50%;
    margin-top: 20px;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;

  a {
    color: ${VARS.primaryFontDark};

    :hover {
      cursor: pointer;
      border-bottom: 1px solid ${VARS.primaryBgDark};
    }
  }
`;

export const FooterIcon = styled.div`
  a {
    color: ${VARS.primaryFontDark};
    font-size: 1.7rem;
    cursor: pointer;

    svg {
      margin-bottom: 15px;
    }

    :hover {
    }
  }
`;
