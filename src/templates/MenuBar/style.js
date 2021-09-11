import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 60px;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.gray.light};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;
