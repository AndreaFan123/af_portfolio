import React from "react";
import { NavLinks, NavWrapper } from "./Navbar.styled";

export default function Navbar() {
  return (
    <NavWrapper>
      <h1>Andrea Fan</h1>
      <NavLinks>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </NavLinks>
    </NavWrapper>
  );
}
