import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, ContextStore } from 'utils';
import { MenuBar, Footer } from 'templates';
import { CookiesBanner } from 'components';
import { Header, Main, OverflowWrapper } from './style';

const MainLayout = ({ children }) => {
  return (
    <ContextStore>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <OverflowWrapper>
          <Header>
            <MenuBar />
          </Header>
          <Main>{children}</Main>
          <Footer />
        </OverflowWrapper>
        <div>
          <CookiesBanner />
        </div>
      </ThemeProvider>
    </ContextStore>
  );
};

MainLayout.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default MainLayout;
