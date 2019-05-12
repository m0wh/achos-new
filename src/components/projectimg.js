import styled from 'styled-components'
import Img from 'gatsby-image'
import media from '../utils/breakpoints'

const ProjectImg = styled(Img)`
width: ${ props => props.small ? '50%' : '' };
display: ${ props => props.small ? 'inline-block' : '' };
${ media.phone`width: 100%;
  display: block;
` }

`
export default ProjectImg
