import styled from 'styled-components';

export const PopupContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  width: 85%;
  max-width: 700px;
  box-shadow: ${({ theme: { boxshadow } }) => boxshadow.dark};
`;
