import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 0;
`;

export const ContactTileContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 25px;
  margin-bottom: 40px;
  @media (min-width: 901px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactTile = styled.a`
  transition: background-color 0.1s;
  text-decoration: none;
  padding: 10px;
  background-color: ${({ theme: { colors } }) => colors.blue.regular};
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-areas:
    'iconx desc'
    'iconx contentx';
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blue.dark};
  }
  & p {
    margin: 0;
    padding-left: 10px;
  }
  @media (min-width: 901px) {
    padding: 20px;
    & p {
      padding-left: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  grid-area: iconx;
  align-self: center;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.yellow.regular};
  grid-area: desc;
  align-self: flex-end;
  font-size: 16px;
`;

export const Content = styled.p`
  color: white;
  grid-area: contentx;
  font-size: 22px;
  @media (min-width: 901px) {
    font-size: 28px;
  }
`;
