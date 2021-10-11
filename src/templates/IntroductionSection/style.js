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
  @media (min-width: 901px) {
    padding: 100px 0;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr auto auto auto 1fr;
    grid-template-areas:
      '. img'
      'title img'
      'par1 img'
      'par2 img'
      '. img';
  }
`;

export const AniImageContainer = styled(motion.div)`
  width: 100%;
  margin: 20px 0;
  grid-area: img;
  padding-right: 15px;
  padding-bottom: 15px;
  position: relative;
  @media (min-width: 901px) {
    margin: 0;
    align-self: center;
  }
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    bottom: 0;
    left: 15px;
    right: 0;
    border: solid 5px ${({ theme: { colors } }) => colors.yellow.regular};
  }
`;

export const TitleContainer = styled.div`
  grid-area: title;
  @media (min-width: 901px) {
    padding-right: 10%;
  }
`;

export const Paragraph1 = styled.p`
  grid-area: par1;
  @media (min-width: 901px) {
    padding-right: 10%;
  }
`;

export const Paragraph2 = styled.p`
  grid-area: par2;
  @media (min-width: 901px) {
    padding-right: 10%;
  }
`;
