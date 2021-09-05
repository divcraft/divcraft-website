import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 1px;
  background: linear-gradient(45deg, white, #cce1ff);
  @media (min-width: 900px) {
    padding-top: 0;
  }
`;

export const Container = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-template-areas:
      '. img'
      '. img'
      '. img'
      '. img'
      '. img'
      '. img'
      '. img';
  }
  & *:nth-child(1) {
    margin-top: calc(30px + 5vw);
  }
`;

export const Image = styled.img`
  width: 100%;
  padding: 5% 10%;
  grid-area: img;
  @media (min-width: 900px) {
    padding: 20px;
    margin-top: 50px;
  }
`;
