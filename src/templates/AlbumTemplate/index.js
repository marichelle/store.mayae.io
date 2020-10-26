import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@components'
import { AlbumWrapper } from './styles'

const AlbumTemplate = ({ data }) => {
  console.log(data)
  const {
    artist,
    title,
    description: { description },
    image,
    price,
    mediaCondition,
    sleeveCondition,
  } = data.contentfulAlbum

  return (
    <Layout>
      <AlbumWrapper>
        <h1>
          {artist} - {title}
        </h1>
        <img src={image.fluid.src} alt={title} />
        <p>{description}</p>
        <p>
          Media Condition: {mediaCondition.name}
          <br />
          Sleeve Condition: {sleeveCondition.name}
          <br />
        </p>
        {`$${parseFloat(price).toFixed(2)}`}
      </AlbumWrapper>
    </Layout>
  )
}

export const PageQuery = graphql`
  query($id: String!) {
    contentfulAlbum(id: { eq: $id }) {
      artist
      title
      description {
        description
      }
      image {
        fluid {
          src
        }
      }
      price
      mediaCondition {
        code
        name
      }
      sleeveCondition {
        code
        name
      }
    }
  }
`

export default AlbumTemplate
