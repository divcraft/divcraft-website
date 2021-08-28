import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: grid;
`;

export const Content = styled.div`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  /* stylelint-disable */
  font-family: 'Raleway';
  font-weight: 400;
`;

export const Title = styled.h1`
  color: white;
  font-weight: inherit;
  font-size: 24px;
  border-bottom: solid 1px white;
`;

export const SubTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.yellow};
  font-weight: inherit;
  font-size: 16px;
`;
