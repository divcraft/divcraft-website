import styled from 'styled-components';

export const SectionContainer = styled.section`
  background: ${({ theme: { colors } }) => colors.blue};
  background: linear-gradient(#5b90b2, #254a62);
  padding: 0;
`;

export const BackgroundImage = styled.div`
  padding: 30px 0;
  height: 100%;
  background-image: url('/backgrounds/services-bg.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat-x;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 900px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 50px;
  @media (min-width: 900px) {
    margin: 70px 0;
    display: flex;
    align-items: flex-start;
    & > div {
      width: 50%;
      padding: 0 5%;
    }
    &:nth-child(odd) div {
      order: -1;
    }
  }
`;
