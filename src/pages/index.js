import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Logo from "../components/logo";
import Intro from "../components/intro";
import Projects from "../components/projects"
import Contact from "../components/contact";
import LuckyDay from "../components/luckyday";

const Header = styled.header`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: white;
  font-size: 3rem;
  margin: 2.625rem 3.1875rem 0 3.5625rem;
`;

const IndexPage = () => (
  <Layout>
    <Header>
      <Logo />
      <Navbar />
    </Header>
    <Intro />
    <Projects />
    <Contact />
    <LuckyDay />
  </Layout>
);

export default IndexPage;
