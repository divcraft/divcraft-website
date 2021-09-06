import React from 'react';
import { Wrapper, TitleHeader } from 'components';
import {
  Section,
  Container,
  Image,
  TitleContainer,
  Paragraph1,
  Paragraph2,
} from './style';

const IntroductionSection = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <TitleContainer>
            <TitleHeader color="blue">Strony internetowe na miarę</TitleHeader>
          </TitleContainer>
          <Paragraph1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti nam tenetur labore cupiditate placeat, ullam eligendi!
            Consequuntur exercitationem repellat laboriosam ex, sequi
            voluptates, fugit voluptatem, dolor dolore doloremque
            necessitatibus.
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
        </Container>
      </Wrapper>
    </Section>
  );
};

export default IntroductionSection;
