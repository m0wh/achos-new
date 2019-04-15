import React from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'
import ScrollPercentage from 'react-scroll-percentage'
import { navigate } from 'gatsby'

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 60vh;
  padding-bottom: 400px;
  color: white;
  ${ fontSizes(1.875) }
`

class ScrollToClose extends React.Component {
  state = {
    percentage: 0,
    inView: false
  };

  takeMeBack = (function () {
    let executed = false
    return function () {
      if (!executed) {
        executed = true
        window.history.back()
      }
    }
  })();

  render () {
    return (
      <Wrapper>
        <ScrollPercentage
          onChange={(percentage, inView) => this.setState({ percentage, inView })}
        >
          <p style={{ opacity: `${ this.state.percentage.toFixed(2) }` }}>Scroll to close</p>
          {this.state.percentage === 1 ? this.takeMeBack() : null}
        </ScrollPercentage>
      </Wrapper>
    )
  }
}

export default ScrollToClose
