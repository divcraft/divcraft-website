import React from 'react';
import { Wrapper, TitleHeader, Paragraph } from 'components';
import { SectionContainer } from './style';

const OurPhilosophySection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="yellow">Nasza filozofia</TitleHeader>
        <Paragraph color="white">
          Rozumiemy, jak wiele wyzwań ma przed sobą przedsiębiorca, który
          próbuje swoich sił w Polsce. Dlatego maksymalnie upraszczamy firmom
          dotarcie do potencjalnych klientów relatywnie niskim kosztem. Chcemy
          również kreować wizerunki naszych zleceniodawców, jako ekspertów w
          swoich dziedzinach, osób godnych zaufania, świadczących usługi na
          najwyższym poziomie jakości.
        </Paragraph>
        <Paragraph color="white">
          Nie jesteśmy agencją, która powiela schematy i produkuje setki
          identycznych witryny. Jesteśmy twórcami, którzy do swojej pracy dodają
          pasję i zaangażowanie. W ten sposób{' '}
          <span className="yellow">divcraft</span> tworzy internetowe strony dla
          firm, które pozwalają przedsiębiorcom:
        </Paragraph>
        <ul>
          <li>
            <Paragraph color="white">
              budować w internecie wizerunek eksperta i lidera branży
            </Paragraph>
          </li>
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
      </Wrapper>
    </SectionContainer>
  );
};

export default OurPhilosophySection;
