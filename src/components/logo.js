import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import fontSizes from "../utils/fontSizes";

import SoundGif from "./soundgif";

import Sound from "../images/barcelona.mp3";
import GIF from "../images/gifs/5sectour.gif";

const LogoWrapper = styled.div`
  z-index: 1000;
`;

const LogoText = styled.h2`
  ${fontSizes(5)};
  letter-spacing: 3px;
  line-height: 100px;
`;

const Logo = () => (
  <LogoWrapper>
    <SoundGif sound={Sound} gif={GIF}>
      <Link to="/">
        <LogoText>
          <Fade duration={3000} cascade count={2}>
            achos!
          </Fade>
        </LogoText>
      </Link>
    </SoundGif>
  </LogoWrapper>
);

export default Logo;
