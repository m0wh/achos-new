import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import media from "../utils/breakpoints";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  grid-column: ${props => (props.big ? "span 2" : null)};
  // height: 80vh;
`;
const Overlay = styled.div`
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
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const OverlayWrapper = styled.div`
  margin: 3.5rem 4.1875rem;
`;
const Title = styled.h3`
  font-size: 3.33vmax;
  color: ${props => props.color};
  line-height: 1.53;
`;

const Category = styled.p`
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

const Text = styled.p`
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
    );
  }
}
