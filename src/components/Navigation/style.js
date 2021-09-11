import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(53, 106, 140, 0.9);
  transition: all 0.5s;
  overflow: hidden;
  @media (min-width: 769px) {
    transition: none;
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    height: auto;
    background-color: transparent;
  }
  ${({ isClicked }) =>
    isClicked &&
    css`
      height: 100vh;
    `};
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-top: 30px;
    @media (min-width: 769px) {
      display: flex;
      margin-top: 0;
      align-items: center;
    }
    & li {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 10px;
      opacity: 0;
      transition: all 0.3s;
      @media (min-width: 769px) {
        opacity: 1;
        transition: none;
        margin-bottom: 0;
        margin-right: 30px;
      }
      ${({ isClicked }) =>
        isClicked &&
        css`
          opacity: 1;
          &:nth-child(1) {
            transition-delay: 0.3s;
          }
          &:nth-child(2) {
            transition-delay: 0.45s;
          }
          &:nth-child(3) {
            transition-delay: 0.6s;
          }
        `};
      &:last-child {
        margin-bottom: 0;
        @media (min-width: 769px) {
          margin-right: 0;
        }
      }
      & a {
        display: block;
        border: 3px solid ${({ theme: { colors } }) => colors.yellow.regular};
        height: 70px;
        background-color: white;
        line-height: 65px;
        text-decoration: none;
        color: black;
        font-size: 24px;
        font-weight: 500;
        &:hover,
        &.active {
          background-color: ${({ theme: { colors } }) => colors.yellow.regular};
          color: black;
          @media (min-width: 769px) {
            background-color: transparent;
          }
        }
        @media (min-width: 769px) {
          color: ${({ theme: { colors } }) => colors.blue.regular};
          font-size: 20px;
          border: none;
          height: auto;
          line-height: inherit;
          background-color: transparent;
        }
      }
    }
  }
`;
