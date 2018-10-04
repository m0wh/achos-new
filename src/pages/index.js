import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Header from "../components/header";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Contact from "../components/contact";
import LuckyDay from "../components/luckyday";

const IndexPage = () => (
  <Layout>
    <Header />
    <Intro />
    <Projects />
    <Contact />
    <LuckyDay />
    <Link to="/project">Link</Link>
  </Layout>
);

export default IndexPage;
