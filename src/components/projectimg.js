import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const ProjectImg = ({ image, small }) => {
  return (
    <ImageZoom
      image={{
        src: image,
        style: {
          width: small ? '50%' : '100%',
          display: small ? 'inline-block' : 'block',
        }
      }}
      defaultStyles={
        {
          overlay: { backgroundColor: 'var(--black)' },
          image: {
            cursor: 'var(--zoomIn)'
          },
          zoomImage: {
            cursor: 'var(--zoomOut)'
          }
        }
      }
    />
  )
}

export default ProjectImg
