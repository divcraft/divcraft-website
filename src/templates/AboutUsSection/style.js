import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin: 40px 0 30px;
  padding: auto;
`;

export const UserContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: 25px 0;
  & p {
    margin: 0;
    margin-top: 5px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
  }
  @media (min-width: 769px) {
    width: auto;
    max-width: none;
    margin: 13px 0 25px;
    padding: 15px;
    display: inline-grid;
    grid-template-areas:
      'img .'
      'img gname'
      'img speciality'
      'img company'
      'img .';
    & p {
      text-align: left;
      margin-top: 1px;
      margin-bottom: 1px;
      margin-left: 5px;
      margin-right: 15px;
    }
    & > div {
      margin-right: 15px;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: auto;
  grid-area: img;
`;

export const NameText = styled.p`
  font-size: 24px;
  grid-area: gname;
`;

export const SpecialityText = styled.p`
  line-height: 1.25;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  grid-area: speciality;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & span:first-child {
    margin-right: 5px;
  }
`;

export const BlueText = styled.p`
  color: ${({ theme: { colors } }) => colors.blue.regular};
  grid-area: company;
`;
