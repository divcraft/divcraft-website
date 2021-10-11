import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Paragraph, Image, SectionBar } from 'components';
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
    title: 'Wybierz unikalny projekt graficzny',
    description:
      'Każdy z naszych projektów posiada unikatowy styl, którego nie spotkasz nigdzie indziej. Przedstaw nam swoją wizję, upodobania i ulubione kolory, a my zajmiemy się resztą.',
    imgSrc: '/illustrations/design-image.svg',
    imgAlt: 'projekt graficzny',
  },
  {
    title: 'Zmieniaj i dodawaj treści',
    description:
      'Prowadzisz blog? Dodajesz relacje z wydarzeń publicznych? A może chcesz po prostu odświeżyć wydgląd dodając nowe zdjęcia? To wszystko zrobisz sam za pomocą kilku kliknięć myszką.',
    imgSrc: '/illustrations/content-image.svg',
    imgAlt: 'edycja treści',
  },
  {
    title: 'Szybka strona to dobra strona',
    description:
      'Dbamy o to, żeby nasze stony ładowały się tak szybko jak to możliwe. Dzięki nowoczesnym technikom optymalizacji każdy nasz projekt jest w pełni dostosowany do przeglądania na komputerze, smartfonie oraz tablecie.',
    imgSrc: '/illustrations/time-image.svg',
    imgAlt: 'wczytywanie strony',
  },
  {
    title: 'Analizuj, by stać się najlepszym',
    description:
      'Dowiedz się w jakich miastach, o jakich porach dnia oraz na jakich urządzeniach odwiedzana jest Twoja strona. A to tylko część możliwości, jakie dają nasze narzędzia analityczne.',
    imgSrc: '/illustrations/analytics-image.svg',
    imgAlt: 'analiza danych',
  },
];

const ServicesSection = () => {
  const services = servicesData.map((item, index) => {
    const { title, description, imgSrc, imgAlt } = item;
    const [ref, inView] = useInView({
      threshold: 0.25,
    });
    const controls = useAnimation();
    const isOdd = index === 0 || index === 2;
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    return (
      <AniListItem
        key={imgSrc}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.6 }}
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
        <ImageContainer ref={ref}>
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
        <SectionBar pattern="top" />
        <BackgroundImage>
          <Wrapper>
            <List>{services}</List>
          </Wrapper>
        </BackgroundImage>
        <SectionBar pattern="bottom" />
      </SectionContainer>
    </>
  );
};

export default ServicesSection;
