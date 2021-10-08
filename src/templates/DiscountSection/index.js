import React, { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, TitleHeader, Button, DiscountFormPopup } from 'components';
import { displayDiscountTime, FormContext } from 'utils';
import {
  SectionContainer,
  FlexContainer,
  AniImageContainer,
  GrayContainer,
  TimeCounter,
} from './style';

const DiscountSection = () => {
  const [showForm, setShowForm] = useContext(FormContext);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    return () => {
      if (showForm) setShowForm(false);
    };
  }, [controls, inView]);
  return (
    <SectionContainer>
      <DiscountFormPopup showForm={showForm} />
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
          <TimeCounter>
            {displayDiscountTime('2021-10-31 23:59:59')}
          </TimeCounter>
          <Button pattern="button" onClick={() => setShowForm(!showForm)}>
            Otrzymaj zniżkę
          </Button>
        </Wrapper>
      </GrayContainer>
    </SectionContainer>
  );
};

export default DiscountSection;
