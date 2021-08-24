import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 1;
  box-shadow: 0 0 3px lightgray;
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div``;

export const Navigation = styled.nav`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: ${({ theme: { colors } }) => colors.blue};
  transition: all 0.5s 0.3s;
  overflow: hidden;
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
    & li {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      & a {
        display: block;
        height: 70px;
        background-color: white;
        line-height: 70px;
        text-decoration: none;
        color: ${({ theme: { colors } }) => colors.blue};
        &:hover,
        &.active {
          background-color: ${({ theme: { colors } }) => colors.yellow};
          color: black;
        }
      }
    }
  }
`;

export const MenuButton = styled.div`
  width: 27px;
  height: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  & span {
    transition: all 0.3s;
    position: relative;
    display: block;
    width: 27px;
    height: 2px;
    background-color: ${({ theme: { colors } }) => colors.blue};
    &::before {
      content: '';
      transition: all 0.3s;
      position: absolute;
      bottom: 7px;
      right: 0;
      width: 19px;
      height: 2px;
      background-color: black;
    }
    &::after {
      content: '';
      transition: all 0.3s;
      position: absolute;
      top: 7px;
      right: 0;
      width: 19px;
      height: 2px;
      background-color: black;
    }
    ${({ isClicked }) =>
      isClicked &&
      css`
        background-color: white;
        &::before {
          transform: rotate(-45deg);
          bottom: 0;
          width: 23px;
        }
        &::after {
          transform: rotate(45deg);
          top: 0;
          width: 23px;
          background-color: ${({ theme: { colors } }) => colors.blue};
        }
      `}
  }
`;
