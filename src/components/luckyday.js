import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'

const LuckyWrapper = styled.div`
  a {
    cursor: inherit;
    text-decoration: none;
  }
  margin: auto;
  padding: 2.625rem 0;
  text-align: center;
  color: white;
  // background-image: linear-gradient(
  //   to right,
  //   #fe71b0,
  //   #00ffff 35%,
  //   #3eec6a 63%,
  //   #fff36d
  // );
  background: linear-gradient(246deg, #ff60dd, #60ff66, #f4ff60, #60f0ff);
  background-size: 400% 400%;

  animation: AnimationName 30s ease infinite;

  @keyframes AnimationName {
    0% {
      background-position: 0% 72%;
    }
    50% {
      background-position: 100% 29%;
    }
    100% {
      background-position: 0% 72%;
    }
  }
  &:hover {
    background-size: 100% 100%;
    cursor: var(--mail);
  }
`

const LuckyText = styled.p`
  ${ fontSizes(3) };
  line-height: var(--bigtextlineheight);
`

const LuckyDay = () => (
  <LuckyWrapper>
    <a
      href="mailto:hi@achos.es?Subject=Shut up and take my money!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LuckyText>Today Is Your Lucky Day!</LuckyText>
    </a>
  </LuckyWrapper>
)

export default LuckyDay
