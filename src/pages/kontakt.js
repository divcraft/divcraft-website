import React from 'react';
import { ContactInfoSection, ContactFormSection } from 'templates';
import { SEO } from 'utils';

const ContactPage = () => {
  return (
    <>
      <SEO title="Kontakt" />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  );
};

export default ContactPage;
