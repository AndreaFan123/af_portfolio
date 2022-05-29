import styled from "styled-components";
import { VARS } from "../constants";

export const SkillWrapper = styled.section`
  width: ${VARS.containerLg};
  margin: 0 auto;
  font-size: 3rem;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${VARS.secondaryFontMedium};

  ::after,
  ::before {
    content: "";
    width: 1px;
    height: 2rem;
    background: ${VARS.secondaryFontMedium};
  }
`;
