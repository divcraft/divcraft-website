import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 1;
`;

export const Main = styled.main`
  position: relative;
  z-index: 0;
  margin-top: 60px;
  & * {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const OverflowWrapper = styled.div`
  overflow-x: hidden;
`;
