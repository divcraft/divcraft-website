import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';
import { Wrapper, Paragraph } from 'components';
import {
  ContentContainer,
  SocialsContainer,
  LinkContainer,
  LogoContainer,
  NavMenu,
  NavItem,
  SocialsItem,
} from './style';

const Footer = () => {
  return (
    <footer>
      <SocialsContainer>
        <a
          href="https://facebook.com/divcraftx"
          target="_blank"
          rel="noreferrer"
        >
          <SocialsItem>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </SocialsItem>
        </a>
        <a
          href="https://www.linkedin.com/in/divcraft/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialsItem>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialsItem>
        </a>
        <a
          href="https://pl.pinterest.com/divcraftx/pins/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialsItem>
            <FontAwesomeIcon icon={faPinterestSquare} />
          </SocialsItem>
        </a>
      </SocialsContainer>
      <ContentContainer>
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
          <Paragraph color="yellow">Wszystkie prawa zastrzeżone ©</Paragraph>
        </Wrapper>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
