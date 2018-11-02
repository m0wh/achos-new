import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const IntroWrapper = styled.div`
  color: white;
  margin: 3.5rem 4.1875rem;
`;

const IntroText = styled.p`
  // font-size: 3rem;
  @media (min-width: 20rem) {
     {
      font-size: calc(2rem + ((1vw - 0.2rem) * 3.5714));
    }
  }
  @media (min-width: 48rem) {
     {
      font-size: 3rem;
    }
  }
  color: var(--lightgrey);
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
`;

const Intro = () => (
  <IntroWrapper>
    <IntroText>
      achos! attention-grabbing, panty-dropping communication and interactive
      design agency based in Barcelona and Silicon Bali. We despise the boring
      and are always looking for fun! We provide bold creative solutions
      allowing our clients to stand out! In other words, we make sick ideas,
      neat designs and seriously provocative work that will make your brand
      hotter than a banging supernova!
    </IntroText>
  </IntroWrapper>
);

export default Intro;
