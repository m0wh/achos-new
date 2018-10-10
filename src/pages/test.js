import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import GIF from "../images/gifs/5sectour.gif";
import Sound from "../images/barcelona.mp3";


const Trigger = styled.p`
  z-index: 1;

`;

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
`;

const BackgroundGif = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: cover url("${GIF}");

  
`;






export default class YourComponent extends Component {
  
  state = {
    isAudioPlaying: false,
    isGifShowing: false
  };

  startIt = () => {
    this.setState({
      isAudioPlaying: true,
      isGifShowing: true
    });
  };

  stopIt = () => {
    this.setState({
      isAudioPlaying: false,
      isGifShowing: false
    });
  };


  render() {
    console.log(this.state);

    const isGifShowing = this.state.isGifShowing
    const isAudioPlaying = this.state.isAudioPlaying;

    return (
      
        <Wrapper>
        
        <Trigger onMouseOver={this.startIt} onMouseOut={this.stopIt}>
          aaa
        </Trigger>
        { isGifShowing && <BackgroundGif/>}
        </Wrapper>
      );
  }
}

