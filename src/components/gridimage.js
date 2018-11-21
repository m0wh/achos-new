import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import posed from "react-pose";
import media from "../utils/breakpoints";




// const sidebarProps = {
//   open: { x: '0%' },
//   closed: { x: '-100%' }
// }

// const Sidebar = styled(posed.nav(sidebarProps))`

// const testProps = {
//   hoverable: true,
//   init: {
//     scale: 1
//   },
//   hover: {
//     scale: 1.02,
//     transition: { duration: 400 }
//   }
// };

const hoverProps = {
  hoverable: true,
  init: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  }
};


const titleProps = {
  init: {
    y: "-20%",
    scale: 0,
  },
  hover: {
    y: "0",
    scale: 1,
    
  }
};

const categoryProps = {
  init: {
    scale: 0
  },
  hover: {
    scale: 1
  }
};


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  grid-column: ${props => (props.big ? "span 2" : null)};
  // height: 80vh;
  
`;
const Overlay = styled(posed.div(hoverProps))`
  background: rgba(26, 26, 26, 0.69);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  // height: 80vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  &:hover {
    cursor: var(--plusminus); 
  }
`;

const OverlayWrapper = styled.div`
  margin: 3.5vw 4.1875vw;
`;
const Title = styled(posed.h3(titleProps))`
  font-size: 3.33vmax;
  color: ${props => props.color};
`;

const Category = styled(posed.p(categoryProps))`
  color: var(--lightgrey);
  @media (min-width: 320px) {
     
      font-size: calc(1.1rem + ((1vw - 0.2rem) * 2.4107));
    }
  
  @media (min-width: 768px) {
     
      font-size: 1.875rem;
    
  }
`;

// const Text = styled(posed.p(textProps))`
//   color: var(--lightgrey);
//   @media (min-width: 320px) {
//      {
//       font-size: calc(1.1rem + ((1vw - 0.2rem) * 2.4107));
//     }
//   }
//   @media (min-width: 768px) {
//      {
//       font-size: 1.875rem;
//     }
//   }
//   line-height: 1.53;
// `;

const StyledImg = styled(Img)`
  grid-column: ${props => (props.big ? "span 2" : null)};
`;


export default class Gridimage extends React.Component {
  myRef = React.createRef();

  startSound = () => {
    this.myRef.current.play();
    
  }
  render() {
    const {
      big,
      link,
      fluid,
      name,
      category,
      color
    } = this.props;
    return (
      <Wrapper big={big} onMouseEnter={this.startSound}>
        <Link to={link}>
          <StyledImg fluid={fluid} />
          <audio preload="auto" ref={this.myRef} >
            <source src={this.props.sound} type="audio/mpeg"></source>
          </audio>

          <Overlay>
            <OverlayWrapper>
              <Title color={color}>{name}</Title>
              <Category>{category}</Category>
            </OverlayWrapper>
          </Overlay>
        </Link>
      </Wrapper>
    );
  }
}
