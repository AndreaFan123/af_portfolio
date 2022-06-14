import styled from "styled-components";
import { VARS } from "../constants";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 180px;
  background-color: ${VARS.pinkBG};
`;

export const FooterInfoWrapper = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const FooterInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${VARS.primaryFontDark};

  h3 {
    font-size: 1.5rem;
  }
`;

export const FooterInfoRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;

export const FooterNav = styled.div`
  display: flex;
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
