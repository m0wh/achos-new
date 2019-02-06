import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";
import debounce from "../utils/debounce";
import { element } from "prop-types";
import { navigate } from "gatsby"



const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 60vh;
  padding-bottom: 40vh;
  color: white;
  ${fontSizes(1.875)}
`;


class ScrollToClose extends React.Component {

  state = {
    opacity: 0,
  };

  myRef = React.createRef();

  componentDidMount() {
    // window.scrollTo(0,0);
    window.addEventListener('scroll', this.handleScroll);
    
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  
  handleScroll = () => {
    // function getOffset(el) {
    //   const rect = el.getBoundingClientRect();
    //   return rect.top;
    // }
    
    // let elementTop = getOffset(this.myRef.current);
    // console.log(elementTop);
      
    
    let scrolled = window.pageYOffset;
    const elemHeight = this.myRef.current && this.myRef.current.offsetHeight;
    const elemOffsetTop = this.myRef.current && this.myRef.current.offsetTop;
    // let offset = height / 2;
    // let calc = 0 + (scrolled - offset + 200) / 200;
    // When scrolled === 
    let calc = ((scrolled - elemOffsetTop + elemHeight) / elemHeight).toFixed(2);

    
    this.setState({
      opacity: calc
    })

    // if (calc <= 0.2) {
    //   this.setState({
    //     opacity: 0
    //   })
    // }

    if (this.state.opacity >= 1) {
      navigate('/');
    }
    
    // TODO: go back when reaching the bottom. Now it is buggy.

  }

  render() {
    
    
    return (
      <Wrapper ref={this.myRef}>
          <p style={{opacity: this.state.opacity}}>Scroll to close</p>
      </Wrapper>
    );
  }
}

export default ScrollToClose;