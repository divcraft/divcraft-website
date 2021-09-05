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
        <TitleHeader color="blue">Jak działamy?</TitleHeader>
        <Paragraph color="black">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because.
        </Paragraph>
      </Wrapper>
      <WorkStepsContainer>
        <Wrapper>
          <TileList>
            <Tile>
              <TileTitle>wstępna konsultacja z klientem</TileTitle>
              <TileDescription>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>tworzenie architektury informacji</TileTitle>
              <TileDescription>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a.But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>tworzenie projektu graficznego</TileTitle>
              <TileDescription>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>tworzenie kodu źródłowego strony</TileTitle>
              <TileDescription>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>publikacja storny na serwerze</TileTitle>
              <TileDescription>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a.
              </TileDescription>
            </Tile>
            <Tile>
              <TileTitle>finalizacja projektu z klientem</TileTitle>
              <TileDescription>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a.
              </TileDescription>
            </Tile>
          </TileList>
        </Wrapper>
      </WorkStepsContainer>
    </SectionContainer>
  );
};

export default HowWeWorkSection;
