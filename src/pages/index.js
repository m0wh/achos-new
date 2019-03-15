import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Intro from '../components/intro'
import Work from '../components/work'
import ContactUs from '../components/contactus'
import LuckyDay from '../components/luckyday'
import Marquee from '../components/marquee'

export default ({
  data: {
    allContentfulProyecto: { edges: projectEdges }
  }
}) => (
  <>
    <Intro />
    <Marquee text="Scroll Down!" />
    <Work projectEdges={projectEdges} />
    <ContactUs />
    <LuckyDay />
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulProyecto(sort: { fields: [orden] order: DESC }) {
      edges {
        node {
          titulo
          orden
          slug
          esGrande
          categoria
          imagenPortada {
              fluid(maxWidth: 800, quality: 80) {
               ...GatsbyContentfulFluid_tracedSVG
              }
          }
        }
      }
    }
  }
`
