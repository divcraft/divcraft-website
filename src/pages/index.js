import React from 'react';
import {
  HeroSection,
  IntroductionSection,
  ServicesSection,
  TechnologiesSection,
  ProfitsSection,
  HomeContactSection,
} from 'templates';
import { SEO } from 'utils';

const HomePage = () => {
  return (
    <>
      <SEO title="Strona główna" />
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProfitsSection />
      <HomeContactSection />
    </>
  );
};

export default HomePage;
