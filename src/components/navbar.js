import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import media from "../utils/breakpoints";
import MobileMenu from "./mobilemenu";

import SoundGif from "./soundgif";

import Sound from "../images/hadouken.mp3";
import GIF from "../images/gifs/baseball.gif";

const NavWrapper = styled.nav`
  justify-self: end;
  padding: 1rem 0;
  z-index: 9000;
  position: fixed;
  right: 100px;
  top: 74px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  ${media.tablet`display: none;`};
`;
const ListItem = styled.li`
  font-size: 1.875rem;
  padding: 0 1.25rem;
  color: ${props => props.color};
  &:hover {
    animation: ${props => (props.hoverable ? "zoom 200ms ease-in" : null)};
  }
  a:hover {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`;

class Navbar extends React.Component {
  // componentDidMount() {
  //   Events.scrollEvent.register("begin", function() {
  //     console.log("begin", arguments);
  //   });

  //   Events.scrollEvent.register("end", function() {
  //     console.log("end", arguments);
  //   });
  // }

  // componentWillUnmount() {
  //   Events.scrollEvent.remove("begin");
  //   Events.scrollEvent.remove("end");
  // }
  state = {
    slide: 0,  // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
  };

  componentDidMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-500px'});
    } else {
      this.setState({ slide: '0px'});
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  scrollToWork() {
    scroller.scrollTo("work", {
      duration: 800,
      delay: 0,
      smooth: true
    });
  }

  render() {
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
    );

    const homeLink = (
      <StyledLink to="/">
        <SoundGif sound={Sound} gif={GIF}>
          home
        </SoundGif>
      </StyledLink>
    );

    return (
      <NavWrapper style={{
        transform: `translate(0, ${this.state.slide})`,
        transition: 'transform 1s ease',
        
      }}>
        <List>
          <ListItem color="var(--yellow)">
            {typeof location !== `undefined` && location.pathname === "/"
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
        <MobileMenu>
          <List style={{ textAlign: "center", lineHeight: "1.3" }}>
            <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/">home</StyledLink>
            </ListItem>
            {/* onClick scrolls down to beginning of projects */}
            <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/">work</StyledLink>
            </ListItem>
            <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/about">about</StyledLink>
            </ListItem>
            <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/contact">contact</StyledLink>
            </ListItem>
            {/* <ListItem style={{ fontSize: "4rem" }} hoverable>
              eng
            </ListItem> */}
          </List>
        </MobileMenu>
      </NavWrapper>
    );
  }
}

export default Navbar;
