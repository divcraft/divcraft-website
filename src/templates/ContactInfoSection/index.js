import React from 'react';
import { Wrapper, TitleHeader, Image } from 'components';
import {
  SectionContainer,
  ContactTileContainer,
  ContactTile,
  ImageContainer,
  Description,
  Content,
} from './style';

const ContactInfoSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="blue">Jak możemy Ci pomóc?</TitleHeader>
        <p>
          Porozmawiajmy o tym, jak ma wyglądać strona internetowa Twojej firmy!
          Zrealizujemy wyznaczone przez Ciebie cele lub zaprojektujemy skuteczne
          rozwiązania. Bo Twój sukces jest nas naszym sukcesem. Sprawdź, jak
          wspólnie możemy go osiągnąć.
        </p>
        <ContactTileContainer>
          <ContactTile href="mailto:kontakt@divcraft.pl">
            <ImageContainer>
              <Image src="/icons/email-icon.svg" alt="email ikona" />
            </ImageContainer>
            <Description>Email:</Description>
            <Content>kontakt@divcraft.pl</Content>
          </ContactTile>
          <ContactTile href="tel:+48782172655">
            <ImageContainer>
              <Image src="/icons/phone-icon.svg" alt="telefon ikona" />
            </ImageContainer>
            <Description>Telefon:</Description>
            <Content>+48 782 172 655</Content>
          </ContactTile>
        </ContactTileContainer>
      </Wrapper>
    </SectionContainer>
  );
};

export default ContactInfoSection;
