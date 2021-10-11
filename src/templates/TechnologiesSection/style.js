import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  padding: 50px 0;
  background-color: ${({ theme: { colors } }) => colors.blue.sky};
  position: relative;
  &::before,
  &::after {
    content: '';
    background-image: url('/elements/corner-lines.svg');
    background-position: center;
    background-size: contain;
    position: absolute;
    width: 150px;
    height: 150px;
    @media (min-width: 769px) {
      width: 245px;
      height: 245px;
    }
    @media (min-width: 1401px) {
      width: 345px;
      height: 345px;
    }
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    transform: rotate(180deg);
    bottom: 0;
    right: 0;
  }
  @media (min-width: 769px) {
    padding: 70px 0;
  }
`;

export const TitleAligner = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const TileContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px));
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const AniTile = styled(motion.div)`
  background-color: white;
  padding: 15px;
  box-shadow: ${({ theme: { boxshadow } }) => boxshadow.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vw;
  max-height: 250px;
  &:hover {
    background-color: ${({ theme: { colors } }) =>
      colors.yellow.regular} !important;
  }
  & img {
    height: 60%;
    max-height: 100px;
    width: auto;
  }
  @media (min-width: 769px) {
    height: 25vw;
  }
`;

export const IconTitle = styled.h2`
  text-align: center;
  margin: 15px 0 0 0;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.blue.regular};
  @media (min-width: 769px) {
    margin: 25px 0 0 0;
    font-size: 24px;
  }
`;
