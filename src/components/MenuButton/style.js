import styled, { css } from 'styled-components';

export const MenuButton = styled.div`
  width: 27px;
  height: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }
  & span {
    transition: all 0.3s;
    position: relative;
    display: block;
    width: 27px;
    height: 2px;
    background-color: ${({ theme: { colors } }) => colors.blue};
    &::before {
      content: '';
      transition: all 0.3s;
      position: absolute;
      bottom: 7px;
      right: 0;
      width: 19px;
      height: 2px;
      background-color: black;
    }
    &::after {
      content: '';
      transition: all 0.3s;
      position: absolute;
      top: 7px;
      right: 0;
      width: 19px;
      height: 2px;
      background-color: black;
    }
    ${({ isClicked }) =>
      isClicked &&
      css`
        background-color: white;
        &::before {
          transform: rotate(-45deg);
          bottom: 0;
          width: 23px;
        }
        &::after {
          transform: rotate(45deg);
          top: 0;
          width: 23px;
          background-color: ${({ theme: { colors } }) => colors.blue};
        }
      `}
  }
`;
