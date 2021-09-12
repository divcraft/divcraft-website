import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { LogoContainer, LogoImg } from './style';

const Logo = () => {
  return (
    <LogoContainer>
      <AniLink to="/" paintDrip hex="#356A8C" duration={0.8}>
        <LogoImg src="/logos/logo-main.svg" alt="logo" />
      </AniLink>
    </LogoContainer>
  );
};

export default Logo;
