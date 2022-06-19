import React from "react";

import coda from "../../assets/codapayments.png";
import elex from "../../assets/elex.jpeg";
import wg from "../../assets/wargaming.png";
import {
  CardsWrapper,
  ExperienceCards,
  ExperienceContainer,
  ExperienceTitle,
  ExperienceWrapper,
  ExpImagWrapper,
} from "./Experience.styled";

export default function Experience() {
  return (
    <ExperienceContainer id="experience">
      <ExperienceWrapper>
        <ExperienceTitle>
          <h3>Experience</h3>
          <p>Check out my resume for more details</p>
        </ExperienceTitle>

        {/* Grid */}
        <ExperienceCards>
          {/* Card 1 */}
          <CardsWrapper>
            <ExpImagWrapper>
              <img src={coda} alt="codapayments" />
            </ExpImagWrapper>
            <div>
              <h3>Codapayments</h3>
              <span>Oct 2020 - Dec 2021</span>
              <div>
                <p>Senior Marketing TW/HK</p>
              </div>
            </div>
          </CardsWrapper>

          {/* Card 2 */}
          <CardsWrapper>
            <ExpImagWrapper>
              <img src={elex} alt="elex" />
            </ExpImagWrapper>
            <div>
              <h3>elex</h3>
              <span>Jun 2019 - Sep 2020</span>
              <div>
                <p>Community Manager</p>
              </div>
            </div>
          </CardsWrapper>

          {/* Card 3 */}
          <CardsWrapper>
            <ExpImagWrapper>
              <img src={wg} alt="wargaming" />
            </ExpImagWrapper>
            <div>
              <h3>Wargaming.net</h3>
              <span> May 2018 - 2019 Feb</span>
              <div>
                <p>Sales Optimization TW/HK</p>
              </div>
            </div>
          </CardsWrapper>
        </ExperienceCards>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
}
