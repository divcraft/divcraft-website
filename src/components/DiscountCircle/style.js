import styled, { keyframes } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const fading = keyframes`
0% {
   transform: scale(1);
}
90% {
   transform: scale(1);
}
95% {
   transform: scale(1.2);
}
100% {
   transform: scale(1);
}
`;

export const CircleLinkContainer = styled(AniLink)`
  text-decoration: none;
  position: fixed;
  cursor: pointer;
  z-index: 1;
  bottom: 12px;
  right: 12px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.yellow.regular};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fading} 15s ease-in-out infinite;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.yellow.dark};
  }
  @media (min-width: 769px) {
    opacity: 0.8;
    bottom: auto;
    right: auto;
    top: 16px;
    left: calc(40vw + 10px);
    z-index: 2;
    height: 30px;
    width: auto;
    border-radius: 3px;
    color: ${({ theme: { colors } }) => colors.yellow.regular};
    padding: 10px;
    border: solid 1px ${({ theme: { colors } }) => colors.yellow.regular};
    background: transparent;
    &:hover {
      opacity: 1;
      background: transparent;
    }
    @media (min-width: 1590px) {
      left: 650px;
    }
  }
  & p {
    font-family: 'Gibson', sans-serif;
    font-weight: 500;
    line-height: 1;
    font-size: 24px;
    transform: translateY(2px);
    & span {
      font-size: 16px;
      display: inline-block;
      transform: translate(2px, -40%);
    }
    @media (min-width: 769px) {
      font-size: 20px;
      transition: all 0.2s;
      color: white;
      & span {
        font-size: 14px;
        display: inline-block;
        transform: translate(2px, -40%);
      }
    }
  }
`;
