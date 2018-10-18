import React from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import styled from "styled-components";
import media from "../utils/breakpoints";

const StyledBurgerMenu = styled.div`
  display: none;
  ${media.tablet`display: inherit;`};
  ${media.phone`display: inherit;`};
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
`;

export default class Menu extends React.Component {
  render() {
    return (
      <StyledBurgerMenu>
        <BurgerMenu noOverlay right width="100%">
          {this.props.children}
        </BurgerMenu>
      </StyledBurgerMenu>
    );
  }
}
