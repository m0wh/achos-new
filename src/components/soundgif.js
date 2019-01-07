import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// FIXME: BackgroundGIF needs to be ALWAYS full width no matter its container. Maybe it would be better to alter the "global" background everytime?

const Trigger = styled.p`
  // z-index: 1;
  // color: red;
`;

// const Wrapper = styled.div`
   // z-index: 1;
   // position: absolute;
   // width: 100vw;
   // height: 100vh;
   // max-width: 100%;
// `;

const BackgroundGif = styled.span`
  z-index: -2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  max-width: 100%;
  background-image: url("${props =>props.gif}");
  background-size: cover;
  background-position: center;
  
`;

export default class SoundGIF extends Component {
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
    const { children } = this.props


    return (
      <>
        <Trigger onMouseOver={this.startIt} onMouseOut={this.stopIt} onClick={this.stopIt}>
          {children}
        </Trigger>
        
        <audio loop preload="auto" ref={this.myRef} >
          <source src={this.props.sound} type="audio/mpeg"></source>
        </audio>

        { isGifShowing && <BackgroundGif gif={this.props.gif} />}
      </>
        
    );
  }
}

