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
   h1, h2, footer * {
     font-family: 'Raleway', sans-serif;
   }
   p, a, h1::before, button, form * {
    font-family: 'Roboto', sans-serif;
   } 
   h1, h2 {
      font-weight: 400;
      line-height: 1.3;  
      margin-top: 0;
      margin-bottom: 12px;
    };
    p, a, button {
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
