import React from 'react';
import { Wrapper, TitleHeader, Paragraph } from 'components';
import { SectionContainer } from './style';

const OurPhilosophySection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="yellow">Nasza filozofia</TitleHeader>
        <Paragraph color="white">
          Świetnie rozumiemy jak wiele wyzwań ma przed sobą młody przedsiębiorca
          próbujący swoich sił na rynku. Głównym celem działalności jest
          maksymalne uproszczenie takiej osobie dotarcia do potencjalnych
          klientów relatywnie tanim kosztem. Ponadto chcemy też tworzyć obraz
          naszych klientów jako ekspertów w swojej dziedzinie, osób godnych
          zaufania i wartych swoich pieniędzy. Ma to pomóc przetrwać początki
          prowadzenia działalności, które z reguły bywają najcięższe.
        </Paragraph>
        <Paragraph color="white">
          Nie jesteśmy agencją, która powiela schematy i produkuje setki
          identycznych witryn. Jesteśmy twórcami, którzy do swojej pracy dodają
          pasję i zaangażowanie. W ten sposób{' '}
          <span className="yellow">divcraft</span> tworzy internetowe strony dla
          firm, które pozwalają przedsiębiorcom:
        </Paragraph>
        <ul>
          <li>
            <Paragraph color="white">
              dotrzeć do nowych klientów i wzmocnić relację z istniejącymi
            </Paragraph>
          </li>
          <li>
            <Paragraph color="white">
              zwiększyć sprzedaż, przy jednoczesnej redukcji kosztów promocji
            </Paragraph>
          </li>
          <li>
            <Paragraph color="white">
              wyprzedzić konkurencję i podbić rynek
            </Paragraph>
          </li>
        </ul>
        <Paragraph color="white">
          Zależy nam na tym, żeby nasze strony były nowoczesne i innowacyjne,
          dlatego stale obserwujemy zmiany technologiczne pojawiające się na
          rynku i szybko się do nich dostosowujemy. Dużą wagę przykładamy
          również do rozwijania i umiejętnego budowania doświadczeń użytkownika.
          Nasze strony są przez to intuicyjne, łatwe w obsłudze, responsywne,
          wygodne, i przyjazne dla oka. Stale śledzimy trendy i rozwijamy się w
          tym zakresie.
        </Paragraph>
      </Wrapper>
    </SectionContainer>
  );
};

export default OurPhilosophySection;
