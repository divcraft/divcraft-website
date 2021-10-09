import styled from 'styled-components';

export const PopupContainer = styled.div`
  z-index: 2;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 25px;
  width: 90%;
  max-width: 500px;
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  box-shadow: ${({ theme: { boxshadow } }) => boxshadow.dark};
`;

export const HideButton = styled.button`
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
    background-color: ${({ theme: { colors } }) => colors.yellow.regular};
    transform-origin: center;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;
