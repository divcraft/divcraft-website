import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  min-height: 512px;
  @media (min-width: 769px) {
    min-height: auto;
    height: 430px;
  }
  @media (min-width: 1401px) {
    height: 550px;
  }
`;

export const AniBackgroundContainer = styled(motion.div)`
  padding: 0;
  background-color: ${({ theme: { colors } }) => colors.blue.regular};
  background-image: url('/backgrounds/hero-bg-768.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: inherit;
  @media (min-width: 769px) {
    height: inherit;
    background-position: center;
    background-image: url('/backgrounds/hero-bg-1200.jpg');
  }
  @media (min-width: 1201px) {
    height: inherit;
    background-image: url('/backgrounds/hero-bg-1920.jpg');
  }
`;

export const ContentContainer = styled.div`
  padding: 25px 0;
  height: 160vw;
  max-height: 800px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  @media (min-width: 769px) {
    width: 45%;
    height: inherit;
    grid-template-rows: 1fr auto auto auto 1fr;
    grid-template-areas:
      '.'
      'title'
      'subtitle'
      'button'
      '.';
  }
`;

export const AniTitle = styled(motion.h1)`
  color: white;
  font-weight: 600;
  font-size: 8vw;
  padding-bottom: 12px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: white;
  }
  @media (min-width: 769px) {
    grid-area: title;
    font-size: 32px;
    &::before {
      width: 70%;
      max-width: 300px;
    }
  }
`;

export const AniSubTitle = styled(motion.h2)`
  color: ${({ theme: { colors } }) => colors.yellow.regular};
  font-size: 6vw;
  @media (min-width: 769px) {
    grid-area: subtitle;
    font-size: 20px;
    max-width: 360px;
  }
`;

export const AniButtonContainer = styled(motion.div)`
  align-self: flex-end;
  justify-self: center;
  @media (min-width: 769px) {
    grid-area: button;
    margin-top: 10px;
    align-self: auto;
    justify-self: auto;
  }
`;
