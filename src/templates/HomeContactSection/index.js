import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Image, Button, CornerLines } from 'components';
import { SectionContainer, GridContainer, AniImageContainer } from './style';

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
    <SectionContainer>
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
          <AniImageContainer
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.6 }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
          >
            <Image
              src="/illustrations/questions-image.svg"
              alt="skontaktuj się"
            />
          </AniImageContainer>
          <Button to="/kontakt" pattern="gatsbyLink">
            Porozmawiajmy
          </Button>
        </GridContainer>
      </Wrapper>
      <CornerLines pattern="bottom" />
    </SectionContainer>
  );
};

export default HomeContactSection;
