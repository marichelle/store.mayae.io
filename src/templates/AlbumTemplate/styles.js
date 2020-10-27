import styled from 'styled-components'

export const AlbumCover = styled.div`
  img {
    border-radius: 6px 0 0 6px;
  }
`

export const AlbumDetails = styled.div`
  border-radius: 0 6px 6px 0;
  padding-left: 38px;

  h1 {
    color: #474747;
    font-family: 'Bentham', serif;
    font-size: 1.8rem;
    margin: 0;
    padding-top: 1rem;
  }

  h2 {
    color: #d2d2d2;
    font-family: 'Raleway', sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.2em;
    margin-bottom: 0 0 30px;
    text-transform: uppercase;
  }

  p {
    color: #8d8d8d;
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-weight: 400;
    height: 120px;
    line-height: 1.7em;
    overflow: hidden;
  }
`

export const AlbumWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 350px;
  border-radius: 6px;
  box-shadow: 0px 12px 32px 0px rgba(0, 0, 0, 0.15);
  margin: 50px auto;
  width: 680px;
`

export const PriceButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 38% 62%;

  position: relative;
  margin-top: 17px;

  span {
    display: inline-block;
    font-size: 34px;
    height: 50px;
  }

  button {
    background-color: #9cebd5;
    border: transparent;
    border-radius: 60px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    margin: 0 40px 0 16px;
    width: 176px;
    height: 50px;

    &:hover {
      background-color: #79b0a1;
    }
  }
`
