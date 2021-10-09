import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PopupBackgound = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(32, 32, 32, 0.8);
  animation: ${opacity} 0.4s linear both;
`;

export const PopupContainer = styled.div`
  animation: ${opacity} 0.4s 0.6s linear both;
  background-color: white;
  width: 90%;
  max-width: 600px;
  position: relative;
  text-align: center;
  p {
    margin: 30px auto;
    max-width: 300px;
  }
`;

export const TitleContainer = styled.div`
  padding: 30px;
  background-image: url('/backgrounds/popup-bg-400.jpg');
  width: 100%;
  height: 50vw;
  min-height: 220px;
  max-height: 330px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  & h1 {
    margin: 0 auto;
    font-weight: 400;
    max-width: 330px;
    text-shadow: ${({ theme: { boxshadow } }) => boxshadow.dark};
  }
`;

export const ButtonContainer = styled.div`
  padding: 20px 0;
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  & a {
    margin: auto;
  }
`;
