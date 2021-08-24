import React from 'react';
import { Link } from 'gatsby';
import { Navigation as StyledNavigation } from './style';

const Navigation = ({ ...props }) => {
  return (
    <StyledNavigation {...props}>
      <ul>
        <li>
          <Link to="/portfolio" activeClassName="active">
            portfolio
          </Link>
        </li>
        <li>
          <Link to="/o-nas" activeClassName="active">
            o nas
          </Link>
        </li>
        <li>
          <Link to="/kontakt" activeClassName="active">
            kontakt
          </Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
