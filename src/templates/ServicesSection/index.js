import React from 'react';
import { Wrapper, TitleHeader, Paragraph, Image } from 'components';
import {
  SectionContainer,
  BackgroundImage,
  List,
  ListItem,
  ContentContainer,
} from './style';

const ServicesSection = () => {
  return (
    <>
      <SectionContainer>
        <BackgroundImage>
          <Wrapper>
            <List>
              <ListItem>
                <Image
                  src="/illustrations/design-image.svg"
                  alt="grafika strony"
                />
                <ContentContainer>
                  <TitleHeader color="yellow">
                    Oryginalny projekt graficzny
                  </TitleHeader>
                  <Paragraph color="white">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself.
                  </Paragraph>
                </ContentContainer>
              </ListItem>
              <ListItem>
                <Image
                  src="/illustrations/content-image.svg"
                  alt="edycja treści"
                />
                <ContentContainer>
                  <TitleHeader color="yellow">
                    Dynamiczna edycja treści
                  </TitleHeader>
                  <Paragraph color="white">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself.
                  </Paragraph>
                </ContentContainer>
              </ListItem>
              <ListItem>
                <Image
                  src="/illustrations/time-image.svg"
                  alt="wczytywanie strony"
                />
                <ContentContainer>
                  <TitleHeader color="yellow">
                    Wysoka prędkość wczytywania
                  </TitleHeader>
                  <Paragraph color="white">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself.
                  </Paragraph>
                </ContentContainer>
              </ListItem>
              <ListItem>
                <Image
                  src="/illustrations/analytics-image.svg"
                  alt="analiza danych"
                />
                <ContentContainer>
                  <TitleHeader color="yellow">
                    Dostęp do narzędzi analitycznych
                  </TitleHeader>
                  <Paragraph color="white">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself.
                  </Paragraph>
                </ContentContainer>
              </ListItem>
            </List>
          </Wrapper>
        </BackgroundImage>
      </SectionContainer>
    </>
  );
};

export default ServicesSection;
