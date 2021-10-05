import React, { useState } from 'react';
import { Logo, MenuButton, Navigation } from 'components';
import { MenuContainer } from './style';

const MenuBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <MenuContainer>
      <Logo />
      <Navigation isClicked={isClicked} onClick={handleClick} />
      <MenuButton isClicked={isClicked} onClick={handleClick} />
    </MenuContainer>
  );
};

export default MenuBar;
