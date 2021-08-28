import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: grid;
`;

export const Content = styled.div`
  grid-area: 1/1;
  position: relative;
  place-items: center;
`;

export const Title = styled.h1`
  color: white;
`;

export const SubTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.yellow};
`;
