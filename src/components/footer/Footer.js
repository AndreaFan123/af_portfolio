import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  FooterContainer,
  FooterIcon,
  FooterInfoLeft,
  FooterInfoRight,
  FooterInfoWrapper,
  FooterNav,
} from "./Footer.styled";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterInfoWrapper>
        <FooterInfoLeft>
          <h3>Andrea Fan</h3>
          <span>© 2022-present Andrea Fan. All Rights Reserved.</span>
        </FooterInfoLeft>
        <FooterInfoRight>
          <FooterNav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </FooterNav>
          <FooterIcon>
            <a href="https://www.linkedin.com/in/andrea-fan-b98491b9/">
              <BsLinkedin />
            </a>
            <a href="https://github.com/AndreaFan123">
              <BsGithub />
            </a>
          </FooterIcon>
        </FooterInfoRight>
      </FooterInfoWrapper>
    </FooterContainer>
  );
}
