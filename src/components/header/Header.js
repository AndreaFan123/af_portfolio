import React from "react";

// assets
import selfie from "../../assets/selfie.jpeg";
import resume from "../../assets/resume.pdf";

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
          I'm a frontend marketer who is passionate about learning new stuffs,
          for the lase couple of months, I have been learning frontend
          development, and I will keep learning it.{" "}
        </p>
        <HeaderCTA>
          <a href={resume} download="newfilename">
            Download Resume
          </a>
          <a href="">Let's Talk</a>
        </HeaderCTA>
      </HeaderTitiles>

      <HeaderImg>
        <img src={selfie} alt="Andrea Fan" />
      </HeaderImg>
      <HeaderSocial>
        <a href="https://www.linkedin.com/in/andrea-fan-b98491b9/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/AndreaFan123">
          <BsGithub />
        </a>
      </HeaderSocial>
    </HeaderContainer>
  );
}
