import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   * {
     box-sizing: border-box;
   };
   section {
     padding: 50px 0;
   }
   h1, h2 {
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      line-height: 1.5;  
      margin-top: 0;
      margin-bottom: 12px;
    };
    p, a {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      line-height: 1.5;  
   };
    p { 
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 12px;
   };
`;

export const theme = {
  colors: {
    gray: {
      light: '#ECECEC',
      dark: '#545454',
    },
    blue: '#356A8C',
    yellow: '#FFDD00',
  },
};
