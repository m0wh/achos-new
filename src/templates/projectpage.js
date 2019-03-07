import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import TextBlock, { Wrapper } from '../components/textblock'
import SEO from '../components/SEO'
import randomColor from '../utils/randomColor'
import fontSizes from '../utils/fontSizes'
import ScrollToClose from '../components/scrolltoclose'

// TODO: play Mario sound on route change/load

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  display: grid;
  grid-template-columns: 1fr;
`

const ProjectImg = styled(Img)`
  width: ${ props => props.small ? '50%' : '' };
  display: ${ props => props.small ? 'inline-block' : '' };
`

const CreditsList = styled.ul`
  grid-column: span 2;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: ${ props => props.color };
`

export default ({ data }) => {
  const { node } = data.allContentfulProyecto.edges[0]
  return (
    <>
      <SEO
        title={node.titulo}
        description={
          node.bloquesDeTexto[0].childContentfulBloqueDeTextoBodyTextNode.childMarkdownRemark.rawMarkdownBody || 'nothin’'
        }
        image={node.imagenPortada.fluid}
      />

      <ProjectWrapper>
        <TextBlock
          textCenter={node.titulo}
          padding="4vw 0"
          sizeCenter={fontSizes(5)}
          colorCenter="white"
        />
        <Fade duration={500}>
          <div style={{ maxWidth: '100%' }}>
            <ProjectImg fluid={node.imagenPortada.fluid} />
          </div>
        </Fade>
        <TextBlock
          colorLeft={randomColor()}
          textLeft={node.bloquesDeTexto[0].titulo}
          textRight={node.bloquesDeTexto[0].childContentfulBloqueDeTextoBodyTextNode.childMarkdownRemark.rawMarkdownBody}
          padding="4vw 0"
        />
        <Fade duration={500}>
          <ProjectImg fluid={node.imagenes[0].imagen.fluid} />
        </Fade>
        <TextBlock
          colorLeft={randomColor()}
          textLeft={node.bloquesDeTexto[1].titulo}
          textRight={node.bloquesDeTexto[1].childContentfulBloqueDeTextoBodyTextNode.childMarkdownRemark.rawMarkdownBody}
          padding="4vw 0"
        />
        <Fade cascade duration={500}>
          <>
          {node.imagenes[1] && (<ProjectImg small={node.imagenes[1].esPequena} fluid={node.imagenes[1].imagen.fluid} />)}
          {node.imagenes[2] && (<ProjectImg small={node.imagenes[2].esPequena} fluid={node.imagenes[2].imagen.fluid} />)}
          </>
        </Fade>
        {node.bloquesDeTexto[2] && (<TextBlock
          colorLeft={randomColor()}
          textLeft={node.bloquesDeTexto[2].titulo}
          textRight={node.bloquesDeTexto[2].childContentfulBloqueDeTextoBodyTextNode.childMarkdownRemark.rawMarkdownBody}
          padding="4vw 0"
        />)}
        <Fade cascade duration={500}>
          <>
          {node.imagenes[3] && (<ProjectImg small={node.imagenes[3].esPequena} fluid={node.imagenes[3].imagen.fluid} />)}
          {node.imagenes[4] && (<ProjectImg small={node.imagenes[4].esPequena} fluid={node.imagenes[4].imagen.fluid} />)}
          </>
        </Fade>
        {node.bloquesDeTexto[3] && (<TextBlock
          colorLeft={randomColor()}
          textLeft={node.bloquesDeTexto[3].titulo}
          textRight={node.bloquesDeTexto[3].childContentfulBloqueDeTextoBodyTextNode.childMarkdownRemark.rawMarkdownBody}
          padding="4vw 0"
        />)}
        <Fade cascade duration={500}>
          <>
          {node.imagenes[5] && (<ProjectImg small={node.imagenes[5].esPequena} fluid={node.imagenes[5].imagen.fluid} />)}
          {node.imagenes[6] && (<ProjectImg small={node.imagenes[6].esPequena} fluid={node.imagenes[6].imagen.fluid} />)}
          </>
        </Fade>

        <Fade cascade duration={2000}>
          <Wrapper style={{ padding: '4vw 0' }}>
            <CreditsList>
              {node.listaDeCreditos.map(credito => (
                <ul style={{ marginBottom: '2.5vw' }}>
                  <li style={{ color: credito.color }} key={credito.titulo}>
                    {credito.titulo}
                  </li>
                  <li>{credito.nombre}</li>
                </ul>
              ))}
            </CreditsList>
          </Wrapper>
        </Fade>
        <ScrollToClose />
      </ProjectWrapper>
    </>
  )
}

export const query = graphql`
  query ProjectPageQuery ($slug: String!) {
    allContentfulProyecto(filter: { slug: { eq: $slug }}) {
      edges {
        node {
          titulo
          imagenPortada {
            fluid(maxWidth: 800, quality: 80) {
               ...GatsbyContentfulFluid_tracedSVG
            }
          }
          bloquesDeTexto {
            titulo
            childContentfulBloqueDeTextoBodyTextNode {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
          imagenes {
            esPequena
            imagen {
              fluid(maxWidth: 800, quality: 80) {
               ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
          listaDeCreditos {
            titulo
            color
            nombre
          }
        }
      }
    }
  }
`
