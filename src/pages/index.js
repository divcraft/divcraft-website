import React from 'react';
import Layout from 'layouts';
import {
  Banner,
  IntroductionSection,
  ServicesSection,
  TechnologiesSection,
  ProfitsSection,
  HomeContactSection,
} from 'templates';

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <IntroductionSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProfitsSection />
      <HomeContactSection />
    </Layout>
  );
};

export default HomePage;
