import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Work from "../components/Work";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: projectEdges }
  }
}) => (
  <Layout>
    <Intro />
    <Work projectEdges={projectEdges} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            category
            introduction
            bigimage1 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
