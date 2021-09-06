import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 0;
`;

export const FormContainer = styled.div`
  padding-top: 30px;
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  @media (min-width: 768px) {
    padding: 30px 0 50px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: block;
  @media (min-width: 768px) {
    width: 50%;
    display: inline-block;
  }
`;

export const FormItem = styled.div`
  margin-top: 10px;
`;

export const FormLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #545454;
  line-height: 1.5;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-top: 3px;
  padding: 10px;
  border: none;
  box-shadow: 0 3px 6px #c6c6c6;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  @media (min-width: 768px) {
    width: 345px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  margin-top: 3px;
  height: 340px;
  resize: none;
  padding: 10px;
  border: none;
  box-shadow: 0 3px 6px #c6c6c6;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.5;
`;

export const FormButton = styled.button`
  border: none;
  cursor: pointer;
  display: block;
  width: 165px;
  height: 45px;
  color: black;
  background-color: ${({ theme: { colors } }) => colors.yellow};
  text-align: center;
  line-height: 45px;
  text-decoration: none;
  margin-top: 15px;
  &:hover {
    background-color: #f2d201;
  }
`;

export const FormImageContainer = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: 5%;
  transform: translateY(-15px);
  @media (min-width: 768px) {
    transform: translateY(-20%);
    padding: 5%;
    width: 50%;
    display: inline-block;
    margin: 0;
  }
`;
