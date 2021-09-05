import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, TitleHeader } from 'components';
import portfolioContent from 'api/portfolioData';

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
    <div key={item.url}>
      <a href={item.url} target="_blank" rel="noreferrer">
        {item.name}
      </a>
      <img src={item.src} alt={item.name} srcSet={item.srcSet} />
      <p>{item.description}</p>
      <a href={item.url} target="_blank" rel="noreferrer">
        Zobacz stronę
      </a>
    </div>
  ));
  return (
    <section>
      <Wrapper>
        <TitleHeader color="blue">Wykonane przez nas projekty</TitleHeader>
        {portfolio}
      </Wrapper>
    </section>
  );
};

export default PortfolioSection;
