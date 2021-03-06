import styled, { css } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const linkStyle = css`
  cursor: pointer;
  display: block;
  width: 165px;
  height: 45px;
  color: black;
  background-color: ${({ theme: { colors } }) => colors.yellow.regular};
  text-align: center;
  line-height: 45px;
  text-decoration: none;
  border: none;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.yellow.dark};
  }
`;

export const GatsbyLinkButton = styled(AniLink)`
  ${linkStyle}
`;

export const LinkButton = styled.a`
  ${linkStyle}
`;

export const RegularButton = styled.button`
  ${linkStyle}
`;
