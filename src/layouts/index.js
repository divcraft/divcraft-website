import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'utils';
import { MenuBar, Footer } from 'templates';
import { Header, OverflowWrapper } from './style';

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <OverflowWrapper>
      <Header>
        <MenuBar />
      </Header>
      <main>{children}</main>
      <Footer />
    </OverflowWrapper>
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default MainLayout;
