import React from 'react';
import { Wrapper, TitleHeader, Paragraph } from 'components';
import { StaticImage } from 'gatsby-plugin-image';
import {
  SectionContainer,
  BackgroundImage,
  FlexContainer,
  ImageContainer,
  ContentContainer,
  List,
  ListItem,
} from './style';

const ProfitsSection = () => {
  return (
    <SectionContainer>
      <BackgroundImage>
        <Wrapper>
          <FlexContainer>
            <ImageContainer>
              <StaticImage
                src="../../images/profits-image.png"
                alt="twoje korzyści"
              />
            </ImageContainer>
            <ContentContainer>
              <TitleHeader color="yellow">
                Obserwuj jak Twoja rozpoznawalność w internecie rośnie
              </TitleHeader>
              <List>
                <ListItem>
                  <Paragraph color="white">
                    docieraj z ofertą do klientów
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph color="white">obserwuj trendy na rynku</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph color="white">pozyskuj nowe kontakty</Paragraph>
                </ListItem>
              </List>
            </ContentContainer>
          </FlexContainer>
        </Wrapper>
      </BackgroundImage>
    </SectionContainer>
  );
};

export default ProfitsSection;
