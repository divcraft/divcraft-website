import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader, Image, Button } from 'components';
import { AniSectionContainer, GridContainer, ImageContainer } from './style';

const HomeContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <AniSectionContainer
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8, delay: 0.2 }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
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
    </AniSectionContainer>
  );
};

export default HomeContactSection;
