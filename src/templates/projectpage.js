import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import ProjectImg from '../components/projectimg'
import Fade from 'react-reveal/Fade'
import TextBlock, { Wrapper } from '../components/textblock'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from '../components/SEO'
import randomColor from '../utils/randomColor'
import fontSizes from '../utils/fontSizes'
import ScrollToClose from '../components/scrolltoclose'
import TuberiaSound from '../images/mariobros.mp3'

const ProjectWrapper = styled.section`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  display: grid;
  grid-template-columns: 1fr;
`

const CreditsList = styled.ul`
  grid-column: span 2;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: ${ props => props.color };
`

export default ({ data: { mdx } }) => {
  const projectImages = mdx.frontmatter.images
  const imgs = []
  if (projectImages) {
    projectImages.forEach((image, i) => {
      const { fluid } = image.childImageSharp
      imgs.push(fluid)
    })
  }

  return (
    <>
      <SEO
        title={mdx.frontmatter.title}
        description={
          mdx.frontmatter.title || 'nothin’'
        }
        image={mdx.frontmatter.cover.childImageSharp.fluid}
      />

    <audio autoPlay preload="auto">
      <source src={TuberiaSound} type="audio/mpeg"></source>
    </audio>

      <ProjectWrapper>
        <TextBlock
          textCenter={mdx.frontmatter.title}
          padding="4vw 0"
          sizeCenter={fontSizes(5)}
          colorCenter="white"
        />
        <Fade duration={500}>
          <div style={{ maxWidth: '100%' }}>
            <ProjectImg fluid={mdx.frontmatter.cover.childImageSharp.fluid} />
          </div>
        </Fade>
        <MDXRenderer media={mdx.frontmatter.media} images={imgs}>{mdx.code.body}</MDXRenderer>
        <Fade cascade duration={2000}>
          <Wrapper style={{ padding: '4vw 0' }}>
            <CreditsList>
              {mdx.frontmatter.credits.map(credito => (
                <ul style={{ marginBottom: '2.5vw' }}>
                  <li style={{ color: credito.color }} key={credito.title}>
                    {credito.title}
                  </li>
                  <li>{credito.name}</li>
                </ul>
              ))}
            </CreditsList>
          </Wrapper>
        </Fade>
        {/* <ScrollToClose /> */}
      </ProjectWrapper>
    </>
  )
}

export const query = graphql`
  query ProjectPageQuery ($slug: String!) {
    mdx(fields: {slug: { eq: $slug }}) {
      fields {
        slug
      }
      frontmatter {
        title
        slug
        cover {
          childImageSharp {
            fluid(maxWidth: 850, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        media {
          publicURL
        }
        images {
          childImageSharp {
            fluid(maxWidth: 850, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        credits {
          title
          color
          name
        }
      }
      code {
        body
      }
    }
  }
`
