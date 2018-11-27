import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";
import debounce from "../utils/debounce";


// http://qnimate.com/detecting-end-of-scrolling-in-html-element/


// Hi ha un div d'una alcada determinada
// Faig scroll a dins del div, no a window/document
// A mesura que baixo, augmento opacitat de scroll to close
// Quan arribo al final, funcio "goback"
// Aquest scroll te una "resistencia" que es va fent mes gran com mes a prop del bottom



const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;
  height: 300px;
  overflow-y: scroll;
  ${fontSizes(1.875)}
`;

const Inner = styled.div`
  height: 500px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Text = styled.p`
  color: rgba(255, 255, 255, ${props => props.opacity})
`;

class ScrollToClose extends React.Component {

  state = {
    opacity: 0.1,
  };

  handleScroll = (e) => {
    const top = e.target.scrollTop === 0;
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    // TODO: increase/decrease opacity depending if scrolldown/scrollup
    // TODO: hide inner scrollbar
    // TODO: lock body scroll?? use pose?
    this.setState({
      opacity: this.state.opacity + 0.01,
    })
    if (top) {
      this.setState({
        opacity: 0.1,
      })
    }
    if (bottom) { 
      this.setState({
        opacity: 1,
        
      })
      typeof window !== `undefined` && window.history.back();
      
    }
    
  };

  render() {
    return (
      <Wrapper  onScroll={this.handleScroll}>
        <Inner>
          <Text opacity={this.state.opacity}>Scroll to close</Text>
        </Inner>
      </Wrapper>
    );
  }
}

export default ScrollToClose;