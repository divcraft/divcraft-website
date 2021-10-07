import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  padding: 50px 0;
  background-color: ${({ theme: { colors } }) => colors.blue.sky};
  @media (min-width: 901px) {
    padding: 100px 0;
  }
`;

export const GridContainer = styled.div`
  & a {
    margin: auto;
  }
  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      '. img'
      'title img'
      'description img'
      'button img'
      '. img';
    & h1 {
      grid-area: title;
      padding-right: 7%;
    }
    & p {
      grid-area: description;
      padding-right: 7%;
    }
    & a {
      grid-area: button;
      margin: 0;
    }
    & div {
      grid-area: img;
      align-self: center;
    }
  }
`;

export const AniImageContainer = styled(motion.div)`
  padding: 10%;
  @media (min-width: 901px) {
    padding: 20px;
  }
`;
