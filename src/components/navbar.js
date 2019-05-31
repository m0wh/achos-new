import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller
} from 'react-scroll'
import media from '../utils/breakpoints'
import MobileMenu from './mobilemenu'
import useWindowScroll from '@react-hook/window-scroll'
import { useSpring, animated } from 'react-spring'
import SoundGif from './soundgif'
import Sound from '../images/hadouken.mp3'
import GIF from '../images/gifs/baseball.gif'
import fontSizes from '../utils/fontSizes'
import { navigate } from '@reach/router'

const NavWrapper = styled(animated.nav)`
  justify-self: end;
  z-index: 2;
  position: fixed;
  right: 50px;
  top: 64px;
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  ${ media.tablet`display: none;` };
`
export const ListItem = styled.li`
${ fontSizes(1.875) }
  padding: 0 1.25rem;
  color: ${ props => props.color };
  &:hover {
    animation: ${ props => (props.hoverable ? 'zoom 200ms ease-in' : null) };
  }
  a:hover {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
`

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`

const Navbar = ({ location }) => {
  const [isShowing, setIsShowing] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentScrollY, setCurrentScrollY] = useState(0)
  const navHidingAnimation = useSpring({
    opacity: isShowing ? 1 : 0,
    filter: isShowing ? `blur(0px)` : `blur(10px)`,
    transform: isShowing ? `translate3d(0%, 0, 0)` : `translate3d(80%, 0, 0)`
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentScrollY])

  const handleScroll = () => {
    setCurrentScrollY(window.pageYOffset)
    setIsShowing(!(currentScrollY > lastScrollY))
    setLastScrollY(currentScrollY)
  }

  const scrollToWork = () => {
    if (typeof location !== `undefined` && location.pathname !== '/') {
      navigate('/')
      setTimeout(() => (scroller.scrollTo('work', {
        duration: 800,
        delay: 0,
        smooth: true
      })), 200)
    } else {
      scroller.scrollTo('work', {
        duration: 800,
        delay: 0,
        smooth: true
      })
    }
  }

  const fiveSecLink = (
    <ScrollLink
      onClick={() =>
        scroll.scrollToBottom({
          duration: 5000,
          smooth: true
        })
      }
    >
      <SoundGif sound={Sound} gif={GIF}>
          5 Second Tour
      </SoundGif>
    </ScrollLink>
  )

  const homeLink = (
    <StyledLink to="/">
      <SoundGif sound={Sound} gif={GIF}>
          home
      </SoundGif>
    </StyledLink>
  )
  return (
      <>
      <NavWrapper style={navHidingAnimation}>
        <List>
          <ListItem color="var(--yellow)">
            {typeof location !== `undefined` && location.pathname === '/'
              ? fiveSecLink
              : homeLink}
          </ListItem>

          <ListItem color="var(--cyan)">
            <ScrollLink onClick={() => scrollToWork()}>work</ScrollLink>
          </ListItem>

          <ListItem color="var(--green)">
            <StyledLink to="/about">about</StyledLink>
          </ListItem>
          <ListItem color="var(--pink)">
            <StyledLink to="/contact">contact</StyledLink>
          </ListItem>
          {/* <ListItem color="var(--darkgrey)">eng</ListItem> */}
        </List>
      </NavWrapper>
      <MobileMenu />

    </>
  )
}

export default Navbar
