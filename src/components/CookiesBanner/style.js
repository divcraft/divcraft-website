import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BannerContainer = styled.div`
  position: fixed;
  background-color: rgba(32, 32, 32, 0.9);
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 0;
  z-index: 1;
  animation: ${opacity} 0.2s 1.8s linear both;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 769px) {
    flex-direction: row;
  }
  & p {
    margin: 0;
    padding-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 16px;
    @media (min-width: 769px) {
      padding-bottom: 0;
      padding-right: 20px;
      text-align: left;
    }
  }
  & button {
    height: auto;
    width: auto;
    line-height: normal;
    padding: 5px 15px;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    flex-shrink: 0;
  }
`;
