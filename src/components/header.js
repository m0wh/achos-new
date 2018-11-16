import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Navbar from "./navbar";
import Logo from "./logo";

const HeaderWrapper = styled.header`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: end;
  color: white;
  padding: 2.625vw 3.5625vw;
`;

// location.history.pathname

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Navbar />
  </HeaderWrapper>
);

export default Header;
