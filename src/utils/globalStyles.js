import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   * {
     box-sizing: border-box;
   };
   section {
     background: white;
   }
   h1, h2, footer * {
     font-family: 'Gibson', sans-serif;
   }
   p, a, h1::before, button, form * {
    font-family: 'Raleway', sans-serif;
   } 
   h1, h2 {
      font-weight: 300;
      line-height: 1.25;  
      margin-top: 0;
      margin-bottom: 12px;
    };
    p { 
      color: #3b3b3b;
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
      lighter: '#fdfdfd', // deprecated in v2
      light: '#ececec',
      dark: '#565656',
      darker: '#3b3b3b',
      darkest: '#202020',
    },
    blue: {
      sky: '#f3faff',
      regular: '#2578b8',
      dark: '#22689e',
    },
    yellow: {
      regular: '#fcc049',
      dark: '#f8b225',
    },
  },
  boxshadow: {
    light: '0 3px 6px #c6c6c6',
    dark: '0 3px 6px #545454',
  },
  gradient: 'linear-gradient(135deg, white, #cce1ff)',
  gradients: {
    dark: 'linear-gradient(135deg, #565656, #202020)',
  },
};
