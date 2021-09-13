import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Paragraph } from 'components';
import { StaticImage } from 'gatsby-plugin-image';
import {
  SectionContainer,
  BackgroundImage,
  AniFlexContainer,
  ImageContainer,
  ContentContainer,
  List,
  ListItem,
} from './style';

const ProfitsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <SectionContainer>
      <BackgroundImage>
        <Wrapper>
          <AniFlexContainer
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
          >
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
          </AniFlexContainer>
        </Wrapper>
      </BackgroundImage>
    </SectionContainer>
  );
};

export default ProfitsSection;
