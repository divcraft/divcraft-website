import React from 'react';
import { PortfolioSection } from 'templates';
import { SEO } from 'utils';

const PortfolioPage = () => {
  return (
    <>
      <SEO title="Portfolio" />
      <PortfolioSection />
    </>
  );
};

export default PortfolioPage;
