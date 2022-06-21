import React from "react";
import {
  PortfolioShowcase,
  PortfolioTitles,
  PortfolioWrapper,
  ShowcaseImg,
  ShowcaseWrapper,
  ShowcaseTitles,
  ProjectGithub,
} from "./Projects.styled";

import { BsGithub } from "react-icons/bs";

import showcase_1 from "../../assets/showcase_1.jpeg";
import showcase_2 from "../../assets/showcase_2.jpeg";

import Skill from "../skill/Skill";

export default function Portfolio() {
  return (
    <PortfolioWrapper id="projects">
      <PortfolioTitles>
        <h3>Projects</h3>
        <p>I build stuffs for solving problem that happens in my life.</p>
      </PortfolioTitles>
      <Skill />
      <PortfolioShowcase>
        {/* <ShowcaseWrapper>
          <a href="https://easytodo-0508.web.app/login" target="_blank">
            <ShowcaseImg>
              <img src={showcase_2} alt="easyTodo, manage your daily tasks" />
            </ShowcaseImg>
          </a>

          <ShowcaseTitles>
            <ProjectGithub>
              <p>easyTodo</p>
              <a
                href="https://github.com/AndreaFan123/easyTodo"
                target="_blank"
              >
                <BsGithub />
              </a>
            </ProjectGithub>
            <div>
              <span>React</span>
              <span>Styled-components</span>
              <span>Firebase</span>
            </div>
          </ShowcaseTitles>
        </ShowcaseWrapper> */}
        <ShowcaseWrapper>
          <a
            href="https://glance-simple-work-space.web.app/login"
            target="_blank"
          >
            <ShowcaseImg>
              <img src={showcase_1} alt="Glance simple work space" />
            </ShowcaseImg>
          </a>

          <ShowcaseTitles>
            <ProjectGithub>
              <p>Glance</p>
              <a href="https://github.com/AndreaFan123/glance" target="_blank">
                <BsGithub />
              </a>
            </ProjectGithub>
            <div>
              <span>React</span>
              <span>Styled-components</span>
              <span>Firebase</span>
            </div>
          </ShowcaseTitles>
        </ShowcaseWrapper>
      </PortfolioShowcase>
    </PortfolioWrapper>
  );
}
