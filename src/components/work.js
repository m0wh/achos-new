import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

import media from '../utils/breakpoints'
import GridImage from './gridimage'
import randomColor from '../utils/randomColor'
import randomMoan from '../utils/randomMoan'

import TickSound from '../images/tick3.mp3'

const WorkGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${ media.phone`grid-template-columns: 1fr;` }
`

export default ({ projectEdges, width }) => {
  // Element is just a wrapper for react-scroll
  return (
    <Element name="work">
      <WorkGrid>
        {projectEdges.map(({ node }) => (
          <GridImage
            color={randomColor()}
            key={node.frontmatter.title}
            big={node.frontmatter.esGrande}
            cover={node.frontmatter.cover.extension === 'gif' ? node.frontmatter.cover.publicURL : node.frontmatter.cover.childImageSharp.fluid}
            name={node.frontmatter.title}
            category={node.frontmatter.category}
            link={node.fields.slug}
            sound={node.frontmatter.esGrande ? randomMoan() : TickSound}
            width={width}
          />
        )
        )}
      </WorkGrid>
    </Element>
  )
}
