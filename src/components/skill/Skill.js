import React from "react";

//icons
import {
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import { SkillWrapper } from "./Skill.styled";

export default function Experience() {
  return (
    <SkillWrapper>
      {SkillArray.map(({ label, icon }) => (
        <>
          <span>{icon}</span>
          {/* <span>{label}</span> */}
        </>
      ))}
    </SkillWrapper>
  );
}

export const SkillArray = [
  { label: "HTML5", icon: <SiHtml5 /> },
  { label: "CSS3", icon: <SiCss3 /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "React", icon: <SiReact /> },
  { label: "Styled-components", icon: <SiStyledcomponents /> },
  { label: "Firebase", icon: <SiFirebase /> },
];
