import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1rem;
  grid-template-rows: auto;
  padding: 10vh 0;
  align-items: baseline;
  font-size: 2rem;
  line-height: 1.53;
  margin: 0 3.5625rem;
`;

const TextLeft = styled.p`
  grid-column-start: 1;
  grid-column-end: 2;
  color: ${props => props.color};
`;
const TextRight = styled.p`
  grid-column-start: 2;
  grid-column-end: 3;
  color: inherit;
`;

export default props => (
  <Wrapper>
    <TextLeft color={props.colorLeft}>{props.textLeft}</TextLeft>
    <TextRight>{props.textRight}</TextRight>
  </Wrapper>
);
