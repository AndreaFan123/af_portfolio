import React from "react";
import selfie from "../../assets/selfie.jpeg";

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
    <HeaderContainer>
      <HeaderTitiles>
        <h4>Hello there,</h4>
        <h1>I'm Andrea Fan</h1>
        <p>
          I'm a frontend marketer who is passionate about learning new stuffs,
          for the lase couple of months, I have been learning frontend
          development, and I will keep learning it.{" "}
        </p>
        <HeaderCTA>
          <a href="">Download CV</a>
          <a href="">Let's Talk</a>
        </HeaderCTA>
      </HeaderTitiles>

      <HeaderImg>
        <img src={selfie} alt="Andrea Fan" />
      </HeaderImg>
      <HeaderSocial>
        <a href="linkedin">
          <BsLinkedin />
        </a>
        <a href="Github">
          <BsGithub />
        </a>
      </HeaderSocial>
    </HeaderContainer>
  );
}
