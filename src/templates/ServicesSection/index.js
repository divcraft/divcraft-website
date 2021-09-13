import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Paragraph, Image } from 'components';
import {
  SectionContainer,
  BackgroundImage,
  List,
  AniListItem,
  ImageContainer,
  ContentContainer,
} from './style';

const servicesData = [
  {
    title: 'Oryginalny projekt graficzny',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.',
    imgSrc: '/illustrations/design-image.svg',
    imgAlt: 'projekt graficzny',
  },
  {
    title: 'Dynamiczna edycja treści',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.',
    imgSrc: '/illustrations/content-image.svg',
    imgAlt: 'edycja treści',
  },
  {
    title: 'Wysoka prędkość wczytywania',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.',
    imgSrc: '/illustrations/time-image.svg',
    imgAlt: 'wczytywanie strony',
  },
  {
    title: 'Dostęp do narzędzi analitycznych',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.',
    imgSrc: '/illustrations/analytics-image.svg',
    imgAlt: 'analiza danych',
  },
];

const ServicesSection = () => {
  const services = servicesData.map((item, index) => {
    const { title, description, imgSrc, imgAlt } = item;
    const [ref, inView] = useInView();
    const controls = useAnimation();
    const isOdd = index === 0 || index === 2;
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    return (
      <AniListItem
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={{
          hidden: {
            opacity: 0,
            x: isOdd ? -200 : 200,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
      >
        <ImageContainer>
          <Image src={imgSrc} alt={imgAlt} />
        </ImageContainer>
        <ContentContainer>
          <TitleHeader color="yellow">{title}</TitleHeader>
          <Paragraph color="white">{description}</Paragraph>
        </ContentContainer>
      </AniListItem>
    );
  });

  return (
    <>
      <SectionContainer>
        <BackgroundImage>
          <Wrapper>
            <List>{services}</List>
          </Wrapper>
        </BackgroundImage>
      </SectionContainer>
    </>
  );
};

export default ServicesSection;
