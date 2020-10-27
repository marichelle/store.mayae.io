import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '@components'
import {
  AlbumCover,
  AlbumDetails,
  AlbumWrapper,
  PriceButtonWrapper,
} from './styles'

const AlbumTemplate = ({ data }) => {
  console.log(data)
  const {
    artist,
    title,
    description: { description },
    image,
    price,
  } = data.contentfulAlbum

  return (
    <Layout>
      <AlbumWrapper>
        <AlbumCover>
          <Img fluid={image.fluid} alt={title} />
        </AlbumCover>
        <AlbumDetails>
          <h1>{title}</h1>
          <h2>{artist}</h2>
          <p>{description}</p>
          <PriceButtonWrapper>
            <span>{`$${parseFloat(price)}`}</span>
            <button>Buy Now</button>
          </PriceButtonWrapper>
        </AlbumDetails>
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
          ...GatsbyContentfulFluid
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
