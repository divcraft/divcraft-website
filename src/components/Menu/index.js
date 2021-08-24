import React, { useState } from 'react';
import { MenuContainer, Logo, MenuButton } from './style';

const Menu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <MenuContainer>
      <Logo>logo</Logo>
      <MenuButton isClicked={isClicked} onClick={handleClick}>
        <span />
      </MenuButton>
    </MenuContainer>
  );
};

export default Menu;
