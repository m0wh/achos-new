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

const NavWrapper = styled.nav`
  z-index: 1000;
  position: fixed;
  left: 44%;
  top: 76px;
  justify-self: end;
  padding: 1rem 0;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;
const ListItem = styled.li`
  font-size: 2rem;
  padding: 0 1.25rem;
  color: ${props => props.color};
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

// onMouseOver
// GIF background full
// Play sound
// omMouseOut
// Stop Sound
// Remove GIF

// state = {
//     isGifOn: true/false,
//     isSoundPlaying: true/false,
//     onMouseOver change states?
// }

class Navbar extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollTo() {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: true
    });
  }

  render() {
    const { homeorfive } = this.props;
    return (
      <NavWrapper>
        <List>
          {/* If location IS NOT root, show Link to Home instead of 5 Sec Tour */}
          <ListItem color="var(--yellow)">
            <ScrollLink
              onClick={() =>
                scroll.scrollToBottom({
                  duration: 5000,
                  smooth: true
                })
              }
            >
              {homeorfive}
            </ScrollLink>
          </ListItem>
          {/* onClick scrolls down to beginning of projects */}
          <ListItem color="var(--cyan)">
            <StyledLink to="/project">work</StyledLink>
          </ListItem>
          {/* StyledLink to About */}
          <ListItem color="var(--green)">
            <StyledLink to="/about">about</StyledLink>
          </ListItem>
          <ListItem color="var(--pink)">
            <ScrollLink onClick={() => this.scrollTo()}>contact</ScrollLink>
          </ListItem>
          <ListItem color="var(--darkgrey)">eng</ListItem>
        </List>
      </NavWrapper>
    );
  }
}

export default Navbar;
