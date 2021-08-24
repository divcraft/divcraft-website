import React, { useState } from 'react';
import { Logo, MenuButton, Navigation, Wrapper } from 'components';
import { MenuContainer, FlexContainer } from './style';

const MenuBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <MenuContainer>
      <Wrapper>
        <FlexContainer>
          <Logo />
          <Navigation isClicked={isClicked} />
          <MenuButton isClicked={isClicked} onClick={handleClick} />
        </FlexContainer>
      </Wrapper>
    </MenuContainer>
  );
};

export default MenuBar;
