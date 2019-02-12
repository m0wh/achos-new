import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";
import debounce from "../utils/debounce";
import BottomScrollListener from "react-bottom-scroll-listener";
import { navigate } from "gatsby"



const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 60vh;
  padding-bottom: 400px;
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
      
    
    let scrolled = window.pageYOffset;
    const elemHeight = this.myRef.current && this.myRef.current.offsetHeight;
    const elemOffsetTop = this.myRef.current && this.myRef.current.offsetTop;
    let calc = ((scrolled - elemOffsetTop + 400) / 400).toFixed(2);

    


    
    this.setState({
      opacity: calc
    })

    if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight - 1) {
      // you're at the bottom of the page
      navigate('/');
    }

    

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