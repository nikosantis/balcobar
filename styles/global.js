import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
    touch-action: manipulation;
  }
  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    min-width: 320px;
    background-color: ${props => props.theme.colors.background};
    font-family: 'Roboto', sans-serif;
  }
  p, h1, h2, h3 {
    margin: 0;
  }
`
