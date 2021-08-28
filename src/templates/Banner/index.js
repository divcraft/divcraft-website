import React from 'react';
import { Wrapper, LinkButton } from 'components';
import { SectionContainer, Content, Title, SubTitle } from './style';

const Banner = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <Content>
          <div>
            <Title>Pomagamy młodym biznesom rozwinąć się w sieci</Title>
            <SubTitle>
              Stwórzmy razem stronę internetową, która nada nowy wymiar twojej
              firmie
            </SubTitle>
          </div>
          <LinkButton to="/portfolio">Zobacz portfolio</LinkButton>
        </Content>
      </Wrapper>
    </SectionContainer>
  );
};

export default Banner;
