import React from 'react';
import { Wrapper, Button } from 'components';
import {
  SectionContainer,
  ContentContainer,
  Title,
  SubTitle,
  ButtonContainer,
} from './style';

const HeroSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <ContentContainer>
          <Title>Pomagamy młodym biznesom rozwinąć się w sieci</Title>
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
    </SectionContainer>
  );
};

export default HeroSection;
