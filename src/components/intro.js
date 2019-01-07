import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import fontSizes from "../utils/fontSizes";
import SoundGIF from "./soundgif";
import { appear, fade, slideUp, staggerChildren } from "../styles/poses";

// Gif imports
import Gif1 from "../images/gifs/1_achos.gif";
import Gif2 from "../images/gifs/2_attention-grabing.gif";
import Gif3 from "../images/gifs/3_panty-dropping4.gif";
import Gif5 from "../images/gifs/5_and_interactive3.gif";
import Gif6 from "../images/gifs/6_design2.gif";
import Gif9 from "../images/gifs/9_Barcelona.gif";
import Gif10 from "../images/gifs/10_and_silicon_Bali.gif";
import Gif12 from "../images/gifs/12_the_boring.gif";
import Gif13 from "../images/gifs/13_and_are.gif";
import Gif15 from "../images/gifs/15_looking_for.gif";
import Gif16 from "../images/gifs/16_fun9.gif";
import Gif17 from "../images/gifs/17_we_provide.gif";
import Gif18 from "../images/gifs/18_bold.gif";
import Gif20 from "../images/gifs/20_solutions.gif";
import Gif21 from "../images/gifs/21_allowing2.gif";
import Gif22 from "../images/gifs/22_our_clients.gif";
import Gif23 from "../images/gifs/23_to_stand_out2.gif";
import Gif25 from "../images/gifs/25_we_come_up.gif";
import Gif26 from "../images/gifs/26_with_sick_ideas5.gif";
import Gif28 from "../images/gifs/28_and_create.gif";
import Gif29 from "../images/gifs/29_aseriously_provocative.gif";
import Gif33 from "../images/gifs/33_your_brand.gif";
import Gif34 from "../images/gifs/34_hotter.gif";
import Gif35 from "../images/gifs/35_than_a_banging_supernova.gif";
// Sound imports
import Sound1 from "../images/sounds/1_achos.mp3";
import Sound1 from "../images/sounds/2_attention-grabing.mp3";
import Sound1 from "../images/sounds/3_panty-dropping.mp3";
import Sound1 from "../images/sounds/4_communication.mp3";
import Sound1 from "../images/sounds/5_and_interactive.mp3";
import Sound1 from "../images/sounds/7_agency.mp3";
import Sound1 from "../images/sounds/8_based_in.mp3";
import Sound1 from "../images/sounds/9_barcelona.mp3";
import Sound1 from "../images/sounds/10_and_Silicon_Bali2.mp3";
import Sound1 from "../images/sounds/11_we_despise.mp3";
import Sound1 from "../images/sounds/12_the_boring.mp3";
import Sound1 from "../images/sounds/13_and_are.mp3";
import Sound1 from "../images/sounds/14_always.mp3";
import Sound1 from "../images/sounds/15_looking_for.mp3";
import Sound1 from "../images/sounds/16_fun.mp3";
import Sound1 from "../images/sounds/1_achos.mp3";


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
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif1}>
          achos!
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif2}>
          attention-grabbing,
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif3}>
          panty-dropping
        </SoundGIF>
      </Inside>
      communication
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif5}>
          and interactive
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif6}>
          design
        </SoundGIF>
      </Inside>
      agency based in
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif9}>
          Barcelona
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif10}>
          and Silicon Bali.
        </SoundGIF>
      </Inside>
      We despise
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif12}>
          the boring
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif13}>
          and are
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif15}>
          always looking for
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif16}>
          fun!
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif17}>
          We provide
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif18}>
          bold
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif20}>
          creative solutions
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif21}>
          allowing
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif22}>
          our clients
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif23}>
          to stand out!
        </SoundGIF>
      </Inside>
      In other words,
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif25}>
          we come up with
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif26}>
          sick ideas,
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif28}>
          and create neat designs
        </SoundGIF>
      </Inside>
      and
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif29}>
          seriously provocative work
        </SoundGIF>
      </Inside>
      that will make
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif33}>
          your brand
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif34}>
          hotter
        </SoundGIF>
      </Inside>
      <Inside>
        <SoundGIF sound={Sound1} gif={Gif35}>
          than a banging supernova!
        </SoundGIF>
      </Inside>
    </IntroText>
  </IntroWrapper>
);

export default Intro;
