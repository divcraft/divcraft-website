import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
`;

export const Main = styled.main`
  position: relative;
  z-index: -1;
  @media (min-width: 769px) {
    padding-top: 30px;
  }
`;

export const OverflowWrapper = styled.div`
  overflow-x: hidden;
`;
