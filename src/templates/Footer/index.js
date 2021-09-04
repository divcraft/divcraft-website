import React from 'react';
import { Link } from 'gatsby';
import { Wrapper } from 'components';
import {
  FooterContainer,
  LinkContainer,
  LogoContainer,
  NavMenu,
  NavItem,
} from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <LinkContainer>
          <LogoContainer>
            <Link to="/">www.divcraft.pl</Link>
          </LogoContainer>
          <NavMenu>
            <NavItem>
              <Link to="/portfolio">portfolio</Link>
            </NavItem>
            <NavItem>
              <Link to="/o-nas">o nas</Link>
            </NavItem>
            <NavItem>
              <Link to="/kontakt">kontakt</Link>
            </NavItem>
          </NavMenu>
        </LinkContainer>
        <p>Wszystkie prawa zastrzeżone ©</p>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
