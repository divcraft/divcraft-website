import React from 'react';
import Layout from 'layouts';
import {
  Banner,
  IntroductionSection,
  ServicesSection,
  TechnologiesSection,
} from 'templates';

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <IntroductionSection />
      <ServicesSection />
      <TechnologiesSection />
    </Layout>
  );
};

export default HomePage;
