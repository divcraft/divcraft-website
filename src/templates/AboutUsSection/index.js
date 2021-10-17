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
          To, co kryje się pod marką <span className="blue">divcraft</span>, to
          jednoosobowa inicjatywa gospodarcza, wspomagająca się w realizowaniu
          zleceń pracą innych wykwalifikowanych ludzi . We współpracy z innymi
          grafikami i copywrighterami tworzymy grupę osób, które biorą czynny
          udział w tworzeniu naszych stron. Całość naszych prac jest realizowana
          w pełni zdalnie.
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
          Swoją przygodę ze stronami zacząłem w marcu 2018 roku. Rok później
          udało mi się ukończyć studia inżynieryjne na Akademii Morskiej w
          Szczecinie (specjalizacja geoinformatyka). Od tamtego czasu ciągle
          zgłębiam wiedzę z takich dziedzin jak:
          <ul>
            <li>tworzenie projektów graficznych</li>
            <li>programowanie stron i aplikacji internetowych</li>
            <li>hosting i utrzymanie infrastruktury www</li>
            <li>projektowanie architektury informacji</li>
            <li>projektowanie doświadczeń użytkownika</li>
          </ul>
        </p>
        <p>
          Moją główną rolą jest organizacja pracy oraz kontakt z klientami.
          Zajmuję się też realizowaniem prac twórczych, takich jak m.in.
          tworzenie grafik i kodu źródłowego.{' '}
          <span className="blue">divcraft</span> to dla mnie przedsięwzięcie
          pozwalające realizować się w sposób kreatywny oraz zarabiać na swojej
          pasji. Dzięki temu jestem również w stanie obserwować to, w jaki
          sposób moje projekty rosną i stają się użyteczne dla społeczeństwa.
          Budzi to we mnie ogromną satysfakcję. Mogę też w ten sposób generować
          zlecenia dla innych, dokładając tym samym małą cegiełkę w budowaniu
          wspólnej gospodarki.
        </p>
      </Wrapper>
    </SectionContainer>
  );
};

export default AboutUsSection;
