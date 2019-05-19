import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'
import ScrollPercentage from 'react-scroll-percentage'
import { useSpring, animated, interpolate } from 'react-spring'
import media from '../utils/breakpoints'

// ${ media.tablet`display: none;` };

const ScrollingText = styled(animated.p)`
  ${ fontSizes(9) };
`

const Wrapper = styled.section`
  margin: auto;
  overflow: hidden;
  padding: 2.625rem 0;
  color: white;
  white-space: nowrap;
  background: ${ props => props.black ? 'var(--black)' : 'linear-gradient(246deg, #ff60dd, #60ff66, #f4ff60, #60f0ff)' };
  background-size: 400% 400%;

  animation: ${ props => props.black ? '' : 'BgColors 30s ease infinite' };

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
`

const ControlledScrollMarquee = ({ text, black }) => {
  const [percent, setPercent] = useState(0)
  const { x } = useSpring({ x: percent })
  return (
    <Wrapper black={black}>
      <ScrollPercentage
        onChange={percentage => setPercent(percentage)}
      >
        <ScrollingText style={{ transform: x.interpolate(x => `translate3d(${ -x * 100 }%, 0, 0)`) }}>
          {text}
        </ScrollingText>
      </ScrollPercentage>

    </Wrapper>
  )
}

export default ControlledScrollMarquee
