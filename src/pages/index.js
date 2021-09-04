import React from 'react';
import Layout from 'layouts';
import { Banner, IntroductionSection, ServicesSection } from 'templates';

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <IntroductionSection />
      <ServicesSection />
    </Layout>
  );
};

export default HomePage;
