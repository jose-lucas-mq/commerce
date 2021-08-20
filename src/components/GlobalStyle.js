import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const Styles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  html, body {
    scroll-behavior: smooth;
    background-color: #FBFBFB;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  button, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    border: none;
    background: none;
  }
  a {
    text-decoration: none;
    color: #FFFFFF;
  }
  img {
    display: block;
    max-width: 100%;
  }
`
const GlobalStyle = () => (
  <Styles />
)
export { GlobalStyle }