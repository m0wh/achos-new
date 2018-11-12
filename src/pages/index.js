import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { AniLink } from "gatsby-plugin-transition-link";

import Layout from "../components/layout";
import Intro from "../components/intro";
import Work from "../components/work";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: projectEdges }
  }
}) => (
  <Layout>
    <AniLink cover direction="right" to="/about" bg="var(--black)">
      Go to Page 4
    </AniLink>
    <Intro />
    <Work projectEdges={projectEdges} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            category
            bigimage1 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
