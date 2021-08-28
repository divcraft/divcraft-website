import React from 'react';
import { Wrapper, TitleHeader } from 'components';
import { Section, Container, Image } from './style';

const IntroductionSection = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <TitleHeader color="blue">Strony internetowe na miarę</TitleHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti nam tenetur labore cupiditate placeat, ullam eligendi!
            Consequuntur exercitationem repellat laboriosam ex, sequi
            voluptates, fugit voluptatem, dolor dolore doloremque
            necessitatibus.
          </p>
          <Image
            src="illustrations/webdev-image.svg"
            alt="makieta strony www"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti nam tenetur labore cupiditate placeat, ullam eligendi!
            Consequuntur exercitationem repellat laboriosam ex, sequi
            voluptates, fugit voluptatem, dolor dolore doloremque
            necessitatibus.dd
          </p>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default IntroductionSection;
