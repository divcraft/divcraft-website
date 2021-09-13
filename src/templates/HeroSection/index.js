import React from 'react';
import { Wrapper, Button } from 'components';
import {
  SectionContainer,
  AniBackgroundContainer,
  ContentContainer,
  AniTitle,
  AniSubTitle,
  AniButtonContainer,
} from './style';

const HeroSection = () => {
  return (
    <SectionContainer>
      <AniBackgroundContainer
        initial={{
          height: 0,
          y: 200,
        }}
        animate={{
          height: 'inherit',
          y: 0,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <Wrapper>
          <ContentContainer>
            <AniTitle
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeOut', duration: 0.6, delay: 1.2 }}
            >
              Pomagamy młodym biznesom rozwinąć się w sieci
            </AniTitle>
            <AniSubTitle
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                ease: 'easeOut',
                duration: 0.6,
                delay: 1.2,
              }}
            >
              Stwórzmy razem stronę internetową, która nada nowy wymiar twojej
              firmie
            </AniSubTitle>
            <AniButtonContainer
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: 'easeOut',
                duration: 0.6,
                delay: 1.4,
              }}
            >
              <Button to="/portfolio" pattern="gatsbyLink">
                Zobacz portfolio
              </Button>
            </AniButtonContainer>
          </ContentContainer>
        </Wrapper>
      </AniBackgroundContainer>
    </SectionContainer>
  );
};

export default HeroSection;
