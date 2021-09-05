import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 70px 0;
  background: linear-gradient(45deg, white, #cce1ff);
`;

export const TitleAligner = styled.div`
  text-align: center;
`;

export const TileContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px));
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
  @media (min-width: 768px) {
    margin-top: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const Tile = styled.div`
  background-color: white;
  padding: 15px;
  box-shadow: 0 3px 6px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vw;
  max-height: 250px;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.yellow};
  }
  & img {
    height: 60%;
    max-height: 100px;
    width: auto;
  }
  @media (min-width: 768px) {
    height: 25vw;
  }
`;

export const IconTitle = styled.h2`
  text-align: center;
  margin: 15px 0 0 0;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.blue};
  @media (min-width: 768px) {
    margin: 25px 0 0 0;
    font-size: 24px;
  }
`;