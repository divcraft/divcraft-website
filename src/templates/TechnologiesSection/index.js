import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Image } from 'components';
import {
  SectionContainer,
  TitleAligner,
  TileContainer,
  AniTile,
  IconTitle,
} from './style';

const technologiesData = [
  {
    name: 'HTML, CSS, JS',
    imgSrc: '/icons/frontend-stack-icon.svg',
    imgAlt: 'html css js',
  },
  {
    name: 'Gatsby.js',
    imgSrc: '/icons/gatsby-icon.svg',
    imgAlt: 'gatsby js',
  },
  {
    name: 'Adobe',
    imgSrc: '/icons/adobe-icon.svg',
    imgAlt: 'adobe',
  },
  {
    name: 'Amazon Web Services',
    imgSrc: '/icons/aws-icon.svg',
    imgAlt: 'amazon web services',
  },
  {
    name: 'Headless CMS',
    imgSrc: '/icons/dato-cms-icon.svg',
    imgAlt: 'headless cms',
  },
  {
    name: 'Google Analytics',
    imgSrc: '/icons/google-analytics-icon.svg',
    imgAlt: 'google analytics',
  },
];

const TechnologiesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const technologies = technologiesData.map((item, index) => {
    return (
      <AniTile
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <Image src={item.imgSrc} alt={item.imgAlt} />
        <IconTitle>{item.name}</IconTitle>
      </AniTile>
    );
  });
  return (
    <SectionContainer>
      <Wrapper>
        <TitleAligner>
          <TitleHeader color="black">
            Technologie wykorzystywane do tworzenia naszych stron
          </TitleHeader>
        </TitleAligner>
        <TileContainer>{technologies}</TileContainer>
      </Wrapper>
    </SectionContainer>
  );
};

export default TechnologiesSection;
