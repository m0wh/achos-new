import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Header from "../components/header";
import Contact from "../components/contact";
import LuckyDay from "../components/luckyday";

const AboutPage = () => (
  <Layout>
    <Header />
    <Contact />
    <LuckyDay />
  </Layout>
);

export default AboutPage;
