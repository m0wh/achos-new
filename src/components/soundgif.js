import React, { Component } from "react";
import styled from "styled-components";


const BackgroundGif = styled.div`
  background: url("${props =>props.gif}") no-repeat center center fixed; 
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
`;



class SoundGIF extends Component {
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
        <span onMouseOver={this.startIt} onMouseOut={this.stopIt} onClick={this.stopIt}>
          {children}
        </span>
        
        <audio loop preload="auto" ref={this.myRef} >
          <source src={this.props.sound} type="audio/mpeg"></source>
        </audio>

        { isGifShowing && <BackgroundGif gif={this.props.gif} />}
      </>
        
    );
  }
}

export default SoundGIF;

