import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 30px 0 20px;
`;

export const ContactTileContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactTile = styled.a`
  transition: background-color 0.1s;
  text-decoration: none;
  padding: 10px;
  background-color: ${({ theme: { colors } }) => colors.blue};
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-areas:
    'iconx desc'
    'iconx contentx';
  &:hover {
    background-color: #395f78;
  }
  & p {
    margin: 0;
    padding-left: 10px;
  }
  @media (min-width: 900px) {
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
  color: ${({ theme: { colors } }) => colors.yellow};
  grid-area: desc;
  align-self: flex-end;
  font-size: 16px;
`;

export const Content = styled.p`
  color: white;
  grid-area: contentx;
  font-size: 22px;
  @media (min-width: 900px) {
    font-size: 28px;
  }
`;
