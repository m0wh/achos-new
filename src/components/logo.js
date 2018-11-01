import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SoundGif from "./SoundGIF";

import Sound from "../images/barcelona.mp3";
import GIF from "../images/gifs/5sectour.gif";

const LogoWrapper = styled.div`
  order: 0;
  align-self: flex-start;
  flex-grow: 3;
  z-index: 1000;
`;

const LogoText = styled.h2`
  font-size: 5rem;
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
