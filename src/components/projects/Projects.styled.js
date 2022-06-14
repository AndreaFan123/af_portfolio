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
    color: ${VARS.secondaryFontMedium};
  }
`;

export const ShowcaseWrapper = styled.div`
  border: 3px solid ${VARS.pinkBG};
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
  width: 100%;
  overflow: hidden;
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

  a {
    display: block;
    cursor: pointer;

    :hover {
      transition: all 0.4s ease-in-out;
      font-weight: 500;
      color: ${VARS.pinkBG};
    }
  }

  span {
    display: inline-block;
    margin: 10px 10px 10px 0;
    padding: 5px;
    border: 1px solid ${VARS.btnPinkBG};
    border-radius: 5px;
  }
`;
