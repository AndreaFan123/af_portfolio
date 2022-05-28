import React, { useState } from "react";
import { LinkWrapper, NavLinks, NavWrapper } from "./Navbar.styled";
import { NavLink, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <NavWrapper>
      <div>
        {/* <img src="../assets/logo.png" /> */}
        <p>Andrea</p>
      </div>
      <NavLinks>
        {LinkArray.map(({ label, to }) => (
          <LinkWrapper key="label" to={to} isActive={pathname === to}>
            <Link to={to}>{label}</Link>
          </LinkWrapper>
        ))}
      </NavLinks>
    </NavWrapper>
  );
}

export const LinkArray = [
  {
    label: "About",
    to: "/",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: `/contact`,
  },
];
