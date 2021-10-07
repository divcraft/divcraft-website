import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, TitleHeader, Button } from 'components';
import {
  SectionContainer,
  FlexContainer,
  AniImageContainer,
  GrayContainer,
  TimeCounter,
} from './style';

const DiscountSection = () => {
  const [nowTime, setNowTime] = useState(new Date().getTime());
  setInterval(() => setNowTime(new Date().getTime()), 1000);
  const setDiscountTime = () => {
    const endTime = new Date('2021-10-31 23:59:59').getTime();
    const days = Math.floor(
      endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
      (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
    );
    const secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    return (
      <p>
        <span>{days} dni </span>
        <span>{hours}h </span>
        <span>{minutes}m </span>
        <span>{secs}s</span>
      </p>
    );
  };
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
      <Wrapper>
        <FlexContainer>
          <div>
            <TitleHeader color="blue">30% rabatu na start!</TitleHeader>
            <p>
              Start firmy jest najtrudniejszy. Aby Ci go ułatwić, w październiku
              przygotowaliśmy aż 30% rabatu na nasze usługi. Jak widać, na
              jesień spadają nie tylko liście. Ale pośpiesz się, bo ta oferta
              skończy się już za:
            </p>
          </div>
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
            <StaticImage
              src="../../images/discount-image.jpeg"
              alt="nowoczesne strony www"
            />
          </AniImageContainer>
        </FlexContainer>
      </Wrapper>
      <GrayContainer>
        <Wrapper>
          <p>Oferta dostępna jeszcze przez:</p>
          <TimeCounter>{setDiscountTime()}</TimeCounter>
          <Button pattern="button">Otrzymaj zniżkę</Button>
        </Wrapper>
      </GrayContainer>
    </SectionContainer>
  );
};

export default DiscountSection;
