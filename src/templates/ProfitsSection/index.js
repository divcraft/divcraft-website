import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Paragraph, SectionBar } from 'components';
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
      <SectionBar pattern="top" />
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
          </AniFlexContainer>
        </Wrapper>
      </BackgroundImage>
      <SectionBar pattern="bottom" />
    </SectionContainer>
  );
};

export default ProfitsSection;
