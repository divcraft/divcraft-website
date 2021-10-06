import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, TitleHeader, CornerLines } from 'components';
import {
  SectionContainer,
  ContentContainer,
  ImageContainer,
  TitleContainer,
  Paragraph1,
  Paragraph2,
} from './style';

const IntroductionSection = () => {
  return (
    <SectionContainer>
      <CornerLines pattern="top" />
      <Wrapper>
        <ContentContainer>
          <TitleContainer>
            <TitleHeader color="blue">
              Strona internetowa dla Twojej firmy
            </TitleHeader>
          </TitleContainer>
          <Paragraph1>
            Strony internetowe firm to praktyczne narzędzia do zdobywania
            klientów. Przez 24h na dobę, 7 dni w tygodniu i całymi latami budują
            wizerunek przedsiębiorcy, ułatwiają sprzedaż usług, pozwalając
            wygrać z konkurencją. Ale taki potencjał mają tylko profesjonalnie
            wykonane serwisy.
          </Paragraph1>
          <ImageContainer>
            <StaticImage
              src="../../images/introduction-image.jpg"
              alt="nowoczesne strony www"
            />
          </ImageContainer>
          <Paragraph2>
            W <span className="blue">divcraft</span> tworzymy strony internetowe
            idealnie dopasowane do Zleceniodawców. Po to, aby Twoja strona była
            funkcjonalnym narzędziem marketingowym. Unikalny projekt graficzny
            wyróżnia Cię na tle konkurencji. Zaawansowany UX design zapewnia
            wygodę obsługi. Czy tak wyobrażasz sobie stronę internetową Twojej
            firmy?
          </Paragraph2>
        </ContentContainer>
      </Wrapper>
      <CornerLines pattern="bottom" />
    </SectionContainer>
  );
};

export default IntroductionSection;
