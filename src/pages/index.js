import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Intro from "../components/intro";
import Work from "../components/work";
import ContactUs from "../components/contactus";
import LuckyDay from "../components/luckyday";

export default ({
  data: {
    allMarkdownRemark: { edges: projectEdges }
  }
}) => (
  <>
    <Intro />
    <Work projectEdges={projectEdges} />
    <ContactUs />
    <LuckyDay />
  </>
);

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
