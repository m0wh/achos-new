import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";
import debounce from "../utils/debounce";

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

  state = {
    opacity: 0,
  };

  myRef = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  
  handleScroll = () => {
    function getOffset(el) {
      const rect = el.getBoundingClientRect();
      return rect.top;
    }
    
    let elementTop = getOffset(this.myRef.current);
      
    // }

    let height = this.myRef.current.offsetHeight;
    let scrollTop = this.myRef.current.pageYOffset;
    let offset = height / 2;
    let calc = ((window.pageYOffset - elementTop) - offset + 200) / 200;

    // if (calc < 0) {
    //   this.setState({ opacity: 1 });
    // }  
    
    // else if ( calc > 1 ) {
    //   this.setState({ opacity: 0 });
    // }

    
    this.setState({
      opacity: calc
    })

    console.log(calc);
  }

  
  
    //   typeof window !== `undefined` && window.history.back();
      
    
  

  render() {
    
    
    return (
      <Wrapper ref={this.myRef}>
          <Text style={{opacity: this.state.opacity}}>Scroll to close</Text>
      </Wrapper>
    );
  }
}

export default ScrollToClose;