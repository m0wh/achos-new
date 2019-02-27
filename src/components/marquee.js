import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'

const Container = styled.section`
  display: grid;
  align-items: center;
  margin: auto;
  height: 200px; 
  overflow: hidden;
  position: relative;
  padding: 2.625rem 0;
  color: white;
  background: linear-gradient(246deg, #ff60dd, #60ff66, #f4ff60, #60f0ff);
  background-size: 400% 400%;

  animation: BgColors 30s ease infinite;

  @keyframes BgColors {
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

const ScrollingText = styled.p`
  ${ fontSizes(8) };
  line-height: var(--bigtextlineheight);
  position: absolute;
  width: 100%;
  // height: 100%;
  margin: 0;
  text-align: center;
  /* Starting position */
  transform:translateX(100%);
  /* Apply animation to this element */ 
  animation: scroll-left 10s linear infinite;
  }
  /* Move it (define the animation) */
  @keyframes scroll-left {
  0% { 
  transform: translateX(100%); 
  }
  100% { 
  transform: translateX(-100%); 
  }
`

const Marquee = () => {
  return (
    <Container>
      <ScrollingText>
          Scroll Down!
      </ScrollingText>

    </Container>
  )
}

export default Marquee
