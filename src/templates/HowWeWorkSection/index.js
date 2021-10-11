import React from 'react';
import { Wrapper, TitleHeader, Paragraph } from 'components';
import {
  SectionContainer,
  WorkStepsContainer,
  TileList,
  Tile,
  TileTitle,
  TileDescription,
} from './style';

const HowWeWorkSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="blue">Spójrz, jak pracujemy</TitleHeader>
        <Paragraph color="black">
          W całym projekcie decydujące słowo należy do Ciebie. Dla wygody prace
          podzieliliśmy na etapy. Na początku prosimy o Twoje sugestie, a pod
          koniec - o akceptację naszych działań lub uwagi. Odkryj, co dzieje się
          w poszczególnych fazach tworzenia Twojej firmowej strony internetowej:
        </Paragraph>
      </Wrapper>
      <WorkStepsContainer>
        <Wrapper>
          <TileList>
            <Tile>
              <TileTitle>wstępna konsultacja z klientem</TileTitle>
              <TileDescription>
                Poznajemy Twój biznes i oczekiwania w stosunku do firmowej
                strony. Zadajemy dużo pytań, aby jak najszybciej trafić
                dokładnie w Twoje preferencje.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>tworzenie architektury informacji</TileTitle>
              <TileDescription>
                Ustalamy liczbę podstron, ich wzajemne powiązania, styl
                komunikacji, tworzymy treści. Wszystko z myślą o maksymalnym
                komforcie użytkowania Twojego potencjalnego klienta.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>tworzenie projektu graficznego</TileTitle>
              <TileDescription>
                Wybieramy kolory i fonty, tworzymy dedykowane elementy
                graficzne. Ten etap jest dla naszych Zleceniodawców bardzo
                emocjonujący, bo witryna po raz pierwszy “nabiera kształtów”.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>tworzenie kodu źródłowego strony</TileTitle>
              <TileDescription>
                Korzystamy z najnowszych technologii po to, aby Twoja strona
                internetowa była szybka i przyjazna urządzeniom mobilnym.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>publikacja storny na serwerze</TileTitle>
              <TileDescription>
                Nowa strona internetowa Twojej firmy po raz pierwszy trafia do
                Sieci. Pojawiają się pierwsi użytkownicy. Gratulujemy, właśnie
                rozpoczął się kolejny rozdział dla Twojego biznesu.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>finalizacja projektu z klientem</TileTitle>
              <TileDescription>
                Kiedy jesteś zadowolony z efektów naszej pracy, przechodzimy do
                zamknięcia projektu. Dostajesz od nas instrukcje oraz wskazówki
                jak obsługiwać Twoją nową stronę.
              </TileDescription>
            </Tile>
          </TileList>
        </Wrapper>
      </WorkStepsContainer>
    </SectionContainer>
  );
};

export default HowWeWorkSection;
