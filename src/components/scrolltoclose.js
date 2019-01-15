import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";
import debounce from "../utils/debounce";
import Waypoint from 'react-waypoint';


// https://codepen.io/michaeldoyle/pen/Bhsif



const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 60vh;
  padding-bottom: 20vh;
  ${fontSizes(1.875)}
`;





// const Text = styled.p`
//   opacity: ${props => props.opacity};
// `;

const Text = styled.p.attrs({
  style: props => ({
    opacity: props.opacity
  })
});

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
    // start to detect scroll only in the wrapper
    // if scroll down
      // increase opacity
    // if scroll up
      // decrease opacity
    // when bottom of page/section => opacity === 1 && goback()
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