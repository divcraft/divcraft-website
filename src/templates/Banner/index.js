import React from 'react';
import { Wrapper, LinkButton } from 'components';
import {
  SectionContainer,
  ContentContainer,
  Title,
  SubTitle,
  ButtonContainer,
} from './style';

const Banner = () => {
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
            <LinkButton to="/portfolio">Zobacz portfolio</LinkButton>
          </ButtonContainer>
        </ContentContainer>
      </Wrapper>
    </SectionContainer>
  );
};

export default Banner;
