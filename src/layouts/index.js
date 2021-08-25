import { MenuBar } from 'templates';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'utils';
import { Header } from './style';

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header>
      <MenuBar />
    </Header>
    <main>{children}</main>
    {/* <footer>footer</footer> */}
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default MainLayout;
