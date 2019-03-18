import React, { Component } from 'react'
import CookieFile from '../images/cookies.png'
import CookiesVideoFile from '../images/cookiesvideo.mp4'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CookieWrapper = styled.div`
  position: fixed;
  bottom: 10%;
  right: -100px;
  z-index: 9000;
`

const CookieImage = styled.img`
  height: 200px;
  transition: all .35s linear;
  transform: rotate(25deg);
  &:hover {
    right: 20px;
    margin-right: 50px;
    transition: all .35s linear;
    transform: rotate(0deg);
  }
`

const VideoWrapper = styled.div`
  position: fixed;
  display: grid;
  z-index: 5000;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: ${ props => props.visible };
`

class Cookie extends Component {
  state = {
    isHovering: false
  }

  myRef = React.createRef();

  handleHover = () => {
    this.setState({
      isHovering: true
    }, () => this.myRef.current.play())
  }
  stopHover = () => {
    this.setState({
      isHovering: false
    })
    this.myRef.current.pause()
  }
  render () {
    const { isHovering } = this.state
    return (
      <>
      <CookieWrapper>
        <CookieImage src={CookieFile} onMouseOver={this.handleHover} onMouseOut={this.stopHover} />
      </CookieWrapper>
      {(<VideoWrapper visible={isHovering ? 'block' : 'none'}>
        <video preload width="80%" height="auto" controls ref={this.myRef}>
          <source src={CookiesVideoFile} />
        </video>
      </VideoWrapper>)}
      </>
    )
  }
}

export default Cookie
