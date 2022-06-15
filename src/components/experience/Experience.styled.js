import styled from "styled-components";
import { VARS } from "../constants";

export const ExperienceContainer = styled.main`
  width: ${VARS.containerLg};
  margin: 0 auto;
  padding: 100px 0 160px 0;
`;

export const ExperienceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ExperienceTitle = styled.div`
  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 2rem;
    color: ${VARS.secondaryFontMedium};
  }

  @media screen and (max-width: 965px) {
    text-align: center;
  }
`;

export const ExperienceCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  overflow-x: scroll;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  h3 {
    font-size: 1.5rem;
  }

  span,
  p {
    font-size: 1.2rem;
    color: ${VARS.secondaryFontMedium};
  }
`;

export const ExpImagWrapper = styled.div`
  width: 250px;
  height: 250px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
