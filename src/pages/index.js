import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Intro from "../components/intro";
import Work from "../components/work";

const IndexPage = () => (
  <Layout>
    <Intro />
    <Work />
  </Layout>
);

export default IndexPage;
