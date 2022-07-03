import React from "react";

// assets
import selfie from "../../assets/selfie.jpeg";
import resume from "../../assets/Resume_Andrea.pdf";

//icon
import { BsLinkedin, BsGithub } from "react-icons/bs";

// styles
import {
  HeaderContainer,
  HeaderCTA,
  HeaderImg,
  HeaderSocial,
  HeaderTitiles,
} from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer id="about">
      <HeaderTitiles>
        <h4>Hello there,</h4>
        <h1>I'm Andrea Fan</h1>
        <p>
          I'm an experienced marketer from Taiwan 🇹🇼 , who is passionate about
          learning new techs. I love solving problems by trying to build tools
          that might be helpful for team.
        </p>
        <HeaderCTA>
          <a href={resume} target="_blank">
            Open Resume
          </a>
          {/* <a href="#contact">Let's Talk</a> */}
        </HeaderCTA>
      </HeaderTitiles>

      <HeaderImg>
        <img src={selfie} alt="Andrea Fan" />
      </HeaderImg>
      <HeaderSocial>
        <a
          href="https://www.linkedin.com/in/andrea-fan-b98491b9/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/AndreaFan123" target="_blank">
          <BsGithub />
        </a>
      </HeaderSocial>
    </HeaderContainer>
  );
}
