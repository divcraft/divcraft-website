import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, TitleHeader, Image } from 'components';
import portfolioContent from 'api/portfolioData';
import {
  SectionContainer,
  ArticleContainer,
  LinkTitle,
  ImageContainer,
  LinkButton,
} from './style';

const PortfolioSection = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(
    graphql`
      query PortfolioImageQuery {
        allFile(filter: { relativePath: { regex: "/portfolio/" } }) {
          nodes {
            childrenImageSharp {
              fluid {
                src
                srcSet
              }
            }
          }
        }
      }
    `
  );
  const reorderedNodes = [nodes[2], nodes[1], nodes[3], nodes[0]];
  const portfolioData = portfolioContent.map((item, index) => {
    return {
      ...item,
      src: reorderedNodes[index].childrenImageSharp[0].fluid.src,
      srcSet: reorderedNodes[index].childrenImageSharp[0].fluid.srcSet,
    };
  });
  const portfolio = portfolioData.map(item => (
    <ArticleContainer key={item.url}>
      <LinkTitle>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.name}
        </a>
      </LinkTitle>
      <ImageContainer>
        <Image src={item.src} alt={item.name} srcSet={item.srcSet} />
      </ImageContainer>
      <p>{item.description}</p>
      <LinkButton href={item.url} target="_blank" rel="noreferrer">
        Zobacz stronę
      </LinkButton>
    </ArticleContainer>
  ));
  return (
    <SectionContainer>
      <Wrapper>
        <TitleHeader color="blue">Wykonane przez nas projekty</TitleHeader>
        {portfolio}
      </Wrapper>
    </SectionContainer>
  );
};

export default PortfolioSection;
