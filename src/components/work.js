import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

import media from '../utils/breakpoints'
import GridImage from './gridimage'
import randomColor from '../utils/randomColor'

import MoanSound1 from '../images/moan/moan1.mp3'
import MoanSound2 from '../images/moan/moan2.mp3'
import MoanSound3 from '../images/moan/moan3.mp3'
import MoanSound4 from '../images/moan/moan4.mp3'

import TickSound from '../images/tick3.mp3'

const randomMoan = () => {
  const moanSounds = [MoanSound1, MoanSound2, MoanSound3, MoanSound4]
  function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  const chosen = getRandomInt(moanSounds.length)
  return moanSounds[chosen]
}

const WorkGrid = styled.main`
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
