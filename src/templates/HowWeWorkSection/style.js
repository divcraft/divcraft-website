import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 30px 0 0;
`;

export const WorkStepsContainer = styled.div`
  margin-top: 30px;
  padding: 40px 0 50px;
  background-color: ${({ theme: { colors } }) => colors.gray.light};
`;

export const TileList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, auto);
  grid-gap: 10px;
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
  @media (min-width: 901px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;

export const Tile = styled.li`
  font-family: 'Raleway', sans-serif;
  padding: 25px;
  background-color: white;
  box-shadow: 0 3px 6px #c6c6c6;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 110px auto;
  &:nth-child(1) h1::before {
    content: '1';
  }
  &:nth-child(2) h1::before {
    content: '2';
  }
  &:nth-child(3) h1::before {
    content: '3';
  }
  &:nth-child(4) h1::before {
    content: '4';
  }
  &:nth-child(5) h1::before {
    content: '5';
  }
  &:nth-child(6) h1::before {
    content: '6';
  }
`;

export const TileTitle = styled.h1`
  padding-left: 80px;
  font-size: 24px;
  color: ${({ theme: { colors } }) => colors.blue};
  position: relative;
  max-width: 330px;
  display: block;
  &::before {
    color: ${({ theme: { colors } }) => colors.yellow};
    font-family: 'Roboto', sans-serif;
    font-size: 120px;
    line-height: 1;
    position: absolute;
    top: -5px;
    left: 0;
  }
`;

export const TileDescription = styled.p`
  font-family: inherit;
  font-size: 18px;
  justify-self: flex-start;
`;
