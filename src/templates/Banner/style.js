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
  font-size: 24px;
  border-bottom: solid 1px white;
`;

export const SubTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.yellow};
  font-size: 16px;
`;
