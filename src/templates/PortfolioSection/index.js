import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Wrapper, TitleHeader, Button } from 'components';
import {
  SectionContainer,
  ArticleContainer,
  LinkTitle,
  ImageContainer,
} from './style';

const PortfolioSection = () => {
  const {
    allDatoCmsPortfolioItem: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allDatoCmsPortfolioItem {
          nodes {
            linkName
            link
            id
            description
            image {
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
      }
    `
  );
  const portfolio = nodes.map(item => {
    const { id, link, linkName, description, image } = item;
    const imageProps = getImage(image);
    return (
      <ArticleContainer key={id}>
        <LinkTitle>
          <a href={link} target="_blank" rel="noreferrer">
            {linkName}
          </a>
        </LinkTitle>
        <ImageContainer>
          <GatsbyImage image={imageProps} alt={linkName} />
        </ImageContainer>
        <p>{description}</p>
        <Button href={link} target="_blank" rel="noreferrer" pattern="link">
          Zobacz stronę
        </Button>
      </ArticleContainer>
    );
  });
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
