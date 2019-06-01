import React from 'react'
import { graphql } from 'gatsby'
import Intro from '../components/intro'
import Work from '../components/work'
import ContactUs from '../components/contactus'
import LuckyDay from '../components/luckyday'
import ControlledScrollMarquee from '../components/controlledscrollmarquee'
import AutoScroll from '../components/autoscroll'
import { useWindowResize } from '../utils/hooks'

export default ({ data: { allMdx: { edges: projectEdges } } }) => {
  const { width, isResizing } = useWindowResize()
  return (
  <>
    <Intro width={width} />
    <ControlledScrollMarquee text="Scroll Down Scroll Down Scroll Down" />
    <Work projectEdges={projectEdges} />
    <AutoScroll/>
    <ContactUs />
    <LuckyDay />
  </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { fields: [fileAbsolutePath], order: ASC }
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
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  }
`
