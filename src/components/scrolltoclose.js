import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";
import debounce from "../utils/debounce";
import Waypoint from 'react-waypoint';


// https://codepen.io/michaeldoyle/pen/Bhsif
// Range = 100
  // Start = 0
  // Final = 100
  // Scroll position dins del div ha de coincidir, map 0-100/distancia scrollable
  // Opacity = range/100
// debounce  

/*
 const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };
  window.scrollY
  window.innerHeight  
*/

/*

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
Using this we can call

getOffset(element).left
or

getOffset(element).top


*/



const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 60vh;
  padding-bottom: 20vh;
  ${fontSizes(1.875)}
`;





const Text = styled.p`
  opacity: ${props => props.opacity};
`;

class ScrollToClose extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  state = {
    opacity: 0.1,
    visible: false
  };
  

  handleScroll = (e) => {
    // console.log('scrolling');
    if (this.state.visible) {
      this.setState((prevState) => ({
        opacity: prevState.opacity + 0.1
      }))
    }
    
    
  }

  increaseOpacity = () => {
    this.setState({
      visible: true,
      opacity: 0
    })
    
  }

  decreaseOpacity = () => {
    this.setState({
      visible: false,
      opacity: 0
    })
    console.log(this.state);
  }
    //   typeof window !== `undefined` && window.history.back();
      
    
  

  render() {
    return (
      <Wrapper>
        <Waypoint onEnter={this.increaseOpacity} onLeave={this.decreaseOpacity}>
          <div>
          <Text opacity={this.state.opacity}>Scroll to close</Text>
          </div>
        </Waypoint>  
      </Wrapper>
    );
  }
}

export default ScrollToClose;