import { Link } from 'gatsby';
import React, { useState } from 'react';
import { MenuContainer, Logo, MenuButton, Navigation } from './style';

const Menu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <MenuContainer>
      <Logo>logo</Logo>
      <Navigation isClicked={isClicked}>
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
      </Navigation>
      <MenuButton isClicked={isClicked} onClick={handleClick}>
        <span />
      </MenuButton>
    </MenuContainer>
  );
};

export default Menu;
