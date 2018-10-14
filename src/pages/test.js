import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import GIF from "../images/gifs/5sectour.gif";
import Sound from "../images/barcelona.mp3";
import { throws } from "assert";


const Trigger = styled.p`
  // z-index: 1;

`;

const Wrapper = styled.div`
  // z-index: 1;
  // position: absolute;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
`;

const BackgroundGif = styled.div`
  z-index: -2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-image: url("${GIF}");
  background-size: cover;
  background-position: center;

  
`;

export default class GifAudioPlayer extends Component {
  
  state = {
    isAudioPlaying: false,
    isGifShowing: false
  };

  // audioTest = React.createRef();

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

  playAudio = () => {
    this.playPlay.play();
  }

  stopAudio = () => {
    this.playPlay.pause();
    this.playPlay.currentTime = 0;
  }

  

  render() {
    console.log(this.state);

    const isGifShowing = this.state.isGifShowing
    const isAudioPlaying = this.state.isAudioPlaying;

    return (
      
      
        <Wrapper>
        <Trigger onMouseOver={this.startIt} onMouseOut={this.stopIt} onMouseOver={this.playAudio} onMouseOut={this.stopAudio}>
        
          ALOHA
        </Trigger>
        

        { isGifShowing && <BackgroundGif/>}
        
        <audio preload="auto" ref={(hey) => { this.playPlay = hey; }} >
        
        <source src={Sound} type="audio/mpeg"></source></audio>
        </Wrapper>
        
      );
  }
}


