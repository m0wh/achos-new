import React, { Component } from 'react'
import styled from 'styled-components'
import DidgeridooImage from '../images/didgeridoo.jpg'
import DidgeridooSound from '../images/didgeridoosound.mp3'
import rafSchd from 'raf-schd'

const Wrapper = styled.div`
  background: url("${ DidgeridooImage }") no-repeat center center fixed; 
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
`
// TODO: possible refactor using:
// https://codesandbox.io/s/m76o28w4k9?from-embed

class Resizer extends Component {
  state = {
    isResizing: false
  }

  componentDidMount () {
    window.addEventListener('resize', rafSchd(this.onResize))
  }

  componentWillUnmount () {
    rafSchd(this.onResize).cancel()
    window.removeEventListener('resize', rafSchd(this.onResize))
  }

  onResize = () => {
    this.setState({
      isResizing: true
    })
    setTimeout(() => this.setState({ isResizing: false }), 500)
  }

  render () {
    const windowWidth = window.innerWidth
    return (
      windowWidth > 768 && (
        <div>
          {this.state.isResizing && <Wrapper />}
          {this.state.isResizing && <audio autoPlay src={DidgeridooSound}></audio>}
        </div>
      )
    )
  }
}

export default Resizer
