import React from 'react'; // ,{ useEffect }
import { StaticImage } from 'gatsby-plugin-image';
// import { useInView } from 'react-intersection-observer';
// import { useAnimation } from 'framer-motion';
import { Wrapper, TitleHeader } from 'components';
import {
  AniSectionContainer,
  ContentContainer,
  ImageContainer,
  TitleContainer,
  Paragraph1,
  Paragraph2,
} from './style';

const IntroductionSection = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.3,
  // });
  // const controls = useAnimation();
  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible');
  //   }
  // }, [controls, inView]);
  return (
    <AniSectionContainer>
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
          <ImageContainer>
            <StaticImage
              src="../../images/introduction-image.jpg"
              alt="nowoczesne strony www"
            />
          </ImageContainer>
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
