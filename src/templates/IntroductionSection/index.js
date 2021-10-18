import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, TitleHeader } from 'components';
import {
  SectionContainer,
  ContentContainer,
  AniImageContainer,
  TitleContainer,
  Paragraph1,
  Paragraph2,
} from './style';

const IntroductionSection = () => {
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
        <ContentContainer>
          <TitleContainer>
            <TitleHeader color="blue">
              Strona internetowa dla Twojej firmy
            </TitleHeader>
          </TitleContainer>
          <Paragraph1>
            Strony internetowe firm to praktyczne narzędzia do zdobywania
            klientów. Przez 24 godziny na dobę, 7 dni w tygodniu budują Twój
            wizerunek przedsiębiorcy. Ułatwiają sprzedaż usług, pozwalając
            wygrać z konkurencją. Potencjał, jaki dają profesjonalnie wykonane
            serwisy, przekłada się w sposób wymierny na wyniki wizerunkowe i
            finansowe.
          </Paragraph1>
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
              src="../../images/introduction-image.jpg"
              alt="nowoczesne strony www"
            />
          </AniImageContainer>
          <Paragraph2>
            W <span className="blue">divcraft</span> tworzymy strony internetowe
            idealnie dopasowane do naszych zleceniodawców. Unikalny projekt
            graficzny wyróżnia Cię na tle konkurencji. Starannie budowane
            doświadczenie użytkownika sprawia, że klienci odwiedzą Cię ponownie.
            Czy tak wyobrażasz sobie stronę internetową Twojej firmy?
          </Paragraph2>
        </ContentContainer>
      </Wrapper>
    </SectionContainer>
  );
};

export default IntroductionSection;
