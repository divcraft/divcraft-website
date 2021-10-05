import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Image, Button, CornerLines } from 'components';
import { AniSectionContainer, GridContainer, ImageContainer } from './style';

const HomeContactSection = () => {
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
    <AniSectionContainer
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8, delay: 0.2 }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <CornerLines pattern="top" />
      <Wrapper>
        <GridContainer>
          <TitleHeader color="blue">Masz pytania? Pomysły?</TitleHeader>
          <p>
            Czekamy na Ciebie! Skontaktuj się z nami, jeżeli czujesz, że możemy
            Ci pomóc. Profesjonalną konsultację zawsze otrzymasz gratis.
            Wystarczy wypełnić krótki formularz zgłoszeniowy. Chciałbyś
            niezobowiązująco porozmawiać o Twojej nowej stronie firmowej? Bo my
            bardzo!
          </p>
          <ImageContainer>
            <Image
              src="/illustrations/questions-image.svg"
              alt="skontaktuj się"
            />
          </ImageContainer>
          <Button to="/kontakt" pattern="gatsbyLink">
            Napisz do nas
          </Button>
        </GridContainer>
      </Wrapper>
      <CornerLines pattern="bottom" />
    </AniSectionContainer>
  );
};

export default HomeContactSection;
