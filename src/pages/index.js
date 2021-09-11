import React from 'react';
import Layout from 'layouts';
import {
  HeroSection,
  IntroductionSection,
  ServicesSection,
  TechnologiesSection,
  ProfitsSection,
  HomeContactSection,
} from 'templates';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProfitsSection />
      <HomeContactSection />
    </Layout>
  );
};

export default HomePage;
