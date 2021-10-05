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

export const Form = styled.form`
  width: 100%;
  display: block;
  & label,
  & input,
  & textarea {
    line-height: 1.5;
  }
  & input,
  & textarea {
    width: 100%;
    margin-top: 3px;
    padding: 10px;
    border: none;
    box-shadow: ${({ theme: { boxshadow } }) => boxshadow.light};
  }
  @media (min-width: 769px) {
    width: 50%;
    display: inline-block;
  }
`;

export const FormItem = styled.div`
  margin-top: 10px;
`;

export const FormLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.gray.dark};
`;

export const FormInput = styled.input`
  @media (min-width: 769px) {
    max-width: 345px;
  }
`;

export const FormTextarea = styled.textarea`
  height: 340px;
  resize: none;
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
