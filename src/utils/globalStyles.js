import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   * {
     box-sizing: border-box;
   };
   main { 
    /* background-color: #f8f8f8;  */
    @media (min-width: 769px) {
    padding-top: 30px;
  } 
   }
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
    p, a {
      font-weight: 300;
    };
    p { 
      font-size: 20px;
      line-height: 1.5;  
      margin-top: 0;
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }
   };
`;

export const theme = {
  colors: {
    gray: {
      light: '#ECECEC',
      dark: '#545454',
      darker: '#3b3b3b',
    },
    blue: {
      regular: '#356A8C',
      dark: '#395f78',
    },
    yellow: {
      regular: '#FFDD00',
      dark: '#f2d201',
    },
  },
  boxshadow: {
    light: '0 3px 6px #c6c6c6',
    dark: '0 3px 6px #545454',
  },
};
