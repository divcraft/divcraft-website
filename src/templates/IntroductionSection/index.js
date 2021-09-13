import React from 'react';
import { Wrapper, TitleHeader } from 'components';
import {
  AniSectionContainer,
  ContentContainer,
  Image,
  TitleContainer,
  Paragraph1,
  Paragraph2,
} from './style';

const IntroductionSection = () => {
  return (
    <AniSectionContainer
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.6,
        delay: 2,
      }}
    >
      <Wrapper>
        <ContentContainer>
          <TitleContainer>
            <TitleHeader color="blue">Strony internetowe na miarę</TitleHeader>
          </TitleContainer>
          <Paragraph1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti nam tenetur labore cupiditate placeat, ullam eligendi!
            Consequuntur exercitationem repellat laboriosam ex, sequi
            voluptates, fugit voluptatem, dolor dolore doloremque
            necessitatibus. ąłężźć
          </Paragraph1>
          <Image
            src="illustrations/webdev-image.svg"
            alt="makieta strony www"
          />
          <Paragraph2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti nam tenetur labore cupiditate placeat, ullam eligendi!
            Consequuntur exercitationem repellat laboriosam ex, sequi
            voluptates, fugit voluptatem, dolor dolore doloremque
            necessitatibus.dd
          </Paragraph2>
        </ContentContainer>
      </Wrapper>
    </AniSectionContainer>
  );
};

export default IntroductionSection;
