import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const SectionContainer = styled.section`
  /* min-height: 512px;
  @media (min-width: 769px) {
    min-height: auto;
    height: 430px;
  }
  @media (min-width: 1401px) {
    height: 550px;
  } */
`;

export const AniBackgroundContainer = styled(motion.div)`
  background-color: ${({ theme: { colors } }) => colors.blue.regular};
  background-image: url('/backgrounds/hero-bg-400.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: inherit;
  @media (min-width: 401px) {
    background-image: url('/backgrounds/hero-bg-768.jpg');
  }
  @media (min-width: 769px) {
    background-image: url('/backgrounds/hero-bg-1400.jpg');
  }
  @media (min-width: 1401px) {
    background-image: url('/backgrounds/hero-bg-1920.jpg');
  }
`;

export const ContentContainer = styled.div`
  padding: 40px 0 90px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  @media (min-width: 769px) {
    grid-template-rows: 1fr auto auto auto 1fr;
    grid-template-columns: 1fr 55%;
    grid-template-areas:
      '. imgx'
      'title imgx'
      'subtitle imgx'
      'button imgx'
      '. imgx';
  }
`;

const moveCloud = keyframes`
  0% {
    transform: translateX(50vw);
  }
  100% {
    transform: translateX(-100vw);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  &::before {
    opacity: 0.8;
    content: url('/cloud-big.svg');
    width: auto;
    position: absolute;
    top: 50%;
    right: 0;
    animation: ${moveCloud} 15s infinite linear;
  }
  &::after {
    opacity: 0.8;
    content: url('/cloud-small.svg');
    width: auto;
    position: absolute;
    top: 20%;
    right: 0;
    animation: ${moveCloud} 25s infinite linear;
  }
  @media (min-width: 769px) {
    grid-area: imgx;
    margin-top: -40px;
  }
`;

export const AniTitle = styled(motion.h1)`
  position: relative;
  margin-bottom: 0;
  font-family: 'Gibson', sans-serif;
  font-weight: 500;
  color: white;
  font-size: 32px;
  padding-bottom: 30px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: white;
  }
  @media (min-width: 401px) {
    font-size: 40px;
  }
  @media (min-width: 601px) {
    font-size: 48px;
  }
  @media (min-width: 769px) {
    grid-area: title;
    font-size: 28px;
    &::before {
      width: 70%;
      max-width: 300px;
    }
  }
  @media (min-width: 1000px) {
    font-size: 36px;
    padding-right: 7vw;
  }
  @media (min-width: 1400px) {
    font-size: 48px;
  }
`;

export const AniSubTitle = styled(motion.h2)`
  color: ${({ theme: { colors } }) => colors.yellow.regular};
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  margin: 30px 0;
  @media (min-width: 769px) {
    grid-area: subtitle;
    margin: 20px 0;
    font-size: 20px;
    max-width: 360px;
    text-align: left;
  }
`;

export const AniButtonContainer = styled(motion.div)`
  align-self: flex-end;
  justify-self: center;
  @media (min-width: 769px) {
    grid-area: button;
    align-self: auto;
    justify-self: auto;
  }
`;
