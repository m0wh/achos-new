import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { Spring } from "react-spring";
import media from "../utils/breakpoints";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  // height: 80vh;
`;
const Overlay = styled.div`
  background: rgba(26, 26, 26, 0.69)
  ;
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
const Title = styled.h3`
  font-size: 3rem;
  color: var(--pink);
  line-height: 1.53;
`;

const Category = styled.p`
  color: var(--lightgrey);
  font-size: 2rem;
`;

const Text = styled.p`
  color: var(--lightgrey);
  font-size: 2rem;
  line-height: 1.53;
`;

const StyledImg = styled(Img)`
  grid-column: ${props => (props.big ? "span 2" : null)};
`;


export default class Gridimage extends React.Component {
  state = {
    isHovering: false,
  }

  onHover = () => {
    this.setState({isHovering: true})
  }

  onLeave = () => {
    this.setState({isHovering: false})
  }

  render() {
    
    const { isHovering } = this.state;
    return (
      <Wrapper onMouseEnter={this.onHover} onMouseLeave={this.onLeave} big={this.props.big}>
        <StyledImg
          fluid={
            this.props.fluid
          }
          
        />
        { isHovering === true && (
        <Overlay>
          <OverlayWrapper>
            <Title>{this.props.name}</Title>
            <Category>{this.props.category}</Category>
          </OverlayWrapper>
          <OverlayWrapper>
            <Text>{this.props.introduction}</Text>
          </OverlayWrapper>
        </Overlay>)
        } 
      </Wrapper>
    );
  }
}