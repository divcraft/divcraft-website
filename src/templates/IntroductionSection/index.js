import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
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
      transition={{ duration: 0.8, delay: 0.4 }}
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
