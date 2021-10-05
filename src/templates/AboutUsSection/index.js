import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, TitleHeader } from 'components';
import {
  SectionContainer,
  UserContainer,
  ImageContainer,
  NameText,
  SpecialityText,
  BlueText,
} from './style';

const AboutUsSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="blue">Kim jesteśmy?</TitleHeader>
        <p>
          Zajmujemy się tworzeniem profesjonalnych stron internetowych,
          pomagając małym i średnim firmom postawić pierwsze kroki w Internecie.
          Nazwa Divcraft powstała z połączenia dwóch słów: "div", czyli
          najpopularniejszego znacznika języka HTML, który wykorzystywany jest
          do tworzenia stron internetowych oraz "craft", co rozumiemy, jako
          rzemiosło. W ten sposób podkreślamy, że każdy nasz projekt jest
          unikalny i idealnie dopasowany do potrzeb oraz oczekiwań klienta.
        </p>
        <UserContainer>
          <ImageContainer>
            <StaticImage
              src="../../images/profile-photo.jpg"
              alt="Tomasz Ogonowski"
            />
          </ImageContainer>
          <NameText>Tomasz Ogonowski</NameText>
          <SpecialityText>
            <span>web developer & </span>
            <span> projektant UI/UX</span>
          </SpecialityText>
          <BlueText>założyciel divcraft</BlueText>
        </UserContainer>
        <p>
          Od 2018 roku zajmuje się profesjonalnym tworzeniem projektów
          graficznych oraz stron internetowych. Interesuję się projektowaniem
          architektury informacji, UX/UI, programowaniem w technologii
          react.js/gatsby.js, zagadnieniami związanymi z hostingiem i
          utrzymaniem infrastruktury www. Wierzę, że usługi
          <span className="blue"> divcraft</span> zwiększą rozpoznawalność
          Twojej firmy w internecie. Czy jesteś gotowy na więcej?
        </p>
      </Wrapper>
    </SectionContainer>
  );
};

export default AboutUsSection;
