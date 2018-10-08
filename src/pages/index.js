import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Header from "../components/header";
import Intro from "../components/intro";
import Work from "../components/work";
import Contact from "../components/contact";
import LuckyDay from "../components/luckyday";

const IndexPage = () => (
  <Layout>
    <Header />
    <Intro />
    <Work />
    <Contact />
    <LuckyDay />
  </Layout>
);

export default IndexPage;
