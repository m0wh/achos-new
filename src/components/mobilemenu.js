import React from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import styled from "styled-components";
import media from "../utils/breakpoints";

const BurgerWrapper = styled.div`
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
`;

const BurgerLines = styled.div`
  background-color: #fff;
  width: 100%;
  height: 10px;
  margin: 10px 0;
  transition: all 450ms ease-in;
`;

const FullMenu = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  opacity: 0.5;
  transition: all 400ms ease-in;
  width: 100%;
  height: 100%;
  background: rgba(255, 113, 177, 1);
  background: linear-gradient(
    to right,
    rgba(255, 113, 177, 1) 0%,
    rgba(0, 255, 255, 1) 33%,
    rgba(66, 250, 121, 1) 66%,
    rgba(255, 243, 109, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff71b1', endColorstr='#fff36d', GradientType=1 );
`;

const ListItem = styled.li`
  opacity: 0;
  transform: translateY(2%);
  transition: all 300ms ease-in;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    left: 0;
    bottom: 0;
    background-color: #fff;
    transition: width 200ms ease-in;
  }
  &:hover:after {
    width: 100%;
  }    
`;

export default class Menu extends React.Component {
  state = {
    isMenuOpen: false,
  }

  handleOpen = () => {
    this.setState(prevState =>({
      isMenuOpen: !prevState.isMenuOpen,
    }))
  }

  

  
  render() {
    console.log(this.state);
    return (
      <div>
      <BurgerWrapper onClick={this.handleOpen}>
        <BurgerLines />
        <BurgerLines />
        <BurgerLines />
      </BurgerWrapper>
      {this.state.isMenuOpen && <FullMenu />}
      </div>
      


    );
  }
}
