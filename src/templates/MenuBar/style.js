import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: inherit;
  background: ${({ theme: { gradients } }) => gradients.dark};
`;
