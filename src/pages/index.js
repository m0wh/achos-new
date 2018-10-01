import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Logo from "../components/logo";
import Intro from "../components/intro";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  color: white;
  font-size: 3rem;
  margin: 35px 100px 0 100px;
`;

const IndexPage = () => (
  <Layout>
    <Header>
      <Logo />
      <Navbar />
    </Header>
    <Intro />
  </Layout>
);

export default IndexPage;
