import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
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
  font-size: ${props => props.sizeCenter};
`;

export default props => (
  <Wrapper padding={props.padding}>
    <TextLeft sizeLeft={props.sizeLeft} color={props.colorLeft}>
      {props.textLeft}
    </TextLeft>
    <TextRight sizeRight={props.sizeRight}>{props.textRight}</TextRight>
    <TextCenter sizeCenter={props.sizeCenter}>{props.textCenter}</TextCenter>
  </Wrapper>
);
