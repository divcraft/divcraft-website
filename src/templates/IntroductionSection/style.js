import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AniSectionContainer = styled(motion.section)`
  padding: 50px 0;
  background-color: ${({ theme: { colors } }) => colors.blue.sky};
  @media (min-width: 901px) {
    padding: 100px 0;
  }
`;

export const ContentContainer = styled.div`
  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr auto auto auto 1fr;
    grid-column-gap: 20px;
    grid-template-areas:
      '. img'
      'title img'
      'par1 img'
      'par2 img'
      '. img';
  }
`;

export const ImageContainer = styled.div`
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
