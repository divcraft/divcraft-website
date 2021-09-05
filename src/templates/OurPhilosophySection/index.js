import React from 'react';
import { Wrapper, TitleHeader, Paragraph } from 'components';
import { SectionContainer } from './style';

const OurPhilosophySection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="yellow">Nasza filozofia</TitleHeader>
        <Paragraph color="white">
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
    </SectionContainer>
  );
};

export default OurPhilosophySection;
