import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const SectionContainer = styled.section``;

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
    background-image: url('/backgrounds/hero-bg-1366.jpg');
  }
  @media (min-width: 1367px) {
    background-image: url('/backgrounds/hero-bg-1920.jpg');
  }
`;

export const ContentContainer = styled.div`
  padding: 40px 0 90px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  @media (min-width: 769px) {
    grid-template-rows: 1fr auto auto auto 1fr;
    grid-template-columns: 1fr 60%;
    grid-template-areas:
      '. imgx'
      'title imgx'
      'subtitle imgx'
      'button imgx'
      '. imgx';
  }
`;

const dropImage = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const moveCloud = keyframes`
  0% {
    transform: translateX(70vw);
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
    animation: ${moveCloud} 20s infinite linear;
  }
  &::after {
    opacity: 0.8;
    content: url('/cloud-small.svg');
    width: auto;
    position: absolute;
    top: 20%;
    right: 0;
    animation: ${moveCloud} 30s infinite linear;
  }
  @media (min-width: 769px) {
    grid-area: imgx;
    margin-top: -40px;
  }
`;

export const AnimationContainer = styled.div`
  overflow: hidden;
  & > div {
    animation: ${dropImage} 1.4s 1.2s cubic-bezier(0.44, 1.55, 0.12, 0.74) both;
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
  line-height: 1.05;
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
  }
  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;

export const AniSubTitle = styled(motion.h2)`
  color: ${({ theme: { colors } }) => colors.yellow.regular};
  font-family: 'Raleway', sans-serif;
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
