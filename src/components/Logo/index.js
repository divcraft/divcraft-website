import { Link } from 'gatsby';
import React from 'react';
import { LogoContainer, LogoImg } from './style';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImg src="/logo.svg" alt="logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
