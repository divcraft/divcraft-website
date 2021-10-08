import React, { useState } from 'react';
import { Logo, MenuButton, Navigation } from 'components';
import { MenuContainer } from './style';

const MenuBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    document.body.style.overflow = isClicked ? 'auto' : 'hidden';
    setIsClicked(!isClicked);
  };
  return (
    <MenuContainer>
      <Logo />
      <Navigation isClicked={isClicked} />
      <MenuButton isClicked={isClicked} onClick={handleClick} />
    </MenuContainer>
  );
};

export default MenuBar;
