import React from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import styled from "styled-components";
import media from "../utils/breakpoints";

const StyledBurgerMenu = styled.div`
  display: none;
  ${media.tablet`display: inherit;`};
  ${media.phone`display: inherit;`};
  position: fixed;
  width: 5rem;
  height: 3rem;
  padding-top: 30px;
  padding-right: 40px;
  padding-bottom: 70px;
  padding-left: 70px;
  z-index: 100;
  cursor: pointer;
  right: 0;
  top: 0;

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 5em;
    height: 3em;
    right: 0;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 5em;
    width: 6em;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
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
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    display: grid;
    justify-items: center;
    align-items: center;
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
    padding: 15px 15px;
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
    opacity: 0.7;
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
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
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: white;
    border-radius: 4px;
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
    top: 10px;
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
    transform: translate3d(0, -20px, 0) rotate(-90deg);
  }
`;



export default class Menu extends React.Component {
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
          {this.props.children}
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