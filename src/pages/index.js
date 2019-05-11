import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Intro from '../components/intro'
import Work from '../components/work'
import ContactUs from '../components/contactus'
import LuckyDay from '../components/luckyday'
import FancyMarquee from '../components/fancymarquee'
import SecretCode from '../components/secretcode'

export default ({ data: { allMdx: { edges: projectEdges } } }) => (
  <>
    <Intro />
    <FancyMarquee text="Scroll Down  Scroll Down Scroll Down" />
    <Work projectEdges={projectEdges} />
    <FancyMarquee black text="We need a developer 🍺🍺🍺" />
    <ContactUs />
    <LuckyDay />
    <SecretCode />
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
            esGrande
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
