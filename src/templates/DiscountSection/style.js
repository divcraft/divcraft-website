import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  margin: 40px 0 0;
  @media (min-width: 769px) {
    margin: 70px 0 0;
  }
`;

export const AniImageContainer = styled(motion.div)`
  width: 100%;
  margin: 20px 0;
  grid-area: img;
  padding-right: 15px;
  padding-bottom: 15px;
  position: relative;
  @media (min-width: 769px) {
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

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media (min-width: 769px) {
    margin-bottom: 60px;
    flex-direction: row;
    align-items: center;
    & > div:nth-child(1) {
      width: 55%;
      padding-right: 5%;
    }
    & > div:nth-child(2) {
      width: 45%;
    }
  }
`;

export const GrayContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  padding: 40px 0 50px;
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TimeCounter = styled.div`
  margin-top: -15px;
  margin-bottom: 20px;
  & * {
    font-family: 'Gibson', sans-serif;
    font-size: 36px;
    font-weight: 300;
  }
`;
