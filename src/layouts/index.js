import { Menu } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'utils';

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <header>
      <Menu />
    </header>
    <main>{children}</main>
    <footer>footer</footer>
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default MainLayout;
