import styled from "styled-components";
import { COLORS } from "../../constants";
import { Link } from "react-router-dom";

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  height: 100vh;
  /* border: 3px solid ${COLORS.dark.borderColor}; */
  /* background-color: #fafafa; */
`;

export const HeroSection = styled.header`
  /* width: 100%;
  max-width: 1200px;
  margin: 30px auto; */
  height: 100%;
  padding: 30px;
  font-size: 1rem;
  color: ${COLORS.light.fontColorPrimary};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-items: center;
  grid-gap: 20px;
`;

export const HeroTitles = styled.div`
  /* border: 3px solid ${COLORS.dark.borderColor}; */

  h1 {
    font-size: 4rem;
    font-weight: 900;
    color: #232946;
  }

  p {
    font-size: 1.5rem;
    border: 3px solid ${COLORS.dark.borderColor};
    background-color: #e78fb3;
    color: #172c66;
    padding: 10px;
  }

  &::after {
    content: "";
    width: 600px;
    height: 470px;
    position: absolute;
    top: 140px;
    left: 125px;
    border: 3px solid ${COLORS.dark.borderColor};
    background-color: #fef6e4;
    z-index: -10;
    transition: all ease;
    animation: slideUp;
    animation-duration: 3s;

    :hover {
      background-color: #232946;
      color: #e78fb3;
    }
  }

  @keyframes slideUp {
    0% {
      top: 900px;
      opacity: 0;
    }
    70% {
      top: 97px;
      opacity: 1;
    }
    100% {
      top: 145px;
      opacity: 1;
    }
  }
`;

export const HeroImage = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  z-index: 3;

  img {
    width: 100%;
    border: 3px solid ${COLORS.dark.borderColor};
  }

  &::after {
    content: "";
    width: 300px;
    height: 300px;
    position: absolute;
    top: 35px;
    left: 35px;
    border: 3px solid ${COLORS.dark.borderColor};
    z-index: -10;
    transition: all ease;
    animation: slideLeft;
    animation-duration: 3s;
  }
  @keyframes slideLeft {
    0% {
      left: -700px;
      opacity: 0;
    }
    70% {
      left: 85px;
      opacity: 1;
    }
    100% {
      left: 39px;
    }
  }
`;

export const ContactLink = styled(Link)`
  font-size: 1.5rem;
  margin-top: 30px;
  padding: 20px 28px;
  text-decoration: none;
  color: #232946;
  font-weight: 900;
  background-color: #e78fb3;
  border: 3px solid ${COLORS.dark.borderColor};
  position: absolute;
  top: 465px;
  left: 144px;

  :hover {
    background-color: #232946;
    color: #e78fb3;
  }
`;
