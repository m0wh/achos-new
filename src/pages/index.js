import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Intro from '../components/intro'
import Work from '../components/work'
import ContactUs from '../components/contactus'
import LuckyDay from '../components/luckyday'
import ControlledScrollMarquee from '../components/controlledscrollmarquee'
import SecretCode from '../components/secretcode'

export default ({
  data: {
    allContentfulProyecto: { edges: projectEdges }
  }
}) => (
  <>
    <Intro />
    <ControlledScrollMarquee text="Scroll Down  Scroll Down Scroll Down" />
    <Work projectEdges={projectEdges} />
    <ControlledScrollMarquee black text="We need a developer 🍺🍺🍺" />
    <ContactUs />
    <LuckyDay />
    <SecretCode />
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
