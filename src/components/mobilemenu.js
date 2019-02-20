import React from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import { List, ListItem, StyledLink } from "./navbar";
import styled from "styled-components";
import media from "../utils/breakpoints";

const StyledBurgerMenu = styled.div`
  display: none;
  ${media.tablet`display: inherit;`};
  ${media.phone`display: inherit;`};
  position: fixed;
  z-index: 100;
  cursor: pointer;
  right: 12rem;
  top: 0;

  // ZOOM Animation
  @keyframes zoom {
    0%, 100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
              transform: scale(1.1);
    }
  }

  /* General sidebar styles */
  .bm-menu {
    top: 0;
    background: linear-gradient(
      to right,
      rgba(255, 113, 177, 1) 0%,
      rgba(0, 255, 255, 1) 33%,
      rgba(66, 250, 121, 1) 66%,
      rgba(255, 243, 109, 1) 100%
    );
    transition: all 400ms ease-in;
    // padding: 2.5em 1.5em 0;
    // font-size: 1.15em;
  }

  .bm-menu-wrap {
    top: 0;
    cursor: var(--pointerwhite);
  }


  /* Wrapper for item list */
  .bm-item-list {
    display: grid;
    justify-items: center;
    align-items: center;
    opacity: 1;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  // Styles of button

  .hamburger {
    padding-top: 30px;
    padding-right: 100px;
    padding-bottom: 70px;
    padding-left: 70px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    position: fixed;
    z-index: 10001;
  }
  .hamburger:hover {
    animation: zoom 300ms ease-in;
  }
  .hamburger.is-active:hover {
    animation: zoom 300ms ease-in;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: white;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    // height: 10px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 5rem;
    height: 10px;
    margin: 10px 0;
    background-color: white;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--slider .hamburger-inner {
    top: 2px;
  }
  .hamburger--slider .hamburger-inner::before {
    top: 5px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  .hamburger--slider .hamburger-inner::after {
    top: 20px;
  }

  .hamburger--slider.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--slider.is-active .hamburger-inner::before {
    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
    opacity: 0;
  }
  .hamburger--slider.is-active .hamburger-inner::after {
    transform: translate3d(0, -30px, 0) rotate(-90deg);
  }
`;



class MobileMenu extends React.Component {
  state = {
    menuOpen: false,
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})

  }
  render() {
    return (
      <StyledBurgerMenu>
        <BurgerMenu isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)} customBurgerIcon={false} customCrossIcon={false} noOverlay right width="100%">
          <List style={{ textAlign: "center", lineHeight: "1.3" }} onClick={()=> this.toggleMenu()}>
            <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/">home</StyledLink>
            </ListItem>
            {/* onClick scrolls down to beginning of projects */}
            {/* <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/">work</StyledLink>
            </ListItem> */}
            <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/about">about</StyledLink>
            </ListItem>
            <ListItem style={{ fontSize: "4rem" }} hoverable>
              <StyledLink to="/contact">contact</StyledLink>
            </ListItem>
          </List>
        </BurgerMenu>
        <button onClick={() => this.toggleMenu()} className={this.state.menuOpen ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider"} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </StyledBurgerMenu>
    );
  }
}

export default MobileMenu;