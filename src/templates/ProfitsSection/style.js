import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 0;
`;

export const BackgroundImage = styled.div`
  padding: 50px 0;
  background-color: ${({ theme: { colors } }) => colors.blue.regular};

  /* background-image: url('/backgrounds/profits-bg-768.jpg');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover; */
  @media (min-width: 769px) {
    /* background-image: url('/backgrounds/profits-bg-1200.jpg'); */
  }
  @media (min-width: 1201px) {
    /* background-image: url('/backgrounds/profits-bg-1920.jpg'); */
  }
`;

export const FlexContainer = styled.div`
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 769px) {
    width: 50%;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 20px;
  @media (min-width: 400px) {
    padding-left: 20%;
  }
  @media (min-width: 769px) {
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
