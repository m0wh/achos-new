import React from "react";
// import { Link } from "gatsby";
import styled from "styled-components";
import {
  Link,
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

  render() {
    return (
      <NavWrapper>
        <List>
          {/* onClick scrolls through page */}
          <ListItem color="var(--yellow)">
            <StyledLink
              onClick={() =>
                scroll.scrollToBottom({
                  duration: 5000,
                  smooth: true
                })
              }
            >
              5 Second Tour
            </StyledLink>
          </ListItem>
          {/* onClick scrolls down to beginning of projects */}
          <ListItem color="var(--cyan)">
            <StyledLink to="/">work</StyledLink>
          </ListItem>
          {/* StyledLink to About */}
          <ListItem color="var(--green)">
            <StyledLink to="/">about</StyledLink>
          </ListItem>
          {/* StyledLink to Espai */}
          <ListItem color="var(--pink)">
            <StyledLink to="#Contact">contact</StyledLink>
          </ListItem>
          <ListItem color="var(--darkgrey)">eng</ListItem>
        </List>
      </NavWrapper>
    );
  }
}

export default Navbar;
