import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { ShadowContainer, LogoContainer, LogoImg } from './style';

const Logo = () => {
  return (
    <ShadowContainer>
      <LogoContainer>
        <AniLink to="/" paintDrip hex="#2578b8" duration={0.8}>
          <LogoImg src="/logos/logo-main.svg" alt="logo" />
        </AniLink>
      </LogoContainer>
    </ShadowContainer>
  );
};

export default Logo;
