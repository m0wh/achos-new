import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const BackgroundGif = createGlobalStyle`
  body {
    background: url("${props =>props.gif}") no-repeat center center fixed; 
    background-size: cover;
  
  }
`;


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

