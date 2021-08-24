import styled, { css } from 'styled-components';

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
      width: 90%;
      margin: 0 auto;
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
