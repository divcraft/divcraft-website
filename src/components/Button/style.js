import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const linkStyle = css`
  cursor: pointer;
  display: block;
  width: 165px;
  height: 45px;
  color: black;
  background-color: ${({ theme: { colors } }) => colors.yellow};
  text-align: center;
  line-height: 45px;
  text-decoration: none;
  border: none;
  &:hover {
    background-color: #f2d201;
  }
`;

export const GatsbyLinkButton = styled(Link)`
  ${linkStyle}
`;

export const LinkButton = styled.a`
  ${linkStyle}
`;

export const RegularButton = styled.button`
  ${linkStyle}
`;
