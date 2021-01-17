import { createGlobalStyle } from 'styled-components'
import CovidImg from '../assets/images/covid.jpg'

const GlobalStyles = createGlobalStyle`
  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }


  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }

`

export default GlobalStyles
