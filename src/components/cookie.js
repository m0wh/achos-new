import React, { Component, useState, useRef } from 'react'
import CookieFile from '../images/cookies.png'
import CookiesVideoFile from '../images/cookiesvideo2.mp4'
import WhiteXCursor from '../images/icons/white-x.png'
import styled from 'styled-components'
import media from '../utils/breakpoints'
import { useSpring, animated } from 'react-spring'

const CookieWrapper = styled.div`
  position: fixed;
  bottom: 10%;
  right: -100px;
  z-index: 2;
  ${ media.tablet`display: none;` }
  
`

const CookieImage = styled(animated.img)`
  height: 200px;
  cursor: url(${ WhiteXCursor }) 40 40, auto;
  
`

const VideoWrapper = styled(animated.div)`
  position: fixed;
  z-index: 3;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const VideoElement = styled.video`
  margin: auto;
  max-width: 100%;
  height: auto;
  position: relative;
  width: 80%;
`

function Cookie () {
  const [isHovering, setIsHovering] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  let cookieClosedData = sessionStorage.getItem('cookieClosed')
  const cookieAnimation = useSpring({
    marginRight: isHovering ? `50px` : isClosed ? `-150px` : `0px`,
    transform: isHovering ? `rotate(0deg)` : isClosed ? `rotate(150deg)` : `rotate(25deg)`,
    right: isHovering ? `20px` : `0px`
  })
  const videoFade = useSpring({
    display: isHovering ? `grid` : `none`,
    opacity: isHovering ? 1 : 0
  })

  const myRef = useRef(null)
  const playVideo = () => {
    myRef.current.play()
  }
  const stopVideo = () => {
    myRef.current.pause()
  }

  const handleCookieClick = async () => {
    await setIsClosed(true)
    await setIsHovering(false)
    await sessionStorage.setItem('cookieClosed', 'yeah sonn')
  }

  return (
    <>
      {cookieClosedData !== 'yeah sonn' && (
        <>
        <>
        <CookieWrapper>
          <CookieImage style={cookieAnimation} src={CookieFile} onMouseOver={() => { setIsHovering(true); playVideo() }} onClick={() => handleCookieClick()} onMouseOut={() => { setIsHovering(false); stopVideo() }} />
        </CookieWrapper>
        </>
        <>
        <VideoWrapper style={videoFade}>
          <VideoElement controls ref={myRef}>
            <source src={CookiesVideoFile} />
          </VideoElement>
        </VideoWrapper>
        </>
        </>
      )
      }
      </>
  )
}

export default Cookie
