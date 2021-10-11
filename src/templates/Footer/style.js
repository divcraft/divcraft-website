import styled from 'styled-components';

export const SocialsContainer = styled.div`
  border-top: solid 5px ${({ theme: { colors } }) => colors.gray.darkest};
  background-color: ${({ theme: { colors } }) => colors.gray.darker};
  display: flex;
  justify-content: center;
`;

export const SocialsItem = styled.div`
  padding: 15px 20px;
  font-size: 40px;
  color: ${({ theme: { colors } }) => colors.gray.darkest};
  &:hover {
    color: ${({ theme: { colors } }) => colors.yellow.regular};
    background-color: ${({ theme: { colors } }) => colors.gray.darkest};
  }
`;

export const ContentContainer = styled.footer`
  text-align: center;
  padding: 20px 0;
  background-color: ${({ theme: { colors } }) => colors.gray.darkest};
  color: ${({ theme: { colors } }) => colors.yellow.regular};
  & p {
    margin: 0;
    font-size: 20px;
  }
  & a {
    font-size: 20px;
    color: ${({ theme: { colors } }) => colors.yellow.regular};
    text-decoration: none;
    &:hover {
      color: ${({ theme: { colors } }) => colors.yellow.dark};
    }
  }
`;

export const LinkContainer = styled.div`
  margin-bottom: 15px;
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const LogoContainer = styled.span`
  display: inline-block;
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.gray.dark};
  padding-bottom: 5px;
  margin-bottom: 5px;
  @media (min-width: 769px) {
    border-bottom: none;
    border-right: solid 1px ${({ theme: { colors } }) => colors.gray.dark};
    padding-bottom: 0;
    margin-bottom: 0;
    margin-right: 30px;
    padding-right: 30px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
