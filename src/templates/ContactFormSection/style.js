import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 0;
`;

export const FormContainer = styled.div`
  padding-top: 30px;
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  @media (min-width: 769px) {
    padding: 30px 0 50px;
  }
`;

export const FormImageContainer = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: 5%;
  transform: translateY(-15px);
  @media (min-width: 769px) {
    transform: translateY(-20%);
    padding: 5%;
    width: 50%;
    display: inline-block;
    margin: 0;
  }
`;
