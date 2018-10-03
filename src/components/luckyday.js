import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LuckyWrapper = styled.div`
  margin: auto;
  padding: 2.625rem 0;
  text-align: center;
  color: white;
  background-image: linear-gradient(
    to right,
    #fe71b0,
    #00ffff 35%,
    #3eec6a 63%,
    #fff36d
  );
`;

const LuckyText = styled.p`
  font-size: 3rem;
  line-height: 1.4;
`;

const LuckyDay = () => (
  <LuckyWrapper>
    <LuckyText>Today Is Your Lucky Day!</LuckyText>
  </LuckyWrapper>
);

export default LuckyDay;
