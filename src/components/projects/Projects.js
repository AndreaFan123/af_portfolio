import React from "react";
import {
  PortfolioShowcase,
  PortfolioTitles,
  PortfolioWrapper,
  ShowcaseImg,
  ShowcaseWrapper,
  ShowcaseTitles,
} from "./Projects.styled";
import showcase_1 from "../../assets/showcase_1.jpeg";

export default function Portfolio() {
  return (
    <PortfolioWrapper id="projects">
      <PortfolioTitles>
        <a href="#portfolio">Projects</a>
        <p>I build stuffs for solving problem that happens in my life.</p>
      </PortfolioTitles>
      <PortfolioShowcase>
        <ShowcaseWrapper>
          <a href="https://glance-simple-work-space.web.app/login">
            <ShowcaseImg>
              <img src={showcase_1} alt="Glance simple work space" />
            </ShowcaseImg>
          </a>
          <ShowcaseTitles>
            <p>Glance</p>
            <a href="/glance-project-description">Project Description</a>
            <span>React</span>
            <span>Styled-components</span>
            <span>Firebase</span>
          </ShowcaseTitles>
        </ShowcaseWrapper>
      </PortfolioShowcase>
    </PortfolioWrapper>
  );
}
