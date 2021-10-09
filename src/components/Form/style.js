import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: block;
  & > div {
    margin-top: 10px;
  }
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
  & label {
    color: ${({ theme: { colors } }) => colors.gray.dark};
  }

  & textarea {
    height: 340px;
    resize: none;
  }
  ${({ pattern }) =>
    pattern === 'contactForm' &&
    css`
      @media (min-width: 769px) {
        width: 50%;
        display: inline-block;
        & input {
          max-width: 345px;
        }
      }
    `}
  ${({ pattern }) =>
    pattern === 'discountForm' &&
    css`
      & button {
        width: 100%;
        margin-top: 15px;
      }
    `}
`;
