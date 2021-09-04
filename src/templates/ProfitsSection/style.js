import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding-top: 30px;
`;

export const BackgroundImage = styled.div`
  padding: 70px 0;
  background-image: url('/backgrounds/profits-bg-mobile.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    background-image: url('/backgrounds/profits-bg-desktop.jpg');
  }
`;

export const FlexContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 20px;
  @media (min-width: 400px) {
    padding-left: 20%;
  }
  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0;
    padding: 0 5%;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  & p {
    margin-bottom: 3px;
  }
`;
