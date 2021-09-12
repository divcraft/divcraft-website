import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
            <AniLink to="/" fade>
              www.divcraft.pl
            </AniLink>
          </LogoContainer>
          <NavMenu>
            <NavItem>
              <AniLink to="/portfolio" fade>
                portfolio
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/o-nas" fade>
                o nas
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/kontakt" fade>
                kontakt
              </AniLink>
            </NavItem>
          </NavMenu>
        </LinkContainer>
        <p>Wszystkie prawa zastrzeżone ©</p>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
