import React from 'react';
import Layout from 'layouts';
import {
  Banner,
  IntroductionSection,
  ServicesSection,
  TechnologiesSection,
  ProfitsSection,
} from 'templates';

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <IntroductionSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProfitsSection />
    </Layout>
  );
};

export default HomePage;
