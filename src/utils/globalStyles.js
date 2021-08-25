import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   body {
      font-family: 'Poppins', sans-serif;
   };
   * {
      box-sizing: border-box;
      line-height: 1.5;  
   }
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
