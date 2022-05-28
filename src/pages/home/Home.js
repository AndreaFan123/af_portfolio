import React from "react";
import {
  ContactLink,
  HeroImage,
  HeroSection,
  HeroTitles,
  MainWrapper,
} from "./Home.styled";

import {
  SiFirebase,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";

import selfie from "../../assets/selfie.jpeg";
import { Link } from "react-router-dom";
import Project from "../project/Project";

export default function Home() {
  return (
    <MainWrapper>
      <HeroSection>
        <HeroTitles>
          <h1>Hello there.</h1>
          <h1>I'm Andrea.</h1>
          <div>
            <p>
              I’m a marketer, who is passionate about learning new technologies.
              I've been learning frontend-development for months, and I'll keep
              learning.{" "}
            </p>
          </div>
        </HeroTitles>
        <HeroImage>
          <img src={selfie} />
        </HeroImage>
        <ContactLink to="/contact">Contact Me</ContactLink>
      </HeroSection>
      <section>
        {SkillIconsArray.map(({ label, icon }) => (
          <div>
            <div>{icon}</div>
            <span>{label}</span>
          </div>
        ))}
      </section>
      <Project />
    </MainWrapper>
  );
}

export const SkillIconsArray = [
  { labe: "HTML", icon: <SiHtml5 /> },
  { labe: "CSS", icon: <SiCss3 /> },
  { labe: "JavaScript", icon: <SiJavascript /> },
  { labe: "Tailwindcss", icon: <SiTailwindcss /> },
  { labe: "Firebase", icon: <SiFirebase /> },
];
