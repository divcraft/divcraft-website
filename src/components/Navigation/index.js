import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Navigation as StyledNavigation } from './style';

const Navigation = ({ ...props }) => {
  return (
    <StyledNavigation {...props}>
      <ul>
        <li>
          <AniLink
            to="/portfolio"
            activeClassName="active"
            swipe
            direction="down"
            duration={1.2}
          >
            portfolio
          </AniLink>
        </li>
        <li>
          <AniLink
            to="/o-nas"
            activeClassName="active"
            swipe
            direction="down"
            duration={1.2}
          >
            o nas
          </AniLink>
        </li>
        <li>
          <AniLink
            to="/kontakt"
            activeClassName="active"
            swipe
            direction="down"
            duration={1.2}
          >
            kontakt
          </AniLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
