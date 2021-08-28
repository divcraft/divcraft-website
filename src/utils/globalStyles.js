import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   * {
     box-sizing: border-box;
   };
   h1, h2 {
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      line-height: 1.5;  
    };
    p, a {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      line-height: 1.5;  
   };
`;

export const theme = {
  colors: {
    gray: {
      light: '#707070',
      dark: '#545454',
    },
    blue: '#356A8C',
    yellow: '#FFDD00',
  },
};
