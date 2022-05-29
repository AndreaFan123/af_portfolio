import styled from "styled-components";
import { VARS } from "../constants";

export const PortfolioWrapper = styled.section`
  width: ${VARS.containerLg};
  margin: 0 auto;
  padding: 100px 0;
  font-size: 1rem;
`;

export const PortfolioShowcase = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const PortfolioTitles = styled.div`
  padding-bottom: 30px;
  a {
    font-size: 2rem;
    font-weight: 800;
    color: ${VARS.primaryFontLight};
  }
  p {
    font-size: 1.2rem;
  }
`;

export const ShowcaseWrapper = styled.div`
  border: 2px solid ${VARS.pinkBG};
  border-radius: 5px;
  overflow: hidden;

  a {
    color: ${VARS.secondaryFontMedium};

    h5 {
      font-size: 1.5rem;
    }
  }
`;

export const ShowcaseImg = styled.div`
  width: 343px;
  /* height: 300px; */

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ShowcaseTitles = styled.div`
  padding: 15px;
  color: ${VARS.secondaryFontMedium};
  p {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
