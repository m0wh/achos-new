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
  ${ media.phone`grid-template-columns: 1fr` };
`

export default ({ projectEdges }) => {
  // Element is just a wrapper for react-scroll
  return (
    <Element name="work">
      <WorkGrid>
        {projectEdges.map(project =>
          (
            <GridImage
              color={randomColor()}
              key={project.node.id}
              big={project.node.esGrande}
              fluid={project.node.imagenPortada.fluid}
              name={project.node.titulo}
              category={project.node.categoria}
              link={project.node.slug}
              sound={project.node.esGrande ? randomMoan() : TickSound}
            />

          )
        )}
      </WorkGrid>
    </Element>
  )
}
