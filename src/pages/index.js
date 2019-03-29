import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Intro from '../components/intro'
import Work from '../components/work'
import ContactUs from '../components/contactus'
import LuckyDay from '../components/luckyday'
import FancyMarquee from '../components/fancymarquee'

export default ({
  data: {
    allContentfulProyecto: { edges: projectEdges }
  }
}) => (
  <>
    <Intro />
    <FancyMarquee text="Scroll Down!" />
    <Work projectEdges={projectEdges} />
    <FancyMarquee black text="We need a developer that likes 🍺🍺🍺" />
    <ContactUs />
    <LuckyDay />
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulProyecto(sort: { fields: [orden] order: ASC }) {
      edges {
        node {
          id
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
