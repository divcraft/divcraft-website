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
      'Tylko od wyglądu witryny zależy, czy użytkownik w ogóle zacznie ją eksplorować. Dlatego Twoja strona firmowa od razu powinna przykuwać uwagę.',
    imgSrc: '/illustrations/design-image.svg',
    imgAlt: 'projekt graficzny',
  },
  {
    title: 'Zmieniaj i dodawaj treści',
    description:
      'Jeśli  w przyszłości zechcesz odświeżyć wygląd strony lub zmienić styl komunikacji, zrobisz to wszystko sam za pomocą kilku kliknięć myszką. ',
    imgSrc: '/illustrations/content-image.svg',
    imgAlt: 'edycja treści',
  },
  {
    title: 'Szybka strona to dobra strona',
    description:
      'Strony, które ładują się szybciej, zajmują lepsze miejsca w wynikach wyszukiwania Google. Każdy nasz projekt jest w pełni responsywny, czyli zoptymalizowany do przeglądania na komputerze, smartfonie czy tablecie.',
    imgSrc: '/illustrations/time-image.svg',
    imgAlt: 'wczytywanie strony',
  },
  {
    title: 'Analizuj, by stać się najlepszym',
    description:
      'Narzędzia analityczne zbierają dane o Twoich potencjalnych klientach. Wykorzystasz je chociażby w ulepszeniu obsługi, albo zwiększeniu efektywności reklam AdWords.',
    imgSrc: '/illustrations/analytics-image.svg',
    imgAlt: 'analiza danych',
  },
];

const ServicesSection = () => {
  const services = servicesData.map((item, index) => {
    const { title, description, imgSrc, imgAlt } = item;
    const [ref, inView] = useInView({
      threshold: 0.3,
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
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.6, delay: 0.2 }}
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
