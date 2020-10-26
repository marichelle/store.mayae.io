import React from 'react'

import { FooterWrapper } from './styles'

const Footer = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </FooterWrapper>
  )
}

export default Footer
