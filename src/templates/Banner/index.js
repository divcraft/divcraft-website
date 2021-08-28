import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper } from 'components';
import { SectionContainer, Content, Title, SubTitle } from './style';

const Banner = () => {
  return (
    <SectionContainer>
      <StaticImage
        src="../../images/main-bg-mobile.jpg"
        alt="banner"
        style={{
          gridArea: '1/1',
        }}
      />
      <Content>
        <Wrapper>
          <Title>Pomagamy młodym biznesom rozwinąć się w sieci</Title>
          <SubTitle>
            Stwórzmy razem stronę internetową, która nada nowy wymiar twojej
            firmie
          </SubTitle>
          <Link to="/portfolio">Zobacz portfolio</Link>
        </Wrapper>
      </Content>
    </SectionContainer>
  );
};

export default Banner;
