import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import fontSizes from "../utils/fontSizes";
import media from "../utils/breakpoints";

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1vw;
  align-items: baseline;
  ${fontSizes(1.875)}
  margin: 0 3.5625vw;
  padding: ${props => props.padding};
`;

const TextLeft = styled.p`
  grid-column-start: 1;
  grid-column-end: 2;
  color: ${props => props.color};
  font-size: ${props => props.sizeLeft};
`;
const TextRight = styled.p`
  grid-column-start: 2;
  grid-column-end: 3;
  ${media.phone`
    grid-column-start: 1;
    grid-column-end: -1;
  `}

  color: inherit;
  font-size: ${props => props.sizeRight};
`;
const TextCenter = styled.p`
  grid-column: span 2;
  justify-items: center;
  text-align: center;
  font-size: ${props => props.sizeCenter};
  color: ${props => props.color};
`;
const TextBlock = ({
  padding,
  sizeLeft,
  colorLeft,
  textLeft,
  sizeRight,
  textRight,
  sizeCenter,
  colorCenter,
  textCenter
}) => (
  <Wrapper padding={padding}>
    <TextLeft sizeLeft={sizeLeft} color={colorLeft}>
      <Fade left duration={2000}>
        {textLeft}
      </Fade>
    </TextLeft>
    <TextRight sizeRight={sizeRight}>
      <Fade right cascade duration={2000}>
        {textRight}
      </Fade>
    </TextRight>
    <TextCenter sizeCenter={sizeCenter} color={colorCenter}>
      <Fade duration={2000} delay={1500}>
        {textCenter}
      </Fade>
    </TextCenter>
  </Wrapper>
);

export default TextBlock;
