import React from 'react';
import { Wrapper, TitleHeader, Image, Button, CornerLines } from 'components';
import { SectionContainer, GridContainer, ImageContainer } from './style';

const HomeContactSection = () => {
  return (
    <SectionContainer>
      <CornerLines pattern="top" />
      <Wrapper>
        <GridContainer>
          <TitleHeader color="blue">Masz pytania? Pomysły?</TitleHeader>
          <p>
            Czekamy na Ciebie! Skontaktuj się z nami, jeżeli czujesz, że możemy
            Ci pomóc. Profesjonalną konsultację zawsze otrzymasz gratis.
            Wystarczy wypełnić krótki formularz zgłoszeniowy. Chciałbyś
            niezobowiązująco porozmawiać o Twojej nowej stronie firmowej? Bo my
            bardzo!
          </p>
          <ImageContainer>
            <Image
              src="/illustrations/questions-image.svg"
              alt="skontaktuj się"
            />
          </ImageContainer>
          <Button to="/kontakt" pattern="gatsbyLink">
            Porozmawiajmy
          </Button>
        </GridContainer>
      </Wrapper>
      <CornerLines pattern="bottom" />
    </SectionContainer>
  );
};

export default HomeContactSection;
