import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  
  body {
      font-family: 'Lato', sans-serif;
  }
  
  * {
      box-sizing: border-box;
  }
`

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (max-width: 1199px) {
    max-width: 970px;
  }
  
  @media screen and (max-width: 991px) {
    max-width: 760px;
  }
  
  @media screen and (max-width: 767px) {
    max-width: 560px;
  }
  
  @media screen and (max-width: 575px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;
