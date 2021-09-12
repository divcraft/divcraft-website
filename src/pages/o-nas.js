import React from 'react';
import {
  AboutUsSection,
  OurPhilosophySection,
  HowWeWorkSection,
} from 'templates';
import { SEO } from 'utils';

const AboutPage = () => {
  return (
    <>
      <SEO title="O nas" />
      <AboutUsSection />
      <OurPhilosophySection />
      <HowWeWorkSection />
    </>
  );
};

export default AboutPage;
