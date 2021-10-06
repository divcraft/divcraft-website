import React from 'react';
import { Wrapper, TitleHeader, Paragraph, SectionBar } from 'components';
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
      <SectionBar pattern="top" />
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
                Dzięki lepszej rozpoznawalności firmy w Internecie:
              </TitleHeader>
              <List>
                <ListItem>
                  <Paragraph color="white">
                    znajdziesz nowych klientów
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph color="white">
                    zwiększysz konwersję na stronie
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph color="white">wyprzedzisz konkurencję</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph color="white">
                    sprzedaż więcej i szybciej
                  </Paragraph>
                </ListItem>
              </List>
            </ContentContainer>
          </FlexContainer>
        </Wrapper>
      </BackgroundImage>
      <SectionBar pattern="bottom" />
    </SectionContainer>
  );
};

export default ProfitsSection;
