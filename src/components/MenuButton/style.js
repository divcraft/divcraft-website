import styled, { css } from 'styled-components';

export const MenuButton = styled.div`
  position: absolute;
  top: 15px;
  right: 2.5vw;
  width: 28px;
  height: 28px;
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
    width: 28px;
    height: 2px;
    background-color: ${({ theme: { colors } }) => colors.yellow.regular};
    &::before {
      content: '';
      transition: all 0.3s;
      position: absolute;
      bottom: 7px;
      right: 0;
      width: 19px;
      height: 2px;
      background-color: ${({ theme: { colors } }) => colors.yellow.regular};
    }
    &::after {
      content: '';
      transition: all 0.3s;
      position: absolute;
      top: 7px;
      right: 0;
      width: 19px;
      height: 2px;
      background-color: ${({ theme: { colors } }) => colors.yellow.regular};
    }
    ${({ isClicked }) =>
      isClicked &&
      css`
        height: 0;
        &::before {
          transform: rotate(-45deg);
          width: 23px;
          bottom: -1px;
        }
        &::after {
          transform: rotate(45deg);
          width: 23px;
          top: -1px;
        }
      `}
  }
`;
