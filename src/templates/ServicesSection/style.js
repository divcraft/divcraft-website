import styled from 'styled-components';

export const SectionContainer = styled.section`
  background: ${({ theme: { colors } }) => colors.blue};
  background: linear-gradient(#5b90b2, #254a62);
  padding: 0;
`;

export const BackgroundImage = styled.div`
  padding: 80px 0;
  height: 100%;
  background-image: url('/backgrounds/services-bg.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat-x;
`;

export const ContentContainer = styled.div`
  margin-top: 15px;
  @media (min-width: 900px) {
    margin-top: 0;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 900px) {
    display: flex;
    align-items: flex-start;
    & img {
      width: 50%;
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
