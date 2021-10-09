import styled, { css } from 'styled-components';

export const HideFormButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 14px;
    height: 2px;
    width: 23px;
    transform-origin: center;
    ${({ pattern }) =>
      pattern === 'yellow' &&
      css`
        background-color: ${({ theme: { colors } }) => colors.yellow.regular};
      `}
    ${({ pattern }) =>
      pattern === 'black' &&
      css`
        background-color: ${({ theme: { colors } }) => colors.gray.darkest};
      `}
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;
