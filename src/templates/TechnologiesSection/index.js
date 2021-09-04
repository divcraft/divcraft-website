import React from 'react';
import { Wrapper, TitleHeader, Image } from 'components';
import { TitleAligner, TileContainer, Tile, IconTitle } from './style';

const TechnologiesSection = () => {
  return (
    <section>
      <Wrapper>
        <TitleAligner>
          <TitleHeader color="black">
            Technologie wykorzystywane do tworzenia naszych stron
          </TitleHeader>
        </TitleAligner>
        <TileContainer>
          <Tile>
            <Image src="/icons/frontend-stack-icon.svg" alt="html css js" />
            <IconTitle>HTML, CSS, JS</IconTitle>
          </Tile>
          <Tile>
            <Image src="/icons/gatsby-icon.svg" alt="gatsbyjs" />
            <IconTitle>Gatsby.js</IconTitle>
          </Tile>
          <Tile>
            <Image src="/icons/adobe-icon.svg" alt="adobe" />
            <IconTitle>Adobe</IconTitle>
          </Tile>
          <Tile>
            <Image src="/icons/aws-icon.svg" alt="amazon web services" />
            <IconTitle>Amazon Web Services</IconTitle>
          </Tile>
          <Tile>
            <Image src="/icons/dato-cms-icon.svg" alt="headless cms" />
            <IconTitle>Headless CMS</IconTitle>
          </Tile>
          <Tile>
            <Image
              src="/icons/google-analytics-icon.svg"
              alt="google analytics"
            />
            <IconTitle>Google Analytics</IconTitle>
          </Tile>
        </TileContainer>
      </Wrapper>
    </section>
  );
};

export default TechnologiesSection;
