import React, { Component } from 'react'
import CookieFile from '../images/cookies.png'
import CookiesVideoFile from '../images/cookiesvideo2.mp4'
import WhiteXCursor from '../images/icons/white-x.png'
import styled, { css } from 'styled-components'
import media from '../utils/breakpoints'

const CookieWrapper = styled.div`
  position: fixed;
  bottom: 10%;
  right: -100px;
  z-index: 2;
  ${ media.tablet`display: none;` }
  
`

const CookieImage = styled.img`
  height: 200px;
  transition: all .35s linear;
  transform: rotate(25deg);
  cursor: url(${ WhiteXCursor }) 40 40, auto;
  &:hover {
    right: 20px;
    margin-right: 50px;
    transition: all .35s linear;
    transform: rotate(0deg);
  }
  ${ props => props.deleted ? css`
    margin-right: -150px;
    transform: rotate(150deg);
    transition: all .35s linear;
  ` : '' }
  
`

const VideoWrapper = styled.div`
  position: fixed;
  z-index: 3;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${ props => props.visible };
`

const VideoElement = styled.video`
  margin: auto;
  max-width: 100%;
  height: auto;
  position: relative;
`

class Cookie extends Component {
  state = {
    isHovering: false,
    isClosed: false
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
    }, () => this.myRef.current.pause())
  }

  handleClick = () => {
    this.setState({
      isClosed: true,
      isHovering: false
    })
  }

  render () {
    const { isHovering, isClosed } = this.state
    return (
      <>
      <CookieWrapper>
        <CookieImage src={CookieFile} onMouseOver={this.handleHover} onMouseOut={this.stopHover} onClick={this.handleClick} deleted={isClosed} />
      </CookieWrapper>
      {(<VideoWrapper visible={isHovering ? 'grid' : 'none'}>
        <VideoElement controls ref={this.myRef}>
          <source src={CookiesVideoFile} />
        </VideoElement>
      </VideoWrapper>)}
      </>
    )
  }
}

export default Cookie
