import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import GIF from "../images/gifs/5sectour.gif";
import Sound from "../images/barcelona.mp3";

/* REFERENCES

- https://codepen.io/StudentOfJS/pen/dzjPwP/
- https://stackoverflow.com/questions/44379880/using-audio-tags-in-react-app-playing-chosen-file-onclick

*/


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

  myRef = React.createRef();


  startIt = () => {
    this.myRef.current.play();
    this.setState({
          isAudioPlaying: true,
          isGifShowing: true
        });
  }

  stopIt = () => {
    this.setState({
      isAudioPlaying: false,
      isGifShowing: false
    });
    this.myRef.current.pause();
    this.myRef.current.currentTime = 0;
   
  }

  render() {
    const isGifShowing = this.state.isGifShowing


    return (
      <Wrapper>
      <Trigger onMouseOver={this.startIt} onMouseOut={this.stopIt}>
      
        ALOHA
      </Trigger>
      
      <audio preload="auto" ref={this.myRef} >
        <source src={Sound} type="audio/mpeg"></source>
      </audio>

      { isGifShowing && <BackgroundGif/>}
      </Wrapper>
        
    );
  }
}


