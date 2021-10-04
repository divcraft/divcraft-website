import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, Button } from 'components';
import {
  SectionContainer,
  AniBackgroundContainer,
  ContentContainer,
  ImageContainer,
  AniTitle,
  AniSubTitle,
  AniButtonContainer,
} from './style';

const HeroSection = () => {
  return (
    <SectionContainer>
      <AniBackgroundContainer>
        <Wrapper>
          <ContentContainer>
            <AniTitle>Pomagamy młodym biznesom rozwinąć się w sieci</AniTitle>
            <ImageContainer>
              <StaticImage
                src="../../images/hero-image.svg"
                alt="Stwórzmy razem stronę internetową"
              />
            </ImageContainer>
            <AniSubTitle>
              Stwórzmy razem stronę internetową, która nada nowy wymiar twojej
              firmie
            </AniSubTitle>
            <AniButtonContainer>
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
