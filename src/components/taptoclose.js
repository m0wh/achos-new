import styled from 'styled-components'

import React, { Component } from 'react'

const GiantDiv = styled.div`
  position: absolute;
  background: red;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
`

class TapToClose extends Component {
  state = {
    isClicked: false
  }

  render () {
    return (
      <div onClick={() => this.setState({ isClicked: true })}>
        {!this.state.isClicked && (
          <GiantDiv>
            <h1>Tap to close</h1>
          </GiantDiv>
        )
        }
      </div>
    )
  }
}

export default TapToClose
