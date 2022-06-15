import React, { useState } from "react";
import {
  MenuIcons,
  MobileActive,
  MobileIcon,
  NavLinks,
  NavWrapper,
} from "./Navbar.styled";

import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [openMobileNenu, setOpenMobileMenu] = useState(false);
  return (
    <NavWrapper>
      <h1>AF</h1>
      <NavLinks>
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
      </NavLinks>

      <MobileActive>
        {openMobileNenu ? (
          <MobileIcon onClick={() => setOpenMobileMenu(false)}>
            <CgClose style={MenuIcons} />
          </MobileIcon>
        ) : (
          <MobileIcon onClick={() => setOpenMobileMenu(true)}>
            <HiOutlineMenu style={MenuIcons} />
          </MobileIcon>
        )}
      </MobileActive>

      {openMobileNenu && <Hamburger />}
    </NavWrapper>
  );
}
