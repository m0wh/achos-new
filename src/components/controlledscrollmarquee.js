import React from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'
import ScrollPercentage from 'react-scroll-percentage'

const ScrollingText = styled.p`
  ${ fontSizes(9) };
  transition: transform 0.1s linear;
`

// Width has to be more than 100vw, otherwise long text justifies itself because it does not fit the viewport.

const Wrapper = styled.section`
  width: 300vw;
  margin: auto;
  overflow: hidden;
  padding: 2.625rem 0;
  color: white;
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

class ControlledScrollMarquee extends React.Component {
  state = {
    percentage: null,
  };

  render () {
    const { text, black } = this.props
    return (
      <Wrapper black={black}>
        <ScrollPercentage
          onChange={percentage => this.setState({ percentage })}
        >
          <ScrollingText style={{ transform: `translateX(${ -this.state.percentage * window.innerWidth }px) translateZ(1px)` }}>{text}</ScrollingText>
        </ScrollPercentage>
      </Wrapper>
    )
  }
};

export default ControlledScrollMarquee

// https://reactjs.org/docs/faq-functions.html#requestanimationframe-throttling

// TODO: useOnScreen to optimize (https://usehooks.com/useOnScreen/)
