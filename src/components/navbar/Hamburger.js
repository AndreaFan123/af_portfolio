import React from "react";
import {
  HamburgerMenu,
  // HamburgerMenuWrapper,
  HamburgerMenuIcons,
} from "./Hamburger.styled";

import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Hamburger() {
  return (
    // <HamburgerMenuWrapper>
    <HamburgerMenu>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <HamburgerMenuIcons>
        <a
          href="https://www.linkedin.com/in/andrea-fan-b98491b9/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/AndreaFan123" target="_blank">
          <BsGithub />
        </a>
      </HamburgerMenuIcons>
    </HamburgerMenu>
    // </HamburgerMenuWrapper>
  );
}
