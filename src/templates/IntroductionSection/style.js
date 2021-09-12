import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px 0;
  background: ${({ theme: { gradient } }) => gradient};
`;

export const Container = styled.div`
  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr auto auto auto 1fr;
    grid-column-gap: 20px;
    grid-template-areas:
      '. img'
      'title img'
      'par1 img'
      'par2 img'
      '. img';
  }
`;

export const Image = styled.img`
  width: 100%;
  padding: 2% 10%;
  grid-area: img;
  @media (min-width: 901px) {
    padding: 0;
    align-self: center;
  }
`;

export const TitleContainer = styled.div`
  grid-area: title;
`;

export const Paragraph1 = styled.p`
  grid-area: par1;
`;

export const Paragraph2 = styled.p`
  grid-area: par2;
`;
