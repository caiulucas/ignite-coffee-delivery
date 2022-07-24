import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme.background};
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
  }

  p, span {
    line-height: 130%;
  }
`
