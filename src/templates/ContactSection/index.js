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

const ContactSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="blue">Masz pytania?</TitleHeader>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or.
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

export default ContactSection;
