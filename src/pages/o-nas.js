import React from 'react';
import Layout from 'layouts';
import {
  AboutUsSection,
  OurPhilosophySection,
  HowWeWorkSection,
} from 'templates';

const AboutPage = () => {
  return (
    <Layout>
      <AboutUsSection />
      <OurPhilosophySection />
      <HowWeWorkSection />
    </Layout>
  );
};

export default AboutPage;
