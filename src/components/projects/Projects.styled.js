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

  @media screen and (max-width: 810px) {
    grid-template-columns: none;
  }
`;

export const PortfolioTitles = styled.div`
  /* padding-bottom: 30px; */
  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${VARS.primaryFontLight};
  }
  p {
    font-size: 2rem;
    color: ${VARS.secondaryFontMedium};
  }

  @media screen and (max-width: 965px) {
    text-align: center;
  }
`;

export const ShowcaseWrapper = styled.div`
  border: 3px solid ${VARS.pinkBG};
  border-radius: 5px;
  overflow: hidden;
  width: 370px;
  height: 370px;

  a {
    color: ${VARS.secondaryFontMedium};

    h5 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 430px) {
    width: 300px;
    height: 350px;
  }
`;

export const ShowcaseImg = styled.div`
  width: 100%;
  overflow: hidden;
  /* height: 300px; */

  img {
    width: 100%;
    height: 100%;
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
    background: rgb(184, 193, 236);
    background: linear-gradient(
      90deg,
      rgba(184, 193, 236, 1) 0%,
      rgba(221, 199, 227, 1) 27%,
      rgba(255, 204, 219, 1) 100%
    );
    margin: 10px 10px 10px 0;
    padding: 5px;
    color: ${VARS.primaryFontDark};
    border-radius: 5px;
  }
`;
