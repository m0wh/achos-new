import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import fontSizes from "../utils/fontSizes";
import { appear, fade, slideUp, staggerChildren } from "../styles/poses";

const IntroWrapper = styled.section`
  margin: 3.5vw 4.187vw;
`;

const IntroText = styled(posed.p(fade))`
  ${fontSizes(3)};
  color: var(--lightgrey);
  line-height: var(--bigtextlineheight);
`;

const Inside = styled.span`
  overflow: hidden;
  position: relative;
  display: inline-block;
  &:hover {
    color: white;
  }
  &::before {
    position: absolute;
    top: -3px;
    left: -1px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(255, 113, 177, 1);
    background: linear-gradient(
      to right,
      rgba(255, 113, 177, 1) 0%,
      rgba(0, 255, 255, 1) 33%,
      rgba(66, 250, 121, 1) 66%,
      rgba(255, 243, 109, 1) 100%
    );
    content: "";
    transition: transform 5s;
    transform: scale(0.9) translateX(-110%);
  }
  &:hover::before {
    transform: scaleY(0.9) translateX(0);
  }
  &:focus::before {
    transform: scaleY(0.9) translateX(0);
  }
`;

const Intro = () => (
  <IntroWrapper>
    <IntroText>
      achos! attention-grabbing, panty-dropping communication and interactive
      <Inside>design</Inside>
      agency based in Barcelona and Silicon Bali. We despise the boring and are
      always looking for fun! We provide bold creative solutions allowing our
      clients to stand out! In other words, we make sick ideas, neat designs and
      seriously provocative work that will make your brand hotter than a banging
      supernova!
    </IntroText>
  </IntroWrapper>
);

export default Intro;
