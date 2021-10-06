import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'utils';
import { MenuBar, Footer } from 'templates';
import { CookiesBanner } from 'components';
import { Header, Main, OverflowWrapper } from './style';

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <OverflowWrapper>
        <CookiesBanner />
        <Header>
          <MenuBar />
        </Header>
        <Main>{children}</Main>
        <Footer />
      </OverflowWrapper>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default MainLayout;
