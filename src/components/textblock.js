import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-gap: 1vw;
  align-items: baseline;
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
  margin: 0 3.5625vw;
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
  color: inherit;
  font-size: ${props => props.sizeRight};
`;
const TextCenter = styled.p`
  grid-column: span 2;
  justify-items: center;
  font-size: ${props => props.sizeCenter};
`;

export default props => (
  <Wrapper>
    <TextLeft sizeLeft={props.sizeLeft} color={props.colorLeft}>
      {props.textLeft}
    </TextLeft>
    <TextRight sizeRight={props.sizeRight}>{props.textRight}</TextRight>
    <TextCenter sizeCenter={props.sizeCenter}>{props.textCenter}</TextCenter>
  </Wrapper>
);
