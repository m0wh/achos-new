import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";

// Hi ha un div on escolto "scroll" i a mesura que baixo augmenta l'opacitat d'un element child. Quan arribo a un cert nivell, funcio que em fa tornar enrere (goback).

// http://qnimate.com/detecting-end-of-scrolling-in-html-element/

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;
  height: 80vh;
  ${fontSizes(1.875)}
`;

const Text = styled.p`
  color: white;
`;

export default class ScrollToClose extends React.Component {

  state = {
    currentScrollHeight: '',
  }
  componentDidMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ currentScrollHeight: window.scrollY });
    console.log(this.state.currentScrollHeight);
  }

  render() {
    const opacity = Math.max(100 / this.state.currentScrollHeight, 1);
    return (
      <Wrapper>
        <Text style={{opacity}}>Scroll to close</Text>
      </Wrapper>
    );
  }
}
