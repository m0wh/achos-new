import React, { Component } from "react";
import styled from "styled-components";
import DidgeridooImage from "../images/didgeridoo.jpg"
import DidgeridooSound from "../images/didgeridoosound.mp3"

const Wrapper = styled.div`
  background: url("${DidgeridooImage}") no-repeat center center fixed; 
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 90000;
  width: 100vw;
  height: 100vh;
`;


class Resizer extends Component {

  state = {
    resizing: false
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
  }

  onResize = () => {
    this.setState({
      resizing: true
    });
    setTimeout(() => this.setState({resizing: false}), 1000);
  }


  render() {
    return (
      <div onResize={this.onResize}>
        {this.state.resizing && <Wrapper />}
        {this.state.resizing && <audio autoPlay src={DidgeridooSound}></audio>}
      </div>
    );
  }
}

export default Resizer;
