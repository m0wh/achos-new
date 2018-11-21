// import React from "react";
// import { Link, graphql } from "gatsby";
// import styled from "styled-components";
// import fontSizes from "../utils/fontSizes";

// const Wrapper = styled.div`
//   display: grid;
//   justify-items: center;
//   align-items: end;
//   height: 80vh;
//   ${fontSizes(1.875)}
// `;

// const Text = styled.p`
//   color: white;
// `;

// export default class ScrollToClose extends React.Component {

//   state = {
//     currentScrollHeight: 0,
//   }
//   componentDidMount() {
//     // When this component mounts, begin listening for scroll changes
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     // If this component is unmounted, stop listening
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll = () => {
//     this.setState({ currentScrollHeight: window.scrollY });
//       console.log(currentScrollHeight);
//   }

//   render() {
//     const opacity = Math.max(100 / this.state.currentScrollHeight, 1);
//     return (
//       <Wrapper>
//         <Text style={{opacity}}>Scroll to close</Text>
//       </Wrapper>
//     );
//   }
// }

