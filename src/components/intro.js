import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import fontSizes from "../utils/fontSizes";
import SoundGIF from "./soundgif";

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
import Sound2 from "../images/sounds/2_attention-grabing.mp3";
import Sound3 from "../images/sounds/3_panty-dropping.mp3";
import Sound4 from "../images/sounds/4_communication.mp3";
import Sound5 from "../images/sounds/5_and_interactive.mp3";
import Sound6 from "../images/sounds/6_design2.mp3";
import Sound7 from "../images/sounds/7_agency.mp3";
import Sound8 from "../images/sounds/8_based_in.mp3";
import Sound9 from "../images/sounds/9_barcelona.mp3";
import Sound10 from "../images/sounds/10_and_Silicon_Bali2.mp3";
import Sound11 from "../images/sounds/11_we_despise.mp3";
import Sound12 from "../images/sounds/12_the_boring.mp3";
import Sound13 from "../images/sounds/13_and_are.mp3";
import Sound14 from "../images/sounds/14_always.mp3";
import Sound15 from "../images/sounds/15_looking_for.mp3";
import Sound16 from "../images/sounds/16_fun.mp3";
import Sound17 from "../images/sounds/17_we_provide.mp3";
import Sound18 from "../images/sounds/18_bold.mp3";
import Sound19 from "../images/sounds/19_cretive.mp3";
import Sound20 from "../images/sounds/20_solutions.mp3";
import Sound21 from "../images/sounds/21_allowing.mp3";
import Sound22 from "../images/sounds/22_our_clients.mp3";
import Sound23 from "../images/sounds/23_to_stand_out.mp3";
import Sound24 from "../images/sounds/24_in_other_words.mp3";
import Sound25 from "../images/sounds/25_we_come_up.mp3";
import Sound26 from "../images/sounds/26_with_sick_ideas.mp3";
import Sound27 from "../images/sounds/27_make_neat_designs.mp3";
import Sound28 from "../images/sounds/28_and_create.mp3";
import Sound29 from "../images/sounds/29_aseriously_provocative.mp3";
import Sound30 from "../images/sounds/30_work.mp3";
import Sound31 from "../images/sounds/31_that_will_make.mp3";
import Sound33 from "../images/sounds/33_brand.mp3";
import Sound34 from "../images/sounds/34_hotter.mp3";
import Sound35 from "../images/sounds/35_than_a_banging_supernova.mp3";

// TODO: hide other text when hovering on a word (https://stackoverflow.com/questions/54132564/hide-a-component-when-another-is-hovered)

const IntroWrapper = styled.section`
  margin: 3.5vw 4.187vw;
`;

const IntroText = styled.p`
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
    <Fade cascade duration={3000}>
      <IntroText>
        <Inside>
          <SoundGIF sound={Sound1} gif={Gif1}>
            achos!
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound2} gif={Gif2}>
            attention-grabbing,
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound3} gif={Gif3}>
            panty-dropping
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound4}>communication</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound5} gif={Gif5}>
            and interactive
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound6} gif={Gif6}>
            design
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound7}>agency</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound8}>based in</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound9} gif={Gif9}>
            Barcelona
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound10} gif={Gif10}>
            and Silicon Bali.
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound11}>We despise</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound12} gif={Gif12}>
            the boring
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound13} gif={Gif13}>
            and are
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound14}>always</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound15} gif={Gif15}>
            looking for
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound16} gif={Gif16}>
            fun!
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound17} gif={Gif17}>
            We provide
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound18} gif={Gif18}>
            bold
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound19}>creative</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound20} gif={Gif20}>
            solutions
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound21} gif={Gif21}>
            allowing
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound22} gif={Gif22}>
            our clients
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound23} gif={Gif23}>
            to stand out!
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound24} gif={Gif23}>
            In other words,
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound25} gif={Gif25}>
            we come up with
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound26} gif={Gif26}>
            sick ideas,
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound27}>and create</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound28} gif={Gif28}>
            neat designs
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound29} gif={Gif29}>
            and seriously provocative
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound30}>work</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound31}>that will make</SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound33} gif={Gif33}>
            your brand
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound34} gif={Gif34}>
            hotter
          </SoundGIF>
        </Inside>{" "}
        <Inside>
          <SoundGIF sound={Sound35} gif={Gif35}>
            than a banging supernova!
          </SoundGIF>
        </Inside>{" "}
      </IntroText>
    </Fade>
  </IntroWrapper>
);

export default Intro;
