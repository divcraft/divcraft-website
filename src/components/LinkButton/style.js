import styled from 'styled-components';
import { Link } from 'gatsby';

export const LinkButton = styled(Link)`
  display: block;
  width: 165px;
  height: 45px;
  color: black;
  background-color: ${({ theme: { colors } }) => colors.yellow};
  text-align: center;
  line-height: 45px;
  text-decoration: none;
  &:hover {
    background-color: #f2d201;
  }
`;
