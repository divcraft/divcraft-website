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
          ease: 'easeOut',
          duration: 1,
          delay: 0.2,
        }}
      >
        <Wrapper>
          <ContentContainer>
            <AniTitle>Pomagamy młodym biznesom rozwinąć się w sieci</AniTitle>
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
                delay: 1.6,
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
