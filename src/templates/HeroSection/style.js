/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  min-height: 512px;
  @media (min-width: 769px) {
    min-height: none;
    height: 430px;
  }
  @media (min-width: 1401px) {
    height: 550px;
  }
`;

const BackgroundContainer = styled(motion.div)`
  padding: 0;
  background-color: ${({ theme: { colors } }) => colors.blue.regular};
  background-image: url('/backgrounds/hero-bg-768.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: inherit;
  @media (min-width: 769px) {
    background-position: center;
    background-image: url('/backgrounds/hero-bg-1200.jpg');
  }
  @media (min-width: 1201px) {
    background-image: url('/backgrounds/hero-bg-1920.jpg');
  }
`;

export const AniBackgroundContainer = ({ children, ...props }) => (
  <BackgroundContainer {...props}>{children}</BackgroundContainer>
);

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

const Title = styled(motion.h1)`
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

export const AniTitle = ({ children, ...props }) => (
  <Title
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ ease: 'easeOut', duration: 0.6, delay: 1 }}
    {...props}
  >
    {children}
  </Title>
);

export const SubTitle = styled(motion.h2)`
  color: ${({ theme: { colors } }) => colors.yellow.regular};
  font-size: 6vw;
  @media (min-width: 769px) {
    grid-area: subtitle;
    font-size: 20px;
    max-width: 360px;
  }
`;

export const AniSubTitle = ({ children, ...props }) => (
  <SubTitle {...props}>{children}</SubTitle>
);

export const ButtonContainer = styled(motion.div)`
  align-self: flex-end;
  justify-self: center;
  @media (min-width: 769px) {
    grid-area: button;
    margin-top: 10px;
    align-self: auto;
    justify-self: auto;
  }
`;

export const AniButtonContainer = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);
