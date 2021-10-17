import styled, { css } from 'styled-components';

export const BarContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 60px;
  ${({ pattern }) =>
    pattern === 'top' &&
    css`
      top: 0;
    `}
  ${({ pattern }) =>
    pattern === 'bottom' &&
    css`
      transform: rotate(180deg);
      bottom: 0;
    `}
`;

export const Gradient = styled.div`
  background: ${({ theme: { gradients } }) => gradients.dark};
  width: 100%;
  height: 30px;
`;

export const White = styled.div`
  background-color: ${({ theme: { colors } }) => colors.blue.sky};
  clip-path: polygon(0% 0%, 100% 0%, calc(100% - 60px) 100%, 0% 100%);
  height: 60px;
  width: calc(70px + 5%);
`;
