import React from 'react';
import { Wrapper, TitleHeader, Image, Button } from 'components';
import { SectionContainer, GridContainer, ImageContainer } from './style';

const HomeContactSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <GridContainer>
          <TitleHeader color="blue">
            Chcesz dowiedzieć się czegoś, czego nie znalazłeś na naszej stronie?
          </TitleHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            non ex similique, magnam repudiandae fugiat accusamus rem ipsa
            reprehenderit dolor vero sequi aliquam tenetur, soluta provident
            laudantium aspernatur ipsam recusandae.
          </p>
          <ImageContainer>
            <Image
              src="/illustrations/questions-image.svg"
              alt="skontaktuj się"
            />
          </ImageContainer>
          <Button to="/kontakt" pattern="gatsbyLink">
            Napisz do nas
          </Button>
        </GridContainer>
      </Wrapper>
    </SectionContainer>
  );
};

export default HomeContactSection;
