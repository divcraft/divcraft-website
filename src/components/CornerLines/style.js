import styled, { css } from 'styled-components';

export const CornersContainer = styled.div`
  position: absolute;
  background-image: url('/corner-lines.svg');
  background-position: center;
  background-size: contain;
  width: 150px;
  height: 150px;
  ${({ pattern }) =>
    pattern === 'top' &&
    css`
      top: 0;
      left: 0;
    `}
  ${({ pattern }) =>
    pattern === 'bottom' &&
    css`
      transform: rotate(180deg);
      bottom: 0;
      right: 0;
    `}
   @media (min-width: 769px) {
    width: 245px;
    height: 245px;
  }
  @media (min-width: 1401px) {
    width: 345px;
    height: 345px;
  }
`;
