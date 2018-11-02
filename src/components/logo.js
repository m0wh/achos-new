import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SoundGif from "./soundgif";

import Sound from "../images/barcelona.mp3";
import GIF from "../images/gifs/5sectour.gif";

const LogoWrapper = styled.div`
  z-index: 1000;
`;

const LogoText = styled.h2`
  // font-size: 5rem;
  @media (min-width: 320px) {
     {
      font-size: calc(4rem + ((1vw - 0.2rem) * 2.4107));
    }
  }
  @media (min-width: 768px) {
     {
      font-size: 5rem;
    }
  }
  letter-spacing: 3px;
  line-height: 100px;
`;

const Logo = () => (
  <LogoWrapper>
    <SoundGif sound={Sound} gif={GIF}>
      <Link to="/">
        <LogoText>achos!</LogoText>
      </Link>
    </SoundGif>
  </LogoWrapper>
);

export default Logo;
