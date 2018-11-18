import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fontSizes from "../utils/fontSizes";

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
  ${fontSizes(3)};
  line-height: var(--bigtextlineheight);
`;

const LuckyDay = () => (
  <LuckyWrapper>
    <LuckyText>Today Is Your Lucky Day!</LuckyText>
  </LuckyWrapper>
);

export default LuckyDay;
