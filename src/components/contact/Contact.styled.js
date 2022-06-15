import styled from "styled-components";
import { VARS } from "../constants";

export const FormWrapper = styled.section`
  width: ${VARS.containerLg};
  margin: 0 auto;
  padding: 100px 0;

  div {
    margin-bottom: 20px;

    @media screen and (max-width: 965px) {
      text-align: center;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 2rem;
    color: ${VARS.secondaryFontMedium};
  }

  @media screen and (max-width: 400px) {
    width: ${VARS.containerSm};
  }
`;

export const Form = styled.form`
  width: 100%;
  /* border: 3px solid ${VARS.pinkBG}; */
  font-size: 1.2rem;
  color: ${VARS.primaryFontLight};

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 3px;
    background-color: ${VARS.secondaryFontMedium};
  }

  span {
    padding-bottom: 5px;
  }

  button {
    border: none;
    border-radius: 3px;
    background-color: ${VARS.secondaryFontMedium};
    padding: 10px 20px;
    color: ${VARS.primaryFontDark};

    @media screen and (max-width: 965px) {
      display: block;
    }
  }
`;
