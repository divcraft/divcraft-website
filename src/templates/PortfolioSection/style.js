import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding-top: 30px;
`;

export const ArticleContainer = styled.article`
  padding: 15px;
  margin: 30px 0;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(even) {
    background-color: ${({ theme: { colors } }) => colors.blue};
    & h2,
    & p {
      color: white;
    }
  }
  &:nth-child(odd) {
    background-color: ${({ theme: { colors } }) => colors.gray.light};
    & h2 {
      color: ${({ theme: { colors } }) => colors.blue};
    }
    & p {
      color: black;
    }
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 40%;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      'img link'
      'img description'
      'img button';
    & > div {
      grid-area: img;
      margin: 0;
      align-self: center;
    }
    & h2 {
      grid-area: link;
      text-align: left;
      margin: 10px 20px;
    }
    & p {
      grid-area: description;
      margin: 0 20px 10px;
    }
    & > a {
      grid-area: button;
      margin: 10px 20px 0;
    }
    &:nth-child(even) {
      grid-template-columns: 1fr 40%;
      grid-template-areas:
        'img link'
        'img description'
        'img button';
      & > div {
        margin-right: 10px;
        margin-left: 0;
      }
    }
    &:nth-child(odd) {
      grid-template-columns: 40% 1fr;
      grid-template-areas:
        'link img'
        'description img'
        'button img';
      & > div {
        margin-right: 0;
        margin-left: 10px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  box-shadow: 0 3px 8px ${({ theme: { colors } }) => colors.gray.dark};
  margin: 15px 0;
  overflow: hidden;
  & img {
    transition: all ease-in-out 0.3s;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;

export const LinkTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  & a {
    font-family: inherit;
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LinkButton = styled.a`
  display: block;
  width: 165px;
  height: 45px;
  color: black;
  background-color: ${({ theme: { colors } }) => colors.yellow};
  text-align: center;
  line-height: 45px;
  text-decoration: none;
  &:hover {
    background-color: #f2d201;
  }
`;
