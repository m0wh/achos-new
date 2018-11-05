import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import posed from "react-pose";
import ReactTilt from "react-universal-tilt";
import media from "../utils/breakpoints";

// const sidebarProps = {
//   open: { x: '0%' },
//   closed: { x: '-100%' }
// }

// const Sidebar = styled(posed.nav(sidebarProps))`

const testProps = {
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.02,
    transition: { duration: 400 }
  }
};

const hoverProps = {
  hoverable: true,
  init: {
    opacity: 0
  },
  hover: {
    opacity: 1
  }
};

const titleProps = {
  init: {
    y: "-20%",
    scale: 0
  },
  hover: {
    y: "0",
    scale: 1
  }
};

const textProps = {
  init: {
    y: "120%",
    scale: 0
  },
  hover: {
    y: "0",
    scale: 1
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

const Wrapper = styled(posed.div(testProps))`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  grid-column: ${props => (props.big ? "span 2" : null)};
  // height: 80vh;
  padding: 1.5vw;
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
`;

const OverlayWrapper = styled.div`
  margin: 3.5rem 4.1875rem;
`;
const Title = styled(posed.h3(titleProps))`
  font-size: 3.33vmax;
  color: ${props => props.color};
  line-height: 1.53;
`;

const Category = styled(posed.p(categoryProps))`
  color: var(--lightgrey);
  @media (min-width: 320px) {
     {
      font-size: calc(1.1rem + ((1vw - 0.2rem) * 2.4107));
    }
  }
  @media (min-width: 768px) {
     {
      font-size: 1.875rem;
    }
  }
`;

const Text = styled(posed.p(textProps))`
  color: var(--lightgrey);
  @media (min-width: 320px) {
     {
      font-size: calc(1.1rem + ((1vw - 0.2rem) * 2.4107));
    }
  }
  @media (min-width: 768px) {
     {
      font-size: 1.875rem;
    }
  }
  line-height: 1.53;
`;

const StyledImg = styled(Img)`
  grid-column: ${props => (props.big ? "span 2" : null)};
  border-radius: 10px;
`;

export default class Gridimage extends React.Component {
  render() {
    const {
      big,
      link,
      fluid,
      name,
      category,
      introduction,
      color
    } = this.props;
    return (
      // <ReactTilt>
      <Wrapper big={big}>
        <Link to={link}>
          <StyledImg fluid={fluid} />

          <Overlay>
            <OverlayWrapper>
              <Title color={color}>{name}</Title>
              <Category>{category}</Category>
            </OverlayWrapper>
            <OverlayWrapper>
              <Text>{introduction.substr(0, 120)}</Text>
            </OverlayWrapper>
          </Overlay>
        </Link>
      </Wrapper>
      // </ReactTilt>
    );
  }
}
