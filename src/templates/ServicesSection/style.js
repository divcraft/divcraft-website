import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: ${({ theme: { colors } }) => colors.blue};
  padding: 0;
`;

export const BackgroundImage = styled.div`
  padding: 50px 0;
  height: 100%;
  background-image: url('/backgrounds/services-bg-768.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat-x;
  @media (min-width: 769px) {
    background-image: url('/backgrounds/services-bg-1200.jpg');
  }
  @media (min-width: 1201px) {
    background-image: url('/backgrounds/services-bg-1920.jpg');
  }
`;

export const ContentContainer = styled.div`
  margin-top: 15px;
  @media (min-width: 901px) {
    margin-top: 0;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 901px) {
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    & img {
      width: 50%;
      padding: 0 20px;
    }
    & > div {
      width: 50%;
      padding: 0 5%;
    }
    &:nth-child(odd) div {
      order: -1;
    }
  }
`;
