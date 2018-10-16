import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SoundGif from "../components/soundgif";

import Sound from "../images/barcelona.mp3";
import GIF from "../images/gifs/5sectour.gif";

import Sound2 from "../images/hadouken.mp3";

const YourComponent = () => (
  <div>
    <SoundGif sound={Sound} gif={GIF}>
      POLOS
    </SoundGif>
    <SoundGif sound={Sound2} gif={GIF}>
      LOP
    </SoundGif>
  </div>
);

export default YourComponent;
