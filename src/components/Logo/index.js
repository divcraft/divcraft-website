import { Link } from 'gatsby';
import React from 'react';
import { LogoContainer, LogoImg } from './style';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImg src="/logos/logo-main.svg" alt="logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
