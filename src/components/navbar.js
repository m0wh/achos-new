import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller
} from 'react-scroll'
import media from '../utils/breakpoints'
import MobileMenu from './mobilemenu'
import posed from 'react-pose'
import SoundGif from './soundgif'
import Sound from '../images/hadouken.mp3'
import GIF from '../images/gifs/baseball.gif'
import fontSizes from '../utils/fontSizes'
import { navigate } from '@reach/router'

const navWrapperProps = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    x: '80%'

  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    x: '0%',
    delay: 400
  }
}

const NavWrapper = styled(posed.nav(navWrapperProps))`
  justify-self: end;
  z-index: 2;
  position: fixed;
  right: 100px;
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

class Navbar extends React.Component {
  state = {
    lastScrollY: 0,
    isShowing: true
  };

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { lastScrollY } = this.state
    const currentScrollY = window.pageYOffset

    if (currentScrollY > lastScrollY) {
      this.setState({ isShowing: false })
    } else {
      this.setState({ isShowing: true })
    }
    this.setState({ lastScrollY: currentScrollY })
  };

  scrollToWork () {
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

  render () {
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

    const { isShowing } = this.state

    return (
      <>
      <NavWrapper pose={isShowing ? 'visible' : 'hidden'}>
        <List>
          <ListItem color="var(--yellow)">
            {typeof location !== `undefined` && location.pathname === '/'
              ? fiveSecLink
              : homeLink}
          </ListItem>

          <ListItem color="var(--cyan)">
            <ScrollLink onClick={() => this.scrollToWork()}>work</ScrollLink>
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
}

export default Navbar
