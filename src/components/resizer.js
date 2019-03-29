import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import DidgeridooImage from '../images/didgeridoo.jpg'
import DidgeridooSound from '../images/didgeridoosound.mp3'

const Wrapper = styled.div`
  background: url("${ DidgeridooImage }") no-repeat center center fixed; 
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
`
// https://codesandbox.io/s/m76o28w4k9?from-embed

class Resizer extends Component {
  state = {
    isResizing: false
  }

  componentDidMount () {
    window.addEventListener('resize', _.debounce(this.onResize, 20))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', _.debounce(this.onResize, 20))
  }

  onResize = () => {
    this.setState({
      isResizing: true
    })
    setTimeout(() => this.setState({ isResizing: false }), 500)
  }

  render () {
    return (
      <div>
        {this.state.isResizing && <Wrapper />}
        {this.state.isResizing && <audio autoPlay src={DidgeridooSound}></audio>}
      </div>
    )
  }
}

export default Resizer
