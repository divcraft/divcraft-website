import React from 'react';
import { MenuButton as StyledMenuButton } from './style';

const MenuButton = ({ ...props }) => {
  return (
    <StyledMenuButton {...props}>
      <span />
    </StyledMenuButton>
  );
};

export default MenuButton;
