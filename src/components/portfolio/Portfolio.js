import React from "react";
import {
  PortfolioShowcase,
  PortfolioTitles,
  PortfolioWrapper,
  ShowcaseImg,
  ShowcaseWrapper,
  ShowcaseTitles,
} from "./Portfolio.styled";
import showcase_1 from "../../assets/showcase_1.png";

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <PortfolioTitles>
        <a href="#portfolio">Projects</a>
        <p>I build stuffs for practicing.</p>
      </PortfolioTitles>
      <PortfolioShowcase>
        <ShowcaseWrapper>
          <a href="https://glance-simple-work-space.web.app/">
            <ShowcaseImg>
              <img src={showcase_1} />
            </ShowcaseImg>
          </a>
          <ShowcaseTitles>
            <p>Glance</p>
            <span>Simplified work space</span>
          </ShowcaseTitles>
        </ShowcaseWrapper>
        <ShowcaseWrapper>
          <a href="https://glance-simple-work-space.web.app/">
            <ShowcaseImg>
              <img src={showcase_1} />
            </ShowcaseImg>
          </a>
          <ShowcaseTitles>
            <p>Glance</p>
            <span>Simplified work space</span>
          </ShowcaseTitles>
        </ShowcaseWrapper>
        <ShowcaseWrapper>
          <a href="https://glance-simple-work-space.web.app/">
            <ShowcaseImg>
              <img src={showcase_1} />
            </ShowcaseImg>
          </a>
          <ShowcaseTitles>
            <p>Glance</p>
            <span>Simplified work space</span>
          </ShowcaseTitles>
        </ShowcaseWrapper>
      </PortfolioShowcase>
    </PortfolioWrapper>
  );
}
