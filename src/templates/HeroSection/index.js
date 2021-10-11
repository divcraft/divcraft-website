import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, Button, SectionBar } from 'components';
import {
  SectionContainer,
  AniBackgroundContainer,
  ContentContainer,
  ImageContainer,
  AnimationContainer,
  Title,
  SubTitle,
  ButtonContainer,
} from './style';

const HeroSection = () => {
  return (
    <SectionContainer>
      <AniBackgroundContainer>
        <Wrapper>
          <ContentContainer>
            <Title>Pomagamy młodym biznesom rozwinąć się w sieci</Title>
            <ImageContainer>
              <AnimationContainer>
                <StaticImage
                  src="../../images/hero-image.svg"
                  alt="Stwórzmy razem stronę internetową"
                />
              </AnimationContainer>
            </ImageContainer>
            <SubTitle>
              Stwórzmy razem stronę internetową, która nada nowy wymiar twojej
              firmie
            </SubTitle>
            <ButtonContainer>
              <Button to="/portfolio" pattern="gatsbyLink">
                Zobacz portfolio
              </Button>
            </ButtonContainer>
          </ContentContainer>
        </Wrapper>
      </AniBackgroundContainer>
      <SectionBar pattern="bottom" />
    </SectionContainer>
  );
};

export default HeroSection;
