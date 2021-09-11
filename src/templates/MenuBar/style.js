import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 1;
  box-shadow: 0 0 3px lightgray;
  width: 100%;
  height: 60px;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;
